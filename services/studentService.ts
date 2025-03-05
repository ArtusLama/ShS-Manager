import { z } from "zod"

export async function getStudentById(id: string): Promise<Student | null> {
    const supabaseClient = useSupabaseClient()
    const { data, error } = await supabaseClient.from("student").select("*").eq("id", id).single()

    if (error) {
        throw error
    }

    return data ? studentSchema.parse(data) : null
}

export async function getStudentsByCourseId(courseId: string): Promise<Student[]> {
    const supabaseClient = useSupabaseClient()
    const { data, error } = await supabaseClient.from("student").select("*").eq("course", courseId)

    if (error) {
        throw error
    }

    return data ? z.array(studentSchema).parse(data) : []
}
