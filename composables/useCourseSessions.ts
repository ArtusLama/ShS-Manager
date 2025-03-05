import { getAllSessionsByCourse, getAllSessionsByUser, getSessionById } from "~/services/courseSessionService"

export function useCourseSessions() {
    return {

        /**
         * Fetches all course sessions for a course.
         *
         * @param courseId The ID (UUID) of the course to fetch course sessions for.
         */
        getAllSessionsByCourse: (courseId: string) => useAsyncData<CourseSession[]>(
            `course_sessions_for_course_${courseId}`,
            () => getAllSessionsByCourse(courseId),
            { lazy: true, default: () => [] }
        ),

        getAllSessionsByUser: (userId: string, filter: "past" | "future" | "all") => useAsyncData<CourseSession[]>(
            `course_sessions_by_user_${userId}`,
            () => getAllSessionsByUser(userId, filter),
            { lazy: true, default: () => [] }
        ),

        /**
         * Fetches a course session by its ID.
         *
         * @param id The ID (UUID) of the course session to fetch.
         */
        getSessionById: (id: string) => useAsyncData<CourseSession | null>(
            `course_session_by_id_${id}`,
            () => getSessionById(id),
            { lazy: true, default: () => null }
        )

    }
}
