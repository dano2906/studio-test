<script setup lang="ts">
const route = useRoute()
const { locale } = useI18n()

const slug = computed(() => {
  const path = Array.isArray(route.params.slug) ? route.params.slug.join('/') : route.params.slug
  return path ? `/${path}` : '/'
})

// Fetch content before render, dynamically picking the right language collection
const { data: page } = await useAsyncData(`page-${locale.value}-${slug.value}`, async () => {
  const collectionName = `content_${locale.value}` as 'content_en' | 'content_es'

  let content = await queryCollection(collectionName).path(slug.value).first()

  // Fallback: If Spanish translation is missing, show English instead of a 404
  if (!content && locale.value !== 'en') {
    content = await queryCollection('content_en').path(slug.value).first()
  }

  return content
})
</script>

<template>
  <main>
    <ContentRenderer v-if="page" :value="page" />
    <div v-else>
      <h1>404 - Page not found</h1>
    </div>
  </main>
</template>