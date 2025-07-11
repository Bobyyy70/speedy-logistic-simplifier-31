import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-csrf-token',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}

const securityHeaders = {
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'X-XSS-Protection': '1; mode=block',
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
  'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline' https://js-eu1.hs-scripts.com https://js-eu1.hsforms.net https://js.hs-analytics.net https://js.usemessages.com https://js.hs-banner.com https://static.hsappstatic.net; connect-src 'self' https://*.supabase.co https://*.hubspot.com https://*.hsforms.com https://*.hs-analytics.net https://api.hubapi.com https://meetings-eu1.hubspot.com https://maps.googleapis.com https://www.google.com; img-src 'self' data: https: blob:; style-src 'self' 'unsafe-inline' https://*.hsforms.com https://*.hubspot.com; font-src 'self' https: data:; frame-src 'self' https://*.hubspot.com https://meetings-eu1.hubspot.com https://www.google.com https://maps.google.com; worker-src 'self' blob:; child-src 'self' https://*.hubspot.com https://www.google.com; object-src 'none';",
}

interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  companyName: string
  companyStatus: string
  city: string
  postalCode: string
  website?: string
  leadSource: string
  averageBasket: string
  productType: string
  annualOrders: string
  stockReferences: string
  message?: string
  csrfToken?: string
}

// Enhanced rate limiting with IP tracking
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()
const MAX_REQUESTS_PER_IP = 5
const RATE_LIMIT_WINDOW = 15 * 60 * 1000 // 15 minutes

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const limit = rateLimitMap.get(ip)

  if (!limit) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW })
    return true
  }

  if (now > limit.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW })
    return true
  }

  if (limit.count >= MAX_REQUESTS_PER_IP) {
    return false
  }

  limit.count++
  return true
}

// Input sanitization
function sanitizeInput(input: string): string {
  return input
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<[^>]*>/g, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+\s*=/gi, '')
    .trim()
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email) && email.length <= 254
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    // Validate request method
    if (req.method !== 'POST') {
      return new Response(
        JSON.stringify({ error: 'Invalid request' }),
        { 
          status: 405, 
          headers: { ...corsHeaders, ...securityHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    // Enhanced rate limiting with IP tracking
    const clientIP = req.headers.get('x-forwarded-for')?.split(',')[0] || 
                     req.headers.get('x-real-ip') || 
                     'unknown'
    
    if (!checkRateLimit(clientIP)) {
      console.warn(`Rate limit exceeded for IP: ${clientIP}`)
      return new Response(
        JSON.stringify({ error: 'Too many requests. Please try again later.' }),
        { 
          status: 429, 
          headers: { ...corsHeaders, ...securityHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    console.log(`Processing request from IP: ${clientIP}`)

    // Parse and validate request body with size limit
    const contentLength = req.headers.get('content-length')
    if (contentLength && parseInt(contentLength) > 10000) { // 10KB limit
      return new Response(
        JSON.stringify({ error: 'Request too large' }),
        { 
          status: 413, 
          headers: { ...corsHeaders, ...securityHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    const formData: ContactFormData = await req.json()
    
    // Sanitize all inputs
    const sanitizedData = {
      ...formData,
      firstName: sanitizeInput(formData.firstName),
      lastName: sanitizeInput(formData.lastName),
      email: sanitizeInput(formData.email),
      phone: sanitizeInput(formData.phone),
      companyName: sanitizeInput(formData.companyName),
      city: sanitizeInput(formData.city),
      postalCode: sanitizeInput(formData.postalCode),
      website: formData.website ? sanitizeInput(formData.website) : undefined,
      message: formData.message ? sanitizeInput(formData.message) : undefined,
    }
    
    // Enhanced validation
    if (!sanitizedData.firstName || !sanitizedData.lastName || !sanitizedData.email || !sanitizedData.companyName) {
      return new Response(
        JSON.stringify({ error: 'Required information missing' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, ...securityHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    // Enhanced email validation
    if (!validateEmail(sanitizedData.email)) {
      return new Response(
        JSON.stringify({ error: 'Invalid email format' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, ...securityHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    // Additional security checks
    if (sanitizedData.message && sanitizedData.message.length > 5000) {
      return new Response(
        JSON.stringify({ error: 'Message too long' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, ...securityHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    // Initialize Supabase client
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    // Log the contact form submission securely with sanitized data
    const { error: logError } = await supabase
      .from('contact_submissions')
      .insert({
        company_name: sanitizedData.companyName,
        email: sanitizedData.email,
        lead_source: sanitizedData.leadSource,
        product_type: sanitizedData.productType,
        submitted_at: new Date().toISOString(),
        ip_address: clientIP,
        user_agent: req.headers.get('user-agent')?.substring(0, 500) || 'Unknown'
      })

    if (logError) {
      console.error('Database error:', logError)
      return new Response(
        JSON.stringify({ error: 'Unable to process request' }),
        { 
          status: 500, 
          headers: { ...corsHeaders, ...securityHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    // Send to HubSpot (if configured)
    const hubspotApiKey = Deno.env.get('HUBSPOT_API_KEY')
    if (hubspotApiKey) {
      try {
        const hubspotResponse = await fetch('https://api.hubapi.com/contacts/v1/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${hubspotApiKey}`
          },
          body: JSON.stringify({
            properties: [
              { property: 'firstname', value: sanitizedData.firstName },
              { property: 'lastname', value: sanitizedData.lastName },
              { property: 'email', value: sanitizedData.email },
              { property: 'phone', value: sanitizedData.phone },
              { property: 'company', value: sanitizedData.companyName },
              { property: 'city', value: sanitizedData.city },
              { property: 'message', value: sanitizedData.message || '' }
            ]
          })
        })

        if (!hubspotResponse.ok) {
          console.error('HubSpot API error:', await hubspotResponse.text())
        }
      } catch (hubspotError) {
        console.error('Failed to send to HubSpot:', hubspotError)
      }
    }

    // Send notification email (you can integrate with your email service)
    // For now, we'll just log it securely

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Request processed successfully' 
      }),
      { 
        status: 200, 
        headers: { ...corsHeaders, ...securityHeaders, 'Content-Type': 'application/json' }
      }
    )

  } catch (error) {
    console.error('Contact form error:', error)
    
    return new Response(
      JSON.stringify({ error: 'An error occurred while processing your request' }),
      { 
        status: 500, 
        headers: { ...corsHeaders, ...securityHeaders, 'Content-Type': 'application/json' }
      }
    )
  }
})
