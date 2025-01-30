<template>
    <div>
        <header>
            <small class="text-muted-foreground">Welcome back, Arthur</small>
            <h1 class="">
                Dashboard
            </h1>
        </header>
        <main class="mt-4 grid gap-8">
            <section>
                <div class="box h-32" />
            </section>
            <section class="">
                <div class="box w-[75%]" />
                <div class="grid grid-cols-2 gap-4 mt-3">
                    <div class="box h-32" />
                    <div class="box h-32" />
                </div>
            </section>
            <section>
                <div class="flex gap-2">
                    <div class="box w-[50%]" />
                    <div class="box w-[20%]" />
                </div>
                <div class="grid gap-2 mt-3">
                    <div v-for="i in 3" :key="i" class="box h-16" />
                </div>
            </section>
        </main>
        <footer />
    </div>
</template>

<style>
.box {
    @apply bg-slate-200 px-4 py-4 rounded-lg;
}
</style>
