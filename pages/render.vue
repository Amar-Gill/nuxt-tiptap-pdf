<script lang="ts" setup>
import { type JSONContent } from '@tiptap/vue-3';

const content = useState<JSONContent>('editorContent');
</script>

<template>
  <div>{{ content }}</div>
</template>

<style scoped></style>
