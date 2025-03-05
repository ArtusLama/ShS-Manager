import { z } from "zod"

export const subjectSchema = z.object({

    /**
     * The unique identifier of the subject as UUID.
     */
    id: z.string().uuid(),

    /**
     * The name of the subject.
     */
    name: z.string(),

})

/**
 * A subject that can be teached.
 */
export type Subject = z.input<typeof subjectSchema>
