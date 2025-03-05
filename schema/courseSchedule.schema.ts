import { z } from "zod"

export const courseScheduleSchema = z.object({

    /**
     * The unique identifier of the course schedule as int8.
     * This is the primary key.
     */
    id: z.number(),

    /**
     * The day of the week the course is scheduled.
     * 0 = Monday
     * 6 = Sunday
     */
    day: z.number().min(0).max(6),

    /**
     * The time the course starts.
     * Format: HH:MM:SS
     * Example: 14:00:00
     */
    start: z.string(),

    /**
     * The time the course ends.
     * Format: HH:MM:SS
     * Example: 14:45:00
     */
    end: z.string(),

    /**
     * The course the schedule is for (UUID).
     */
    course: z.string().uuid(),

})

/**
 * Represents a student in a course.
 */
export type CourseSchedule = z.input<typeof courseScheduleSchema>
