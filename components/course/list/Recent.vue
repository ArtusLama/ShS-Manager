<script lang="ts" setup>
const { data: courseSessions } = await useCourseSessions().getAllSessionsByUser("e8d4e913-6846-47d4-9765-c7a1fc5fc9a1", "past")
</script>

<template>
    <div class="grid grid-cols-1 gap-4">
        <CourseCardSession v-for="session of courseSessions" :key="session.id" :course-session="session" />
    </div>
</template>
