
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

interface SavFormData {
  fullName: string
  email: string
  orderNumber: string
  phone?: string
  purchaseDate: string
  productReference: string
  issueCategory: string
  description: string
  preferredContact: string
  bestTimeToContact?: string
}

// Input sanitization function
function sanitizeInput(input: string): string {
  return input
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<[^>]*>/g, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+\s*=/gi, '')
    .trim()
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

    // Parse and validate request body with size limit
    const contentLength = req.headers.get('content-length')
    if (contentLength && parseInt(contentLength) > 5000) { // 5KB limit for SAV form
      return new Response(
        JSON.stringify({ error: 'Request too large' }),
        { 
          status: 413, 
          headers: { ...corsHeaders, ...securityHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    const formData: SavFormData = await req.json()
    
    // Sanitize all inputs
    const sanitizedData = {
      ...formData,
      fullName: sanitizeInput(formData.fullName),
      email: sanitizeInput(formData.email),
      orderNumber: sanitizeInput(formData.orderNumber),
      phone: formData.phone ? sanitizeInput(formData.phone) : undefined,
      description: sanitizeInput(formData.description),
    }
    
    // Input validation
    if (!sanitizedData.fullName || !sanitizedData.email || !sanitizedData.orderNumber || !sanitizedData.description) {
      return new Response(
        JSON.stringify({ error: 'Required information missing' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, ...securityHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    // Enhanced email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(sanitizedData.email) || sanitizedData.email.length > 254) {
      return new Response(
        JSON.stringify({ error: 'Invalid email format' }),
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

    // Log the SAV form submission securely with sanitized data
    const { error: logError } = await supabase
      .from('sav_submissions')
      .insert({
        full_name: sanitizedData.fullName,
        email: sanitizedData.email,
        order_number: sanitizedData.orderNumber,
        issue_category: sanitizedData.issueCategory,
        submitted_at: new Date().toISOString(),
        ip_address: req.headers.get('x-forwarded-for') || 'unknown',
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
    console.error('SAV form error:', error)
    
    return new Response(
      JSON.stringify({ error: 'An error occurred while processing your request' }),
      { 
        status: 500, 
        headers: { ...corsHeaders, ...securityHeaders, 'Content-Type': 'application/json' }
      }
    )
  }
})
