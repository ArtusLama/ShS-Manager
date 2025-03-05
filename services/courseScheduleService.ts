import { z } from "zod"

export async function getAllForCourseId(courseId: string): Promise<CourseSchedule[]> {
    const supabaseClient = useSupabaseClient()
    const { data, error } = await supabaseClient.from("course_schedule").select("*").eq("course", courseId).order("day")

    if (error) {
        throw error
    }

    return data ? z.array(courseScheduleSchema).parse(data) : []
}

export async function getById(id: number): Promise<CourseSchedule | null> {
    const supabaseClient = useSupabaseClient()
    const { data, error } = await supabaseClient.from("course_schedule").select("*").eq("id", id).single()

    if (error) {
        throw error
    }

    return data ? courseScheduleSchema.parse(data) : null
}
