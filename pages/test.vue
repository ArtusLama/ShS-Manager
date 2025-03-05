<script lang="ts" setup>
const { data, error, status, refresh } = useStudents().getById("a3e0723a-40a8-4ca8-bbb7-e2e3139b529e")
</script>

<template>
    <div>
        <div class="p-2 border rounded-lg">
            <p>Status: ({{ status }})</p>
            <p>{{ error }}</p>
            <p>Name: {{ data?.name }}</p>
            <p>Notes: {{ data?.notes }}</p>
            <button class="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2" @click="() => refresh()">
                Refresh
            </button>
        </div>
    </div>
</template>
