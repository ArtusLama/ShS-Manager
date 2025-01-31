<template>
    <div>
        <TextHeader title="Dashboard" subtitle="Welcome back, Arthur!" />
        <main class="grid gap-8">
            <section>
                <CourseCardNextOrCurrent />
            </section>
            <section>
                <h3>Finance:</h3>
                <div class="grid grid-cols-2 gap-4 mt-2">
                    <FinanceCardEarned />
                    <FinanceCardWaits />
                </div>
            </section>
        </main>
    </div>
</template>
