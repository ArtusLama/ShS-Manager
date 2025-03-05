import { z } from "zod"

export async function getAllSubjects(): Promise<Subject[]> {
    const supabaseClient = useSupabaseClient()
    const { data, error } = await supabaseClient.from("subject").select("*").order("name")

    if (error) {
        throw error
    }

    return data ? z.array(subjectSchema).parse(data) : []
}

export async function getSubjectById(id: string): Promise<Subject | null> {
    const supabaseClient = useSupabaseClient()
    const { data, error } = await supabaseClient.from("subject").select("*").eq("id", id).single()

    if (error) {
        throw error
    }

    return data ? subjectSchema.parse(data) : null
}
