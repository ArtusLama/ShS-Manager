<script lang="ts" setup>
import { LucideHome } from "lucide-vue-next"
</script>

<template>
    <div class="fixed left-0 bottom-0 right-0 z-40">
        <div class="flex items-center justify-evenly bg-card border-t py-2">
            <NavLink to="/">
                <LucideHome :size="32" />
            </NavLink>
            <NavLink to="/index-shad">
                <LucideHome :size="32" />
            </NavLink>
            <NavLink to="/skeleton-index">
                <LucideHome :size="32" />
            </NavLink>
        </div>
    </div>
</template>
