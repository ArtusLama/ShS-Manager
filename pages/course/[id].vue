<script lang="ts" setup>
const route = useRoute()

const courseId = computed(() => route.params.id)

const client = useSupabaseClient()
const x = await client.from("subject").select().single()
</script>

<template>
    <div>
        <button @click="$router.back()">
            back
        </button>
        <p>{{ courseId }}</p>
        <p>{{ x }}</p>
    </div>
</template>
