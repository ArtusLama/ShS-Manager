<script lang="ts" setup>
import { CircleDollarSign } from "lucide-vue-next"
</script>

<template>
    <FinanceCardBase>
        <template #title>
            <CircleDollarSign :size="20" :stroke-width="1.75" />
            Earned
        </template>
        <template #value>
            235.79 €
        </template>
        <template #description>
            total amount
        </template>
    </FinanceCardBase>
</template>
