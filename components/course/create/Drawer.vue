<script setup lang="ts">
import { LucideCheck } from "lucide-vue-next"
</script>

<template>
    <Drawer>
        <DrawerTrigger>
            <slot name="trigger" />
        </DrawerTrigger>
        <DrawerContent>
            <DrawerHeader>
                <DrawerTitle>Create new Course:</DrawerTitle>
            </DrawerHeader>
            <DrawerFooter>
                <Button>
                    <LucideCheck />
                    Create Course
                </Button>
                <DrawerClose>
                    <Button variant="outline" class="w-full">
                        Cancel
                    </Button>
                </DrawerClose>
            </DrawerFooter>
        </DrawerContent>
    </Drawer>
</template>
