<script lang="ts" setup>
import { generateHTML } from '@tiptap/vue-3';
import StarterKit from '@tiptap/starter-kit';

const content = useEditorContent();

const htmlString = generateHTML(content.value!, [StarterKit]);

const pdfSection = ref<HTMLElement | null>(null);
</script>

<template>
  <div>
    <UButton
      @click="
        exportToPDF('my-pdf-file.pdf', pdfSection, {
          orientation: 'p',
        })
      "
    >
      impl1
    </UButton>
    <UButton @click="() => useHTMLToPDF('lala', pdfSection)">
      Impl4
    </UButton>
    <UCard>
      <div
        ref="pdfSection"
        class="prose prose-sm sm:prose-base lg:prose-lg xl:prose-2xl m-5 focus:outline-none bg-white p-1 rounded-md"
        v-html="htmlString"
      />
    </UCard>
  </div>
</template>

<style scoped></style>
