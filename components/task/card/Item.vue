<script lang="ts" setup>
import type { t } from "../DashboardList.vue"

defineProps<{
    task: t
}>()
</script>

<template>
    <Card>
        <CardContent class="px-5 py-3">
            <small class="text-muted-foreground flex items-center">
                {{ task.type }}
            </small>
            <p class="text-lg font-semibold">
                {{ task.title }}
            </p>
            <p class="text-muted-foreground leading-5">
                {{ task.description }}
            </p>
        </CardContent>
    </Card>
</template>
