<script lang="ts" setup>
export interface t {
    type: string
    title: string
    description: string
}

const ttask: t = {
    type: "Fehlende Anwesenheitsliste",
    title: "[Fach] Kurs Name",
    description: "Beschreibung der Aufgabe"
}

const tasks = ref<t[]>(Array(5).fill(ttask))
</script>

<template>
    <div class="flex flex-col gap-4">
        <TaskCardItem v-for="task in tasks" :key="task.title" :task="task" />
    </div>
</template>
