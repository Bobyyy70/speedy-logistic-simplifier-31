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
}

// Rate limiting helper
const checkRateLimit = async (supabase: any, ip: string, endpoint: string) => {
  const now = new Date()
  const windowStart = new Date(now.getTime() - 15 * 60 * 1000) // 15 minutes window
  
  // Clean old entries
  await supabase
    .from('rate_limits')
    .delete()
    .lt('window_start', windowStart.toISOString())
  
  // Check current rate
  const { data: rateLimitData } = await supabase
    .from('rate_limits')
    .select('request_count')
    .eq('ip_address', ip)
    .eq('endpoint', endpoint)
    .gte('window_start', windowStart.toISOString())
    .single()
  
  if (rateLimitData && rateLimitData.request_count >= 5) {
    return false // Rate limit exceeded
  }
  
  // Update or create rate limit entry
  await supabase
    .from('rate_limits')
    .upsert({
      ip_address: ip,
      endpoint: endpoint,
      request_count: (rateLimitData?.request_count || 0) + 1,
      window_start: rateLimitData ? undefined : now.toISOString()
    }, { onConflict: 'ip_address,endpoint' })
  
  return true
}

// Input sanitization helper
const sanitizeInput = (input: string): string => {
  return input
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<[^>]*>/g, '')
    .trim()
    .substring(0, 1000) // Limit length
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
        JSON.stringify({ error: 'Method not allowed' }),
        { 
          status: 405, 
          headers: { ...corsHeaders, ...securityHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    // Initialize Supabase client early for rate limiting
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    // Rate limiting check
    const clientIP = req.headers.get('x-forwarded-for') || 'unknown'
    const rateLimitOk = await checkRateLimit(supabase, clientIP, 'contact-form')
    
    if (!rateLimitOk) {
      // Log rate limit violation
      await supabase.rpc('log_security_event', {
        p_event_type: 'rate_limit_exceeded',
        p_ip_address: clientIP,
        p_user_agent: req.headers.get('user-agent'),
        p_endpoint: 'contact-form',
        p_severity: 'medium'
      })
      
      return new Response(
        JSON.stringify({ error: 'Rate limit exceeded. Please try again later.' }),
        { 
          status: 429, 
          headers: { ...corsHeaders, ...securityHeaders, 'Content-Type': 'application/json' }
        }
      )
    }
    
    // Parse and validate form data
    const rawData = await req.json()
    
    // Check for honeypot field (bot protection)
    if (rawData.website_confirm || rawData.honeypot) {
      // Log spam attempt
      await supabase.rpc('log_security_event', {
        p_event_type: 'spam_attempt',
        p_ip_address: clientIP,
        p_user_agent: req.headers.get('user-agent'),
        p_endpoint: 'contact-form',
        p_details: { honeypot_fields: Object.keys(rawData).filter(k => k.includes('honeypot') || k.includes('website_confirm')) },
        p_severity: 'medium'
      })
      
      return new Response(
        JSON.stringify({ error: 'Spam detected' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, ...securityHeaders, 'Content-Type': 'application/json' }
        }
      )
    }
    
    // Sanitize input data
    const formData: ContactFormData = {
      firstName: sanitizeInput(rawData.firstName || ''),
      lastName: sanitizeInput(rawData.lastName || ''),
      email: sanitizeInput(rawData.email || ''),
      phone: sanitizeInput(rawData.phone || ''),
      companyName: sanitizeInput(rawData.companyName || ''),
      companyStatus: sanitizeInput(rawData.companyStatus || ''),
      city: sanitizeInput(rawData.city || ''),
      postalCode: sanitizeInput(rawData.postalCode || ''),
      website: rawData.website ? sanitizeInput(rawData.website) : undefined,
      leadSource: sanitizeInput(rawData.leadSource || ''),
      averageBasket: sanitizeInput(rawData.averageBasket || ''),
      productType: sanitizeInput(rawData.productType || ''),
      annualOrders: sanitizeInput(rawData.annualOrders || ''),
      stockReferences: sanitizeInput(rawData.stockReferences || ''),
      message: rawData.message ? sanitizeInput(rawData.message) : undefined
    }
    
    // Input validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.companyName) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, ...securityHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      return new Response(
        JSON.stringify({ error: 'Invalid email format' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, ...securityHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    // Log the contact form submission securely (without sensitive data)
    const { error: logError } = await supabase
      .from('contact_submissions')
      .insert({
        company_name: formData.companyName,
        email: formData.email,
        lead_source: formData.leadSource,
        product_type: formData.productType,
        submitted_at: new Date().toISOString(),
        ip_address: clientIP,
        user_agent: req.headers.get('user-agent')
      })

    if (logError) {
      console.error('Failed to log contact submission:', logError)
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
              { property: 'firstname', value: formData.firstName },
              { property: 'lastname', value: formData.lastName },
              { property: 'email', value: formData.email },
              { property: 'phone', value: formData.phone },
              { property: 'company', value: formData.companyName },
              { property: 'city', value: formData.city },
              { property: 'message', value: formData.message || '' }
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
        message: 'Contact form submitted successfully' 
      }),
      { 
        status: 200, 
        headers: { ...corsHeaders, ...securityHeaders, 'Content-Type': 'application/json' }
      }
    )

  } catch (error) {
    console.error('Contact form error:', error)
    
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { 
        status: 500, 
        headers: { ...corsHeaders, ...securityHeaders, 'Content-Type': 'application/json' }
      }
    )
  }
})
