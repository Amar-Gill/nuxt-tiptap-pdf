<script lang="ts" setup>
import { useHTMLToPDF } from '~/utils/html-to-pdf';

const editorContent = useEditorContent();

const tiptap = ref<InstanceType<typeof TipTap> | null>(null);

const pdfGenerating = ref(false);

const impl0 = async () => {
  const htmlString = tiptap.value?.editor?.getHTML();

  console.log(htmlString);
  const div = document.createElement('div');

  const pdf = await htmlToPdf(div, undefined, {
    html2canvas: { scale: 0.7, useCORS: true },
  });

  await pdf.html(htmlString!);

  const blob = pdf.output('blob');

  window.open(URL.createObjectURL(blob), '_blank');
};

const impl2 = async () => {
  pdfGenerating.value = true;

  const htmlString = tiptap.value?.editor?.getHTML();

  await $fetch('/api/pdf', {
    query: {
      htmlString,
    },
  });

  pdfGenerating.value = false;
};

const impl3 = async () => {
  const htmlString = tiptap.value?.editor?.getHTML();

  const x = useHTMLToPDF('abc', htmlString);
};

// I like this one
const impl5 = async () => {
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
    'm-5',
    'focus:outline-none',
  );

  const x = await useHTMLToPDF('hohoho', el);

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
            label="impl0"
            @click="impl0"
          />
          <UButton
            label="impl2"
            :loading="pdfGenerating"
            @click="impl2"
          />

          <UButton
            label="impl3"
            :loading="pdfGenerating"
            @click="impl3"
          />
          <UButton
            label="impl5"
            :loading="pdfGenerating"
            @click="impl5"
          />
        </TipTap>
      </div>
    </UPageBody>
  </UPage>
</template>

<style scoped></style>
