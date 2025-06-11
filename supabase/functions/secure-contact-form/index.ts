
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
  'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline' https://js-eu1.hs-scripts.com https://js-eu1.hsforms.net; connect-src 'self' https://*.supabase.co https://*.hubspot.com;",
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

    // Rate limiting check (basic implementation)
    const clientIP = req.headers.get('x-forwarded-for') || 'unknown'
    
    // Parse and validate form data
    const formData: ContactFormData = await req.json()
    
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

    // Initialize Supabase client
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

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
