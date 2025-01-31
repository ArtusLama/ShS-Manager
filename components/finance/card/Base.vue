<template>
    <Card>
        <CardContent class="p-5">
            <small class="text-muted-foreground flex items-center gap-1">
                <slot name="title" />
            </small>
            <p class="text-2xl font-semibold">
                <slot name="value" />
            </p>
            <p class="text-muted-foreground leading-5">
                <slot name="description" />
            </p>
        </CardContent>
    </Card>
</template>
