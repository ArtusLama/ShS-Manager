<script lang="ts" setup>
const { data: courses } = await useCourses().getAllByUser("e8d4e913-6846-47d4-9765-c7a1fc5fc9a1")
</script>

<template>
    <div class="flex flex-col gap-4">
        <CourseCreateButton />
        <div class="grid grid-cols-1 gap-4">
            <NuxtLinkLocale v-for="course of courses" :key="course.id" :to="`/course/${course.id}`" class="no-underline">
                <CourseCardCourse :course="course" />
            </NuxtLinkLocale>
        </div>
    </div>
</template>
