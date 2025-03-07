<script setup lang="ts">
import { LucideInfo } from "lucide-vue-next"
</script>

<template>
    <div>
        <Card class="shadow-lg">
            <CardHeader>
                <CardTitle>
                    <LucideInfo :size="28" />
                    No upcoming course
                </CardTitle>
                <CardDescription>
                    <p class="leading-5">
                        In future you will see the next course and its details here.
                    </p>
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div class="flex items-center gap-2">
                    <p class="leading-4">
                        Click to create a course
                    </p>
                </div>
            </CardContent>
        </Card>
    </div>
</template>
