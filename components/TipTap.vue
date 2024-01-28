<script lang="ts" setup>
import { useEditor, EditorContent, type JSONContent } from '@tiptap/vue-3';
import StarterKit from '@tiptap/starter-kit';

const props = withDefaults(
  defineProps<{ content: JSONContent | null; delay: number }>(),
  { content: null, delay: 1000 },
);

const emit = defineEmits<{
  (event: 'update', content?: JSONContent): void;
}>();

const emitUpdateDebounced = useDebounceFn(
  () => emit('update', editor.value?.getJSON()),
  props.delay,
);

const editor = useEditor({
  content: props.content ?? '',
  extensions: [StarterKit],
  editorProps: {
    attributes: {
      class:
        'prose dark:prose-invert prose-sm sm:prose-base lg:prose-lg xl:prose-2xl m-5 focus:outline-none',
    },
  },
  onUpdate: emitUpdateDebounced,
});

defineExpose({ editor });
</script>

<template>
  <UCard>
    <template #header>
      <EditorMenu
        v-if="editor"
        :editor="editor"
      />
    </template>
    <EditorContent :editor="editor" />
    <template #footer>
      <slot />
    </template>
  </UCard>
</template>

<style scoped></style>
