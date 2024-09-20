<script setup lang="ts"></script>

<template>
  <div>
    <UHeader>
      <template #logo>
        Nuxt Tiptap PDF
      </template>
      <template #right>
        <UColorModeButton />
      </template>
    </UHeader>
    <UContainer>
      <slot />
    </UContainer>
  </div>
</template>

<style scoped></style>
