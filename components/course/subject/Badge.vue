<script lang="ts" setup>
defineProps<{
    subject: string
}>()
</script>

<template>
    <span class="rounded-full bg-primary text-white text-xs px-2 py-1">
        {{ subject }}
    </span>
</template>
