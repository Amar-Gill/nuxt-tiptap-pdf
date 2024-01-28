<script lang="ts" setup>
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
        </TipTap>
      </div>
    </UPageBody>
  </UPage>
</template>

<style scoped></style>
