<script lang="ts" setup>
const counter = useCounter()
const { count } = storeToRefs(counter)
</script>

<template>
    <div class="flex flex-col items-center gap-2 border border-gray-300 rounded-xl px-12 py-8">
        <p class="text-2xl font-semibold">
            Count:
            <span class="font-bold">
                {{ count }}
            </span>
        </p>
        <p class="text-gray-500">
            Doubled value: {{ counter.getDouble }}
        </p>
        <div class="flex gap-2">
            <button class="bg-blue-400 hover:bg-blue-500 transition-colors text-white px-4 py-2 rounded" @click="counter.increment">
                +1
            </button>
            <button class="bg-blue-400 hover:bg-blue-500 transition-colors text-white px-4 py-2 rounded" @click="counter.decrement">
                -1
            </button>
        </div>
    </div>
</template>
