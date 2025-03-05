import { getAllCoursesByUser, getCourseById } from "~/services/courseService"

export function useCourses() {
    return {

        /**
         * Fetches all courses from a user/teacher.
         *
         * @param userId The ID (UUID) of the user/teacher to fetch courses for.
         */
        getAllByUser: (userId: string) => useAsyncData<Course[]>(
            `courses_by_user_${userId}`,
            () => getAllCoursesByUser(userId),
            { lazy: true, default: () => [] }
        ),

        /**
         * Fetches a course by its ID.
         *
         * @param id The ID (UUID) of the course to fetch.
         */
        getById: (id: string) => useAsyncData<Course | null>(
            `course_by_id_${id}`,
            () => getCourseById(id),
            { lazy: true, default: () => null }
        )

    }
}
