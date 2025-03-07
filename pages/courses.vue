<script lang="ts" setup>

</script>

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
                <CourseList />
            </TabsContent>
            <TabsContent value="old">
                <CourseListRecent />
            </TabsContent>
        </Tabs>
    </div>
</template>
