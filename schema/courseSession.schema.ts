import { z } from "zod"

export const courseSessionSchema = z.object({

    /**
     * The unique identifier of the course session as uuid.
     * This is the primary key.
     */
    id: z.string().uuid(),

    /**
     * The unique identifier of the course the session is for as uuid.
     */
    course: z.string().uuid(),

    /**
     * Whether the session is canceled or not.
     */
    canceled: z.boolean(),

    /**
     * The start date and time of the session.
     */
    start_date: z.string().datetime({ offset: true }),

    /**
     * The end date and time of the session. Usually the same day as start_date but with a different time.
     */
    end_date: z.string().datetime({ offset: true }),

})

/**
 * Represents a student in a course.
 */
export type CourseSession = z.input<typeof courseSessionSchema>
