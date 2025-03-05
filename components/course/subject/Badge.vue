<script lang="ts" setup>
const props = defineProps<{
    subjectId: string
}>()

const { data: subject, status } = await useSubjects().getById(props.subjectId)
</script>

<template>
    <span class="rounded-full bg-primary text-white text-xs px-2 py-1 min-w-12 text-center">
        <span v-if="status === 'pending'">
            . . .
        </span>
        <span v-else-if="status === 'error'">
            Unknown
        </span>
        <span v-else-if="status === 'success' && subject">
            {{ subject.name }}
        </span>
    </span>
</template>
