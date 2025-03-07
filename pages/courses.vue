<template>
    <div>
        <TextHeader title="Courses" />
        <Tabs default-value="base" class="w-full">
            <TabsList class="grid w-full grid-cols-2">
                <TabsTrigger value="base">
                    Manage
                </TabsTrigger>
                <TabsTrigger value="old">
                    Recent Sessions
                </TabsTrigger>
            </TabsList>

            <TabsContent value="base">
                <Suspense>
                    <CourseList />
                    <template #fallback>
                        <div class="grid grid-cols-1 gap-4">
                            <Skeleton v-for="i in 3" :key="i" class="w-full h-32 rounded-3xl" />
                        </div>
                    </template>
                </Suspense>
            </TabsContent>
            <TabsContent value="old">
                <Suspense>
                    <CourseListRecent />

                    <template #fallback>
                        <div class="grid grid-cols-1 gap-4">
                            <Skeleton v-for="i in 12" :key="i" class="w-full h-32 rounded-3xl" />
                        </div>
                    </template>
                </Suspense>
            </TabsContent>
        </Tabs>
    </div>
</template>
