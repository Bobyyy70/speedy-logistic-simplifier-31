
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
  preferredContact: 'email' | 'phone'
  bestTimeToContact?: string
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    if (req.method !== 'POST') {
      return new Response(
        JSON.stringify({ error: 'Method not allowed' }),
        { 
          status: 405, 
          headers: { ...corsHeaders, ...securityHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    const formData: SavFormData = await req.json()
    
    // Input validation
    if (!formData.fullName || !formData.email || !formData.orderNumber || !formData.description) {
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

    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    // Log SAV submission securely
    const { error: logError } = await supabase
      .from('sav_submissions')
      .insert({
        order_number: formData.orderNumber,
        email: formData.email,
        issue_category: formData.issueCategory,
        submitted_at: new Date().toISOString(),
        ip_address: req.headers.get('x-forwarded-for') || 'unknown',
        user_agent: req.headers.get('user-agent')
      })

    if (logError) {
      console.error('Failed to log SAV submission:', logError)
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'SAV request submitted successfully' 
      }),
      { 
        status: 200, 
        headers: { ...corsHeaders, ...securityHeaders, 'Content-Type': 'application/json' }
      }
    )

  } catch (error) {
    console.error('SAV form error:', error)
    
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { 
        status: 500, 
        headers: { ...corsHeaders, ...securityHeaders, 'Content-Type': 'application/json' }
      }
    )
  }
})
