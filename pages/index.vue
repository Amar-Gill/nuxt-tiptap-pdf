<script lang="ts" setup>
import { type JSONContent } from '@tiptap/vue-3';

const editorContent = useState<JSONContent | undefined>(
  'editorContent',
  () => undefined,
);

const tiptap = ref<InstanceType<typeof TipTap> | null>(null);

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
</script>

<template>
  <UPage>
    <UPageHeader title="Home Page" />
    <UPageBody>
      <div>
        <TipTap
          ref="tiptap"
          :content="{}"
          @update="(c) => (editorContent = c)"
        >
          <UButton
            label="impl0"
            @click="impl0"
          />
        </TipTap>
      </div>
    </UPageBody>
  </UPage>
</template>

<style scoped></style>
