<script lang="ts" setup>
import type { TipTap } from '#build/components';

const editorContent = useEditorContent();

const tiptap = ref<InstanceType<typeof TipTap> | null>(null);

const pdfGenerating = ref(false);

const numPages = ref(1);

const generatePdf = async () => {
  pdfGenerating.value = true;

  const htmlString = tiptap.value?.editor?.getHTML();

  const el = document.createElement('div');

  el.innerHTML = htmlString;

  el.classList.add(
    'prose',
    'prose-sm',
    'sm:prose-base',
    'lg:prose-lg',
    'xl:prose-2xl',
    'm-24',
    'text-zinc-700',
  );

  const x = await convertHTMLToPDF('hohoho', el, numPages.value);

  pdfGenerating.value = false;
};
</script>

<template>
  <UPage>
    <UPageHeader title="Home Page" />
    <UPageBody>
      <div>
        <TipTap
          ref="tiptap"
          :content="editorContent || {}"
          :delay="300"
          @update="(c) => (editorContent = c)"
        >
          <UButton
            label="Generate PDF"
            icon="i-tabler-file-type-pdf"
            :loading="pdfGenerating"
            @click="generatePdf"
          />
          Num Pages: {{ numPages }}
          <UButtonGroup>
            <UButton @click="numPages++">
              +
            </UButton>
            <UButton @click="numPages--">
              -
            </UButton>
          </UButtonGroup>
          <a
            :href="`/api/pdf?htmlString=${tiptap?.editor?.getHTML()}`"
            target="_blank"
          >
            Puppeteer
          </a>
          <a
            href="/lorem.pdf"
            target="_blank"
          >lorem</a>
        </TipTap>
      </div>
    </UPageBody>
  </UPage>
</template>

<style scoped></style>
