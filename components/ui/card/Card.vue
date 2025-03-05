<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "@/lib/utils"

const props = defineProps<{
    class?: HTMLAttributes["class"]
}>()
</script>

<template>
    <div
        :class="
            cn(
                'relative rounded-3xl bg-card text-card-foreground overflow-hidden border',
                props.class,
            )
        "
    >
        <slot />
    </div>
</template>
