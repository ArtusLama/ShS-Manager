<script lang="ts" setup>
import { LucideCalendar, LucideClock } from "lucide-vue-next"

const props = defineProps<{
    courseSession: CourseSession
}>()

const dayjs = useDayjs()

const startTime = computed(() => dayjs(props.courseSession.start_date))
const endTime = computed(() => dayjs(props.courseSession.end_date))

const courseTimeString = computed(() => {
    const start = startTime.value.format("HH:mm")
    const end = endTime.value.format("HH:mm")
    return `${start} - ${end}`
})

const dateString = computed(() => {
    return startTime.value.format("LL")
})

const { data: course, status: courseStatus } = await useCourses().getById(props.courseSession.course)
</script>

<template>
    <Card>
        <CardHeader v-if="courseStatus === 'pending'">
            <Skeleton class="h-7 w-64" />
            <Skeleton class="h-4 w-44" />
        </CardHeader>
        <CardHeader v-if="courseStatus === 'error'">
            <CardTitle>
                Unknown Course
            </CardTitle>
            <CardDescription>
                Unknown Course
            </CardDescription>
        </CardHeader>
        <CardHeader v-if="courseStatus === 'success' && course">
            <CardTitle>
                <CourseSubjectBadge :subject-id="course.subject" />
                {{ course.name }}
            </CardTitle>
            <CardDescription>
                {{ course.description }}
            </CardDescription>
        </CardHeader>
        <CardContent>
            <div class="flex gap-6 items-center">
                <div class="flex items-center gap-2">
                    <LucideCalendar :size="18" />
                    <p class="leading-4">
                        {{ dateString }}
                    </p>
                </div>
                <div class="flex items-center gap-2">
                    <LucideClock :size="18" />
                    <p class="leading-4">
                        {{ courseTimeString }}
                    </p>
                </div>
            </div>
        </CardContent>
    </Card>
</template>
