import { getStudentById, getStudentsByCourseId } from "~/services/studentService"

export function useStudents() {
    return {

        /**
         * Fetches a student by its ID.
         *
         * @param id The ID (UUID) of the student to fetch.
         */
        getById: (id: string) => useAsyncData<Student | null>(
            `student_by_id_${id}`,
            () => getStudentById(id),
            { lazy: true, default: () => null },
        ),

        /**
         * Fetches all students in a course.
         *
         * @param courseId The ID (UUID) of the course to fetch students for.
         */
        getByCourseId: (courseId: string) => useAsyncData<Student[]>(
            `students_by_course_id_${courseId}`,
            () => getStudentsByCourseId(courseId),
            { lazy: true, default: () => [] },
        ),

    }
}
