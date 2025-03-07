<script lang="ts" setup>
import type { Dayjs } from "dayjs"
import { LucideCalendar, LucideClock } from "lucide-vue-next"

const props = defineProps<{
    courseSession: CourseSession
}>()

const emit = defineEmits<{
    sessionOver: []
}>()

const dayjs = useDayjs()

const dateDisplay = ref("...")
const timeLeftPercentage: Ref<undefined | number> = ref()

const startTime = computed(() => dayjs(props.courseSession.start_date))
const endTime = computed(() => dayjs(props.courseSession.end_date))

const courseTimeString = computed(() => {
    const start = startTime.value.format("HH:mm")
    const end = endTime.value.format("HH:mm")
    return `${start} - ${end}`
})

function updateTimeLeft(start: Dayjs, end: Dayjs) {
    const now = dayjs()
    const left = end.diff(now, "seconds")
    const length = end.diff(start, "seconds")
    timeLeftPercentage.value = 100 - (left / length) * 100
}

function updateTime() {
    dateDisplay.value = getCourseStatusText(startTime.value, endTime.value)
}

// TODO: this is sometimes executed to late or is behind since it displays "loading..." when the the other information is already displayed
function getCourseStatusText(start: Dayjs, end: Dayjs) {
    const now = dayjs()

    if (now.isBetween(start, end)) {
        updateTimeLeft(start, end)
        const left = end.diff(now, "minutes") + 1
        return `${left} ${left === 1 ? "minute" : "minutes"} left`
    } else {
        timeLeftPercentage.value = undefined
        if (now.isAfter(end)) {
            emit("sessionOver")
            return "loading..."
        } else if (now.isSame(start, "day")) {
            return `Starts in ${start.fromNow(true)}`
        } else if (start.isTomorrow()) {
            return "Tomorrow"
        } else if (now.add(6, "day").isAfter(start)) {
            return start.format("dddd")
        }
    }

    return start.format("LL")
}

updateTime()
onMounted(() => {
    // TODO: not completely accurate
    const syncTime = 10
    let interval: NodeJS.Timeout

    updateTime()
    setTimeout(() => {
        updateTime()
        interval = setInterval(updateTime, 1000 * syncTime)
    }, (syncTime - (new Date().getSeconds() % syncTime)) * 1000)

    onBeforeUnmount(() => clearInterval(interval))
})

const { data: course, status: courseStatus } = await useCourses().getById(props.courseSession.course)
</script>

<template>
    <div>
        <Card class="shadow-lg">
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
                <div class="flex flex-wrap gap-x-6 gap-y-2 items-center">
                    <div class="flex items-center gap-2">
                        <LucideCalendar :size="18" />
                        <p class="leading-4">
                            {{ dateDisplay }}
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
            <CardFooter class="p-0">
                <Progress v-if="timeLeftPercentage" v-model="timeLeftPercentage" class="w-full h-2" />
            </CardFooter>
        </Card>
    </div>
</template>
