import { z } from "zod"

export const courseSchema = z.object({

    /**
     * The unique identifier of the course.
     */
    id: z.string().uuid(),

    /**
     * Whether the course is currently paused. If true, no sessions will created by the cron job.
     */
    paused: z.boolean(),

    /**
     * The name of the course.
     */
    name: z.string(),

    /**
     * A short description of the course.
     */
    description: z.string(),

    /**
     * Reference to the subject of the course as UUID.
     */
    subject: z.string().uuid(),

})

/**
 * Represents a student in a course.
 */
export type Course = z.input<typeof courseSchema>
