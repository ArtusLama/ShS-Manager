<script lang="ts" setup>
import type { Dayjs } from "dayjs"
import { Calendar, Clock } from "lucide-vue-next"
import { ref } from "vue"

const dayjs = useDayjs()

interface c {
    subject: string
    name: string
    description: string
    startDate: Date
    endDate: Date
}

function getDates() {
    const now = new Date()
    const startOffset = 1000 * 60 * 60 * -0.01
    const duration = 1000 * 60 * 2
    const start = new Date(now.getTime() + startOffset)
    start.setSeconds(0, 0)
    const end = new Date(start.getTime() + duration)
    return {
        startDate: start,
        endDate: end
    }
}

const course: c = {
    subject: "Mathe",
    name: "Kurs Name",
    description: "Beschreibung des Kurses Beschreibung des Kurses Beschreibung des Kurses",
    startDate: getDates().startDate,
    endDate: getDates().endDate
}

const dateDisplay = ref("...")
const timeLeftPercentage: Ref<undefined | number> = ref()

const courseTime = computed(() => {
    const start = dayjs(course.startDate).format("HH:mm")
    const end = dayjs(course.endDate).format("HH:mm")
    return `${start} - ${end}`
})

function updateTimeLeft(start: Dayjs, end: Dayjs) {
    const now = dayjs()
    const left = end.diff(now, "seconds")
    const length = end.diff(start, "seconds")
    timeLeftPercentage.value = 100 - (left / length) * 100
}

function updateTime() {
    dateDisplay.value = getCourseStatusText(course.startDate, course.endDate)
}

function getCourseStatusText(startDate: Date, endDate: Date) {
    const now = dayjs()
    const start = dayjs(startDate)
    const end = dayjs(endDate)

    if (now.isBetween(start, end)) {
        updateTimeLeft(start, end)
        const left = end.diff(now, "minutes")
        return `${left} ${left === 1 ? "minute" : "minutes"} left`
    } else {
        timeLeftPercentage.value = undefined
        if (now.isAfter(end)) {
            return "-"
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

onMounted(() => {
    const syncTime = 15
    let interval: NodeJS.Timeout

    updateTime()
    setTimeout(() => {
        updateTime()
        interval = setInterval(updateTime, 1000 * syncTime)
    }, (syncTime - (new Date().getSeconds() % syncTime)) * 1000)

    onBeforeUnmount(() => clearInterval(interval))
})
</script>

<template>
    <div>
        <Card>
            <CardHeader>
                <CardTitle>
                    <CourseSubjectBadge :subject="course.subject" />
                    {{ course.name }}
                </CardTitle>
                <CardDescription>
                    {{ course.description }}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div class="flex gap-6 items-center">
                    <div class="flex items-center gap-2">
                        <Calendar :size="18" />
                        <p class="leading-4">
                            {{ dateDisplay }}
                        </p>
                    </div>
                    <div class="flex items-center gap-2">
                        <Clock :size="18" />
                        <p class="leading-4">
                            {{ courseTime }}
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
