import type { JSONContent } from '@tiptap/vue-3';

export const useEditorContent = () => {
  const editorContent = useState<JSONContent | undefined>(
    'editorContent',
    () => undefined,
  );

  return editorContent;
};
