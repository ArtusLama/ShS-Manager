import { getAllForCourseId, getById } from "~/services/courseScheduleService"

export function useCourseSchedules() {
    return {

        /**
         * Fetches all course schedules for a course.
         *
         * @param courseId The ID (UUID) of the course to fetch course schedules for.
         */
        getAllForCourseId: (courseId: string) => useAsyncData<CourseSchedule[]>(
            `course_schedules_for_course_${courseId}`,
            () => getAllForCourseId(courseId),
            { lazy: true, default: () => [] }
        ),

        /**
         * Fetches a course schedule by its ID.
         *
         * @param id The ID (int8) of the course schedule to fetch.
         */
        getById: (id: number) => useAsyncData<CourseSchedule | null>(
            `course_schedule_by_id_${id}`,
            () => getById(id),
            { lazy: true, default: () => null }
        )

    }
}
