<script lang="ts" setup>
import { HandCoins } from "lucide-vue-next"
</script>

<template>
    <FinanceCardBase>
        <template #title>
            <HandCoins :size="20" :stroke-width="1.75" />
            Waits
        </template>
        <template #value>
            24.82 €
        </template>
        <template #description>
            <a href="#">request</a>
        </template>
    </FinanceCardBase>
</template>
