<script setup lang="ts">
import { LucidePlus } from "lucide-vue-next"
</script>

<template>
    <CourseCreateDrawer>
        <template #trigger>
            <Button size="lg" class="w-full">
                <LucidePlus :stroke-width="2" />
                Create Course
            </Button>
        </template>
    </CourseCreateDrawer>
</template>
