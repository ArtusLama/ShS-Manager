<template>
    <div class="grid place-items-center">
        <div class="flex flex-col items-center gap-4">
            <HelloWorld />
            <Counter />
        </div>
        <NuxtLink to="/design">
            Design System
        </NuxtLink>
    </div>
</template>

<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    }
</style>
