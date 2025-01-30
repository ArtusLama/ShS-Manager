<script lang="ts" setup>
const head = useLocaleHead({
    addDirAttribute: true,
    addSeoAttributes: true,
})
const htmlAttrs = computed(() => head.value.htmlAttrs!)
</script>

<template>
    <div>
        <Html :lang="htmlAttrs.lang" :dir="htmlAttrs.dir" />

        <NuxtPwaManifest />

        <NuxtLoadingIndicator />
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>
