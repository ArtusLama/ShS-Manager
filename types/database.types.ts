export type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json | undefined }
    | Json[]

export interface Database {
    public: {
        Tables: {
            course: {
                Row: {
                    created_at: string
                    description: string
                    id: string
                    name: string
                    paused: boolean
                    subject: string | null
                    teacher: string
                }
                Insert: {
                    created_at?: string
                    description?: string
                    id?: string
                    name?: string
                    paused?: boolean
                    subject?: string | null
                    teacher?: string
                }
                Update: {
                    created_at?: string
                    description?: string
                    id?: string
                    name?: string
                    paused?: boolean
                    subject?: string | null
                    teacher?: string
                }
                Relationships: [
                    {
                        foreignKeyName: "course_subject_fkey"
                        columns: ["subject"]
                        isOneToOne: false
                        referencedRelation: "subject"
                        referencedColumns: ["id"]
                    },
                ]
            }
            course_schedule: {
                Row: {
                    course: string
                    day: number
                    end: string
                    id: number
                    start: string
                }
                Insert: {
                    course: string
                    day: number
                    end: string
                    id?: number
                    start: string
                }
                Update: {
                    course?: string
                    day?: number
                    end?: string
                    id?: number
                    start?: string
                }
                Relationships: [
                    {
                        foreignKeyName: "course_schedule_course_fkey"
                        columns: ["course"]
                        isOneToOne: false
                        referencedRelation: "course"
                        referencedColumns: ["id"]
                    },
                ]
            }
            course_session: {
                Row: {
                    canceled: boolean
                    course: string | null
                    created_at: string
                    end_date: string
                    id: string
                    start_date: string
                }
                Insert: {
                    canceled?: boolean
                    course?: string | null
                    created_at?: string
                    end_date: string
                    id?: string
                    start_date: string
                }
                Update: {
                    canceled?: boolean
                    course?: string | null
                    created_at?: string
                    end_date?: string
                    id?: string
                    start_date?: string
                }
                Relationships: [
                    {
                        foreignKeyName: "course_session_course_fkey"
                        columns: ["course"]
                        isOneToOne: false
                        referencedRelation: "course"
                        referencedColumns: ["id"]
                    },
                ]
            }
            student: {
                Row: {
                    course: string
                    created_at: string
                    id: string
                    name: string
                    notes: string
                }
                Insert: {
                    course: string
                    created_at?: string
                    id?: string
                    name?: string
                    notes?: string
                }
                Update: {
                    course?: string
                    created_at?: string
                    id?: string
                    name?: string
                    notes?: string
                }
                Relationships: [
                    {
                        foreignKeyName: "student_course_fkey"
                        columns: ["course"]
                        isOneToOne: false
                        referencedRelation: "course"
                        referencedColumns: ["id"]
                    },
                ]
            }
            subject: {
                Row: {
                    id: string
                    name: string
                }
                Insert: {
                    id?: string
                    name?: string
                }
                Update: {
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
            create_course_sessions: {
                Args: Record<PropertyKey, never>
                Returns: undefined
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

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
    PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
    TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
        ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
            Database[PublicTableNameOrOptions["schema"]]["Views"])
        : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
    ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
            Row: infer R
        }
            ? R
            : never
    : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
        ? (PublicSchema["Tables"] &
            PublicSchema["Views"])[PublicTableNameOrOptions] extends {
                Row: infer R
            }
                ? R
                : never
        : never

export type TablesInsert<
    PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
    TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
        ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
        : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
    ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
        Insert: infer I
    }
        ? I
        : never
    : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
        ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
            Insert: infer I
        }
            ? I
            : never
        : never

export type TablesUpdate<
    PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
    TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
        ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
        : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
    ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
        Update: infer U
    }
        ? U
        : never
    : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
        ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
            Update: infer U
        }
            ? U
            : never
        : never

export type Enums<
    PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
    EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
        ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
        : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
    ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
    : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
        ? PublicSchema["Enums"][PublicEnumNameOrOptions]
        : never

export type CompositeTypes<
    PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
    CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
        schema: keyof Database
    }
        ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
        : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
    ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
    : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
        ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
        : never
