<script lang="ts" setup>
defineProps<{
    title: string
    subtitle?: string
}>()
</script>

<template>
    <header class="pt-2 pb-4">
        <small v-if="subtitle" class="text-muted-foreground">
            {{ subtitle }}
        </small>
        <h1>
            {{ title }}
        </h1>
    </header>
</template>
