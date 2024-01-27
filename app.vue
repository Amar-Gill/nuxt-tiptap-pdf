<script setup lang="ts">
const links = [{ to: '/render', label: 'render' }];
</script>
<template>
  <UHeader :links="links">
    <template #logo>
      Nuxt Tiptap PDF
    </template>
    <template #right>
      <UColorModeButton />
    </template>
  </UHeader>
  <UMain>
    <UContainer>
      <NuxtPage />
    </UContainer>
  </UMain>
</template>
