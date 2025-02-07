<script lang="ts" setup>
defineProps<{
    to: string
}>()
</script>

<template>
    <NuxtLinkLocale active-class="nav-link-active" :to="to" class="flex flex-col items-center text-muted-foreground !no-underline transition-all duration-200 ease-in-out">
        <div class="p-2 rounded-full">
            <slot />
        </div>
    </NuxtLinkLocale>
</template>
