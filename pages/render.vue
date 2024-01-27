<script lang="ts" setup>
import { generateHTML } from '@tiptap/vue-3';
import StarterKit from '@tiptap/starter-kit';

const content = useEditorContent();

const htmlString = generateHTML(content.value!, [StarterKit]);
</script>

<template>
  <div
    class="prose dark:prose-invert prose-sm sm:prose-base lg:prose-lg xl:prose-2xl m-5 focus:outline-none"
    v-html="htmlString"
  />
</template>

<style scoped></style>
