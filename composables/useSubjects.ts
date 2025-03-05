import { getAllSubjects, getSubjectById } from "~/services/subjectService"

export function useSubjects() {
    return {

        /**
         * Fetches all subjects from the database.
         */
        getAll: () => useAsyncData<Subject[]>(
            "all_subjects",
            getAllSubjects,
            { lazy: true, default: () => [] },
        ),

        /**
         * Fetches a subject by its ID.
         *
         * @param id The ID (UUID) of the subject to fetch.
         */
        getById: (id: string) => useAsyncData<Subject | null>(
            `subject_by_id_${id}`,
            () => getSubjectById(id),
            { lazy: true, default: () => null },
        )

    }
}
