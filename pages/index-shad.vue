<script lang="ts" setup>
const dayjs = useDayjs()
const { data: nextCourseSessions, refresh: reloadData } = await useCourseSessions().getAllSessionsByUser("e8d4e913-6846-47d4-9765-c7a1fc5fc9a1", "future")
const sortedSessions = computed(() => [...nextCourseSessions.value].sort((a, b) => dayjs(a.start_date).diff(dayjs(b.start_date))))
const nextCourseSession = computed(() => sortedSessions.value[0])

// TODO: in supabase what if schedule is changed? we need to update the course_session. Maybe add ref to schedule in course_session and trigger update when schedule is changed in supabase
</script>

<template>
    <div>
        <TextHeader title="Dashboard" subtitle="Welcome back, Arthur!" />
        <main class="grid gap-8">
            <section>
                <CourseCardNextOrCurrentSession v-if="nextCourseSession !== undefined" :course-session="nextCourseSession" @session-over="reloadData" />
                <CourseCardNoNextSession v-else />
            </section>
            <section>
                <h3>Finance:</h3>
                <div class="grid grid-cols-2 gap-4 mt-2">
                    <FinanceCardEarned />
                    <FinanceCardWaits />
                </div>
            </section>
            <section>
                <h3>Tasks:</h3>
                <TaskDashboardList class="mt-2" />
            </section>
        </main>
    </div>
</template>
