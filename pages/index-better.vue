<script setup lang="ts">
import { ArrowRight, Calendar, CircleDollarSign, Clock, CornerDownRight, MoveDiagonal, TrendingUp } from "lucide-vue-next"
</script>

<template>
    <div>
        <header>
            <small class="text-muted-foreground">Welcome back, Arthur</small>
            <h1>
                Dashboard
            </h1>
        </header>
        <main class="mt-4 grid gap-8">
            <section>
                <div class="relative border rounded-lg px-4 py-2 overflow-hidden bg-background shadow-sm">
                    <h4>Mathe - Kurs Name</h4>
                    <p class="text-muted-foreground leading-5">
                        Beschreibung des Kurses Beschreibung des Kurses Beschreibung des Kurses
                    </p>
                    <div class="flex gap-4 items-center mt-2">
                        <div class="flex items-center gap-1">
                            <Calendar :size="18" />
                            <p>Morgen</p> <!-- Heute / Montag / Momentag with progress bar + x min left -->
                        </div>
                        <div class="flex items-center gap-1">
                            <Clock :size="18" />
                            <p>16:00 - 16:45</p>
                        </div>
                    </div>
                    <div class="absolute bottom-2 right-2 text-muted-foreground">
                        <MoveDiagonal :size="24" />
                    </div>
                    <!--
                    <div class="absolute bottom-0 left-0 right-[25%] h-1 rounded-lg bg-blue-400" />
                    -->
                </div>
            </section>
            <section class="">
                <h3>Finance:</h3>
                <div class="grid grid-cols-2 gap-4 mt-2">
                    <div class="rounded-lg border bg-card text-card-foreground shadow-sm px-4 py-4">
                        <div class="flex items-center gap-2 text-muted-foreground">
                            <CircleDollarSign :size="20" :stroke-width="1.75" />
                            <p class="text-lg">
                                Earned
                            </p>
                        </div>
                        <h2>137,32€</h2>
                        <div class="flex items-center gap-2 text-sm bg-green-300/25 text-green-600 w-fit rounded-full px-2 py-1 mt-2">
                            <TrendingUp :size="22" :stroke-width="1.75" />
                            <small>12,41€/week</small>
                        </div>
                    </div>
                    <div class="rounded-lg border bg-card text-card-foreground shadow-sm px-4 py-4">
                        <div class="flex items-center gap-2 text-muted-foreground">
                            <CircleDollarSign :size="20" :stroke-width="1.75" />
                            <p class="text-lg">
                                Waits
                            </p>
                        </div>
                        <h2>24,82€</h2>
                        <div class="flex items-center gap-2 text-sm text-muted-foreground px-2 py-1">
                            <CornerDownRight :size="20" :stroke-width="1.75" />
                            <small class="mt-1 underline underline-offset-4">get money</small>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div class="flex items-center gap-2">
                    <h3>Tasks:</h3>
                    <p class="text-muted-foreground text-lg underline underline-offset-4">
                        (see all)
                    </p>
                </div>
                <div class="grid gap-2 mt-3">
                    <div v-for="i in 3" :key="i" class="rounded-lg border bg-card text-card-foreground shadow-sm px-4 py-3 flex items-center justify-between">
                        <div>
                            <h4>Missing attendance list</h4>
                            <p class="text-muted-foreground text-sm">
                                21.04.2025 - [Mathe] Kurs Name
                            </p>
                        </div>
                        <ArrowRight :size="22" :stroke-width="1.75" />
                    </div>
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
