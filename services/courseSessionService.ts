import { z } from "zod"

export async function getAllSessionsByCourse(courseId: string): Promise<CourseSession[]> {
    const supabaseClient = useSupabaseClient()
    const { data, error } = await supabaseClient
        .from("course_session")
        .select("*")
        .eq("course", courseId)
        .order("start_date")

    if (error) {
        throw error
    }

    return data ? z.array(courseSessionSchema).parse(data) : []
}

export async function getAllSessionsByUser(userId: string, filter: "past" | "future" | "all"): Promise<CourseSession[]> {
    const supabaseClient = useSupabaseClient()

    let query = supabaseClient
        .from("course_session")
        .select(`
            *,
            teacher:course!course (
                teacher
            )
        `)
        .eq("course.teacher", userId)
        .order("start_date", { ascending: false })

    switch (filter) {
        case "past":
            query = query.lte("start_date", new Date().toISOString())
            break
        case "future":
            query = query.gte("end_date", new Date().toISOString())
            break
        case "all":
            break
        default:
            break
    }

    const { data, error } = await query

    if (error) {
        throw error
    }

    return data ? z.array(courseSessionSchema).parse(data) : []
}

export async function getSessionById(id: string): Promise<CourseSession | null> {
    const supabaseClient = useSupabaseClient()
    const { data, error } = await supabaseClient
        .from("course_session")
        .select("*")
        .eq("id", id)
        .single()

    if (error) {
        throw error
    }

    return data ? courseSessionSchema.parse(data) : null
}
