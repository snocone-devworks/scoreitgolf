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
      Courses: {
        Row: {
          city: string | null
          id: number
          name: string | null
          phone: string | null
          state: string | null
          street: string | null
          zip: string | null
        }
        Insert: {
          city?: string | null
          id?: number
          name?: string | null
          phone?: string | null
          state?: string | null
          street?: string | null
          zip?: string | null
        }
        Update: {
          city?: string | null
          id?: number
          name?: string | null
          phone?: string | null
          state?: string | null
          street?: string | null
          zip?: string | null
        }
      }
      Holes: {
        Row: {
          handicap: number | null
          id: number
          number: number | null
          par: number | null
          teeId: number | null
          yardage: number | null
        }
        Insert: {
          handicap?: number | null
          id?: number
          number?: number | null
          par?: number | null
          teeId?: number | null
          yardage?: number | null
        }
        Update: {
          handicap?: number | null
          id?: number
          number?: number | null
          par?: number | null
          teeId?: number | null
          yardage?: number | null
        }
      }
      Leagues: {
        Row: {
          courseId: number | null
          id: number
          iterationGapDays: number | null
          iterations: number | null
          name: string | null
          startDate: string | null
        }
        Insert: {
          courseId?: number | null
          id?: number
          iterationGapDays?: number | null
          iterations?: number | null
          name?: string | null
          startDate?: string | null
        }
        Update: {
          courseId?: number | null
          id?: number
          iterationGapDays?: number | null
          iterations?: number | null
          name?: string | null
          startDate?: string | null
        }
      }
      Matches: {
        Row: {
          complete: boolean | null
          id: number
          iteration: number | null
          leagueId: number | null
          linkCode: string | null
        }
        Insert: {
          complete?: boolean | null
          id?: number
          iteration?: number | null
          leagueId?: number | null
          linkCode?: string | null
        }
        Update: {
          complete?: boolean | null
          id?: number
          iteration?: number | null
          leagueId?: number | null
          linkCode?: string | null
        }
      }
      PlayerMatches: {
        Row: {
          id: number
          matchId: number | null
          playerId: number | null
          teamNumber: number | null
        }
        Insert: {
          id?: number
          matchId?: number | null
          playerId?: number | null
          teamNumber?: number | null
        }
        Update: {
          id?: number
          matchId?: number | null
          playerId?: number | null
          teamNumber?: number | null
        }
      }
      Players: {
        Row: {
          handicap: number | null
          id: number
          name: string | null
          teeId: number | null
          userId: string | null
          phoneNumber: string | null
        }
        Insert: {
          handicap?: number | null
          id?: number
          name?: string | null
          teeId?: number | null
          userId?: string | null
          phoneNumber?: string | null
        }
        Update: {
          handicap?: number | null
          id?: number
          name?: string | null
          teeId?: number | null
          userId?: string | null
          phoneNumber?: string | null
        }
      }
      Tees: {
        Row: {
          color: string | null
          courseId: number | null
          id: number
          name: string | null
          rating: number | null
          slope: number | null
        }
        Insert: {
          color?: string | null
          courseId?: number | null
          id?: number
          name?: string | null
          rating?: number | null
          slope?: number | null
        }
        Update: {
          color?: string | null
          courseId?: number | null
          id?: number
          name?: string | null
          rating?: number | null
          slope?: number | null
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

