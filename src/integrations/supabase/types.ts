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
      api_credentials: {
        Row: {
          credentials: Json | null
          id: string
          integration_id: string
          last_validated: string | null
        }
        Insert: {
          credentials?: Json | null
          id?: string
          integration_id: string
          last_validated?: string | null
        }
        Update: {
          credentials?: Json | null
          id?: string
          integration_id?: string
          last_validated?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "api_credentials_integration_id_fkey"
            columns: ["integration_id"]
            isOneToOne: false
            referencedRelation: "integrations"
            referencedColumns: ["id"]
          },
        ]
      }
      carrier_base_rates: {
        Row: {
          base_rate_ht: number
          carrier_name: string
          client_volume_tier: string
          created_at: string | null
          currency: string
          destination_zone: string
          id: string
          service_code: string
          weight_kg_max: number
        }
        Insert: {
          base_rate_ht: number
          carrier_name: string
          client_volume_tier: string
          created_at?: string | null
          currency?: string
          destination_zone: string
          id?: string
          service_code: string
          weight_kg_max: number
        }
        Update: {
          base_rate_ht?: number
          carrier_name?: string
          client_volume_tier?: string
          created_at?: string | null
          currency?: string
          destination_zone?: string
          id?: string
          service_code?: string
          weight_kg_max?: number
        }
        Relationships: [
          {
            foreignKeyName: "carrier_base_rates_service_code_fkey"
            columns: ["service_code"]
            isOneToOne: false
            referencedRelation: "transport_services"
            referencedColumns: ["service_code"]
          },
        ]
      }
      carriers: {
        Row: {
          api_identifier: string | null
          id: string
          is_active: boolean | null
          name: string
        }
        Insert: {
          api_identifier?: string | null
          id?: string
          is_active?: boolean | null
          name: string
        }
        Update: {
          api_identifier?: string | null
          id?: string
          is_active?: boolean | null
          name?: string
        }
        Relationships: []
      }
      customers: {
        Row: {
          address: Json | null
          created_at: string | null
          email: string | null
          id: string
          name: string | null
          phone: string | null
        }
        Insert: {
          address?: Json | null
          created_at?: string | null
          email?: string | null
          id?: string
          name?: string | null
          phone?: string | null
        }
        Update: {
          address?: Json | null
          created_at?: string | null
          email?: string | null
          id?: string
          name?: string | null
          phone?: string | null
        }
        Relationships: []
      }
      integrations: {
        Row: {
          created_at: string | null
          id: string
          is_active: boolean | null
          platform_name: string
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          platform_name: string
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          platform_name?: string
          user_id?: string | null
        }
        Relationships: []
      }
      order_items: {
        Row: {
          id: string
          order_id: string
          product_id: string
          quantity: number
          unit_price: number
        }
        Insert: {
          id?: string
          order_id: string
          product_id: string
          quantity: number
          unit_price: number
        }
        Update: {
          id?: string
          order_id?: string
          product_id?: string
          quantity?: number
          unit_price?: number
        }
        Relationships: [
          {
            foreignKeyName: "order_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "order_items_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      orders: {
        Row: {
          billing_address: Json | null
          created_at: string | null
          customer_id: string | null
          id: string
          order_date: string | null
          order_ref: string
          shipping_address: Json | null
          source: string | null
          status: string | null
          total_amount: number | null
          user_id: string | null
        }
        Insert: {
          billing_address?: Json | null
          created_at?: string | null
          customer_id?: string | null
          id?: string
          order_date?: string | null
          order_ref: string
          shipping_address?: Json | null
          source?: string | null
          status?: string | null
          total_amount?: number | null
          user_id?: string | null
        }
        Update: {
          billing_address?: Json | null
          created_at?: string | null
          customer_id?: string | null
          id?: string
          order_date?: string | null
          order_ref?: string
          shipping_address?: Json | null
          source?: string | null
          status?: string | null
          total_amount?: number | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "orders_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
        ]
      }
      permissions: {
        Row: {
          id: string
          permission_name: string
        }
        Insert: {
          id?: string
          permission_name: string
        }
        Update: {
          id?: string
          permission_name?: string
        }
        Relationships: []
      }
      products: {
        Row: {
          created_at: string | null
          description: string | null
          dimensions: Json | null
          id: string
          image_url: string | null
          name: string
          price: number
          sku: string
          weight: number | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          dimensions?: Json | null
          id?: string
          image_url?: string | null
          name: string
          price: number
          sku: string
          weight?: number | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          dimensions?: Json | null
          id?: string
          image_url?: string | null
          name?: string
          price?: number
          sku?: string
          weight?: number | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          client_id: string | null
          created_at: string | null
          id: string
          user_id: string
        }
        Insert: {
          client_id?: string | null
          created_at?: string | null
          id?: string
          user_id: string
        }
        Update: {
          client_id?: string | null
          created_at?: string | null
          id?: string
          user_id?: string
        }
        Relationships: []
      }
      shipments: {
        Row: {
          carrier_id: string | null
          created_at: string | null
          estimated_delivery_date: string | null
          id: string
          label_url: string | null
          order_id: string
          shipped_date: string | null
          shipping_cost: number | null
          status: string | null
          tracking_number: string | null
        }
        Insert: {
          carrier_id?: string | null
          created_at?: string | null
          estimated_delivery_date?: string | null
          id?: string
          label_url?: string | null
          order_id: string
          shipped_date?: string | null
          shipping_cost?: number | null
          status?: string | null
          tracking_number?: string | null
        }
        Update: {
          carrier_id?: string | null
          created_at?: string | null
          estimated_delivery_date?: string | null
          id?: string
          label_url?: string | null
          order_id?: string
          shipped_date?: string | null
          shipping_cost?: number | null
          status?: string | null
          tracking_number?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "shipments_carrier_id_fkey"
            columns: ["carrier_id"]
            isOneToOne: false
            referencedRelation: "carriers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "shipments_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
        ]
      }
      stock_levels: {
        Row: {
          id: string
          last_updated: string | null
          product_id: string
          quantity_allocated: number | null
          quantity_on_hand: number | null
          warehouse_id: string
        }
        Insert: {
          id?: string
          last_updated?: string | null
          product_id: string
          quantity_allocated?: number | null
          quantity_on_hand?: number | null
          warehouse_id: string
        }
        Update: {
          id?: string
          last_updated?: string | null
          product_id?: string
          quantity_allocated?: number | null
          quantity_on_hand?: number | null
          warehouse_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "stock_levels_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "stock_levels_warehouse_id_fkey"
            columns: ["warehouse_id"]
            isOneToOne: false
            referencedRelation: "warehouses"
            referencedColumns: ["id"]
          },
        ]
      }
      tracking_events: {
        Row: {
          event_timestamp: string
          id: string
          location: string | null
          shipment_id: string
          status_description: string
        }
        Insert: {
          event_timestamp: string
          id?: string
          location?: string | null
          shipment_id: string
          status_description: string
        }
        Update: {
          event_timestamp?: string
          id?: string
          location?: string | null
          shipment_id?: string
          status_description?: string
        }
        Relationships: [
          {
            foreignKeyName: "tracking_events_shipment_id_fkey"
            columns: ["shipment_id"]
            isOneToOne: false
            referencedRelation: "shipments"
            referencedColumns: ["id"]
          },
        ]
      }
      transport_services: {
        Row: {
          carrier_name: string
          created_at: string | null
          id: string
          is_active: boolean | null
          service_code: string
          service_name: string
        }
        Insert: {
          carrier_name: string
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          service_code: string
          service_name: string
        }
        Update: {
          carrier_name?: string
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          service_code?: string
          service_name?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          id: string
          role_name: string
        }
        Insert: {
          id?: string
          role_name: string
        }
        Update: {
          id?: string
          role_name?: string
        }
        Relationships: []
      }
      warehouses: {
        Row: {
          address: Json | null
          created_at: string | null
          id: string
          name: string
        }
        Insert: {
          address?: Json | null
          created_at?: string | null
          id?: string
          name: string
        }
        Update: {
          address?: Json | null
          created_at?: string | null
          id?: string
          name?: string
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
