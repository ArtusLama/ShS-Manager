import { z } from "zod"

export async function getAllCoursesByUser(userId: string): Promise<Course[]> {
    const supabaseClient = useSupabaseClient()
    const { data, error } = await supabaseClient
        .from("course")
        .select("*")
        .eq("teacher", userId)
        .order("paused") // Paused courses should be at the bottom
        .order("name") // Then sort by name

    if (error) {
        throw error
    }

    return data ? z.array(courseSchema).parse(data) : []
}

export async function getCourseById(id: string): Promise<Course | null> {
    const supabaseClient = useSupabaseClient()
    const { data, error } = await supabaseClient
        .from("course")
        .select("*")
        .eq("id", id)
        .single()

    if (error) {
        throw error
    }

    return data ? courseSchema.parse(data) : null
}
