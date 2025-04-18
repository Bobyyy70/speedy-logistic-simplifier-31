export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      carrier_base_rates: {
        Row: {
          base_rate_ht: number
          carrier_name: string
          client_volume_tier: string
          created_at: string
          currency: string
          destination_zone: string
          id: string
          service_id: string
          updated_at: string
          valid_from: string | null
          valid_to: string | null
          weight_kg_max: number
        }
        Insert: {
          base_rate_ht: number
          carrier_name: string
          client_volume_tier: string
          created_at?: string
          currency?: string
          destination_zone: string
          id?: string
          service_id: string
          updated_at?: string
          valid_from?: string | null
          valid_to?: string | null
          weight_kg_max: number
        }
        Update: {
          base_rate_ht?: number
          carrier_name?: string
          client_volume_tier?: string
          created_at?: string
          currency?: string
          destination_zone?: string
          id?: string
          service_id?: string
          updated_at?: string
          valid_from?: string | null
          valid_to?: string | null
          weight_kg_max?: number
        }
        Relationships: [
          {
            foreignKeyName: "carrier_base_rates_service_id_fkey"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "transport_services"
            referencedColumns: ["id"]
          },
        ]
      }
      clients: {
        Row: {
          billing_address_line1: string | null
          billing_address_line2: string | null
          billing_city: string | null
          billing_country: string | null
          billing_postal_code: string | null
          company_name: string
          contract_type: string | null
          created_at: string
          id: string
          is_active: boolean
          monthly_volume_tier: string | null
          notes: string | null
          primary_contact_email: string
          primary_contact_name: string | null
          primary_contact_phone: string | null
          siret: string | null
          vat_number: string | null
          website_url: string | null
        }
        Insert: {
          billing_address_line1?: string | null
          billing_address_line2?: string | null
          billing_city?: string | null
          billing_country?: string | null
          billing_postal_code?: string | null
          company_name: string
          contract_type?: string | null
          created_at?: string
          id?: string
          is_active?: boolean
          monthly_volume_tier?: string | null
          notes?: string | null
          primary_contact_email: string
          primary_contact_name?: string | null
          primary_contact_phone?: string | null
          siret?: string | null
          vat_number?: string | null
          website_url?: string | null
        }
        Update: {
          billing_address_line1?: string | null
          billing_address_line2?: string | null
          billing_city?: string | null
          billing_country?: string | null
          billing_postal_code?: string | null
          company_name?: string
          contract_type?: string | null
          created_at?: string
          id?: string
          is_active?: boolean
          monthly_volume_tier?: string | null
          notes?: string | null
          primary_contact_email?: string
          primary_contact_name?: string | null
          primary_contact_phone?: string | null
          siret?: string | null
          vat_number?: string | null
          website_url?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          client_id: string | null
          full_name: string | null
          id: string
          phone_number: string | null
          role: string
          updated_at: string | null
        }
        Insert: {
          avatar_url?: string | null
          client_id?: string | null
          full_name?: string | null
          id: string
          phone_number?: string | null
          role?: string
          updated_at?: string | null
        }
        Update: {
          avatar_url?: string | null
          client_id?: string | null
          full_name?: string | null
          id?: string
          phone_number?: string | null
          role?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "clients"
            referencedColumns: ["id"]
          },
        ]
      }
      surcharge_rules: {
        Row: {
          applies_to_base: boolean
          calculation_order: number
          carrier_name: string | null
          condition_logic: Json | null
          created_at: string
          currency: string | null
          id: string
          included_in_fuel_base: boolean
          is_active: boolean
          notes: string | null
          rule_name: string
          service_id: string | null
          surcharge_type: string
          surcharge_value: number | null
          updated_at: string
        }
        Insert: {
          applies_to_base?: boolean
          calculation_order?: number
          carrier_name?: string | null
          condition_logic?: Json | null
          created_at?: string
          currency?: string | null
          id?: string
          included_in_fuel_base?: boolean
          is_active?: boolean
          notes?: string | null
          rule_name: string
          service_id?: string | null
          surcharge_type: string
          surcharge_value?: number | null
          updated_at?: string
        }
        Update: {
          applies_to_base?: boolean
          calculation_order?: number
          carrier_name?: string | null
          condition_logic?: Json | null
          created_at?: string
          currency?: string | null
          id?: string
          included_in_fuel_base?: boolean
          is_active?: boolean
          notes?: string | null
          rule_name?: string
          service_id?: string | null
          surcharge_type?: string
          surcharge_value?: number | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "surcharge_rules_service_id_fkey"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "transport_services"
            referencedColumns: ["id"]
          },
        ]
      }
      transport_services: {
        Row: {
          carrier_name: string
          id: string
          is_active: boolean
          service_code: string
          service_name: string
        }
        Insert: {
          carrier_name: string
          id?: string
          is_active?: boolean
          service_code: string
          service_name: string
        }
        Update: {
          carrier_name?: string
          id?: string
          is_active?: boolean
          service_code?: string
          service_name?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_user_client_id: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
