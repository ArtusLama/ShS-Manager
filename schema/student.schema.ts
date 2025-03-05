import { z } from "zod"

export const studentSchema = z.object({

    /**
     * The unique identifier of the student as UUID.
     */
    id: z.string().uuid(),

    /**
     * The name of the student.
     */
    name: z.string(),

    /**
     *  Notes of the student written by the teacher.
     */
    notes: z.string(),

    /**
     * The course the student is enrolled in (UUID).
     */
    course: z.string().uuid(),

})

/**
 * Represents a student in a course.
 */
export type Student = z.input<typeof studentSchema>
