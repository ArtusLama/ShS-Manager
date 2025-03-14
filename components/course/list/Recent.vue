<script lang="ts" setup>
// TODO: weird sort behavior: on first load, the order is swapped (oldest first) which is wrong! After Tab switch, it is the correct order (most recent sessions first)
const dayjs = useDayjs()
const { data: courseSessions } = await useCourseSessions().getAllSessionsByUser("e8d4e913-6846-47d4-9765-c7a1fc5fc9a1", "past")
const sortedSessions = computed(() => [...courseSessions.value].sort((a, b) => -dayjs(a.start_date).diff(dayjs(b.start_date))))
</script>

<template>
    <!-- TODO: Add labeld for last week, last month, ... and make it collapsable  -->
    <div class="grid grid-cols-1 gap-4">
        <CourseCardSession v-for="session of sortedSessions" :key="session.id" :course-session="session" />
    </div>
</template>
