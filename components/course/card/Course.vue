<script lang="ts" setup>
defineProps<{
    course: Course
}>()
</script>

<template>
    <div>
        <Card :class="{ 'bg-muted': course.paused }">
            <CardHeader>
                <CardTitle class="w-full flex justify-between items-center">
                    <div class="flex gap-2">
                        <CourseSubjectBadge :subject-id="course.subject" />
                        {{ course.name }}
                    </div>
                    <p v-if="course.paused" class="text-lg">
                        Paused
                    </p>
                </CardTitle>
                <CardDescription>
                    {{ course.description }}
                </CardDescription>
            </CardHeader>
            <CardContent>
                click to manage
            </CardContent>
        </Card>
    </div>
</template>
