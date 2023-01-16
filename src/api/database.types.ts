export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      courses: {
        Row: {
          city: string
          id: number
          name: string
          state: string
          street: string
          zip: string
        }
        Insert: {
          city: string
          id?: number
          name: string
          state: string
          street: string
          zip: string
        }
        Update: {
          city?: string
          id?: number
          name?: string
          state?: string
          street?: string
          zip?: string
        }
      }
      holes: {
        Row: {
          handicap: number
          id: number
          number: number
          par: number
          teeId: number
          yardage: number
        }
        Insert: {
          handicap: number
          id?: number
          number: number
          par: number
          teeId: number
          yardage: number
        }
        Update: {
          handicap?: number
          id?: number
          number?: number
          par?: number
          teeId?: number
          yardage?: number
        }
      }
      profiles: {
        Row: {
          avatar_url: string | null
          fts: unknown | null
          full_name: string | null
          handicap_index: number | null
          id: string
          preferred_course_id: number | null
          preferred_tee_id: number | null
          updated_at: string | null
          username: string | null
          username_lower: string | null
          website: string | null
        }
        Insert: {
          avatar_url?: string | null
          fts?: unknown | null
          full_name?: string | null
          handicap_index?: number | null
          id: string
          preferred_course_id?: number | null
          preferred_tee_id?: number | null
          updated_at?: string | null
          username?: string | null
          username_lower?: string | null
          website?: string | null
        }
        Update: {
          avatar_url?: string | null
          fts?: unknown | null
          full_name?: string | null
          handicap_index?: number | null
          id?: string
          preferred_course_id?: number | null
          preferred_tee_id?: number | null
          updated_at?: string | null
          username?: string | null
          username_lower?: string | null
          website?: string | null
        }
      }
      tees: {
        Row: {
          color: string | null
          courseId: number
          id: number
          name: string
          rating: number
          slope: number
        }
        Insert: {
          color?: string | null
          courseId: number
          id?: number
          name: string
          rating: number
          slope: number
        }
        Update: {
          color?: string | null
          courseId?: number
          id?: number
          name?: string
          rating?: number
          slope?: number
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}

