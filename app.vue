<template>
  <div id="app">
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Nuxt app',
  meta: [{ hid: 'description', name: 'description', content: 'Nuxt app' }],
  link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  htmlAttrs: { lang: 'nl' },
})
</script>
