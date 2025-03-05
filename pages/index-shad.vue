<script lang="ts" setup>
const { data: nextCourseSessions } = await useCourseSessions().getAllSessionsByUser("e8d4e913-6846-47d4-9765-c7a1fc5fc9a1", "future")
const nextCourseSession = computed(() => nextCourseSessions.value[0])
</script>

<template>
    <div>
        <TextHeader title="Dashboard" subtitle="Welcome back, Arthur!" />
        <main class="grid gap-8">
            <section>
                <CourseCardNextOrCurrentSession :course-session="nextCourseSession" />
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
