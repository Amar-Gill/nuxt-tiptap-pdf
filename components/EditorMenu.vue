<script lang="ts" setup>
import type { Editor } from '@tiptap/vue-3';

const { metaSymbol } = useShortcuts();

defineProps<{ editor: Editor }>();
</script>

<template>
  <div class="flex justify-between overflow-auto flex-wrap">
    <UButtonGroup>
      <UTooltip text="Clear Formatting">
        <UButton
          square
          icon="i-tabler-clear-formatting"
          variant="soft"
          @click="editor.chain().focus().unsetAllMarks().clearNodes().run()"
        />
      </UTooltip>
      <UTooltip text="Divider">
        <UButton
          square
          icon="i-tabler-line-dashed"
          variant="soft"
          @click="editor.chain().focus().setHorizontalRule().run()"
        />
      </UTooltip>
      <UTooltip
        text="Hard Break"
        :shortcuts="[metaSymbol, 'Enter']"
      >
        <UButton
          square
          icon="i-tabler-page-break"
          variant="soft"
          @click="editor.chain().focus().setHardBreak().run()"
        />
      </UTooltip>
      <UTooltip
        text="Undo"
        :shortcuts="[metaSymbol, 'Z']"
      >
        <UButton
          square
          :disabled="!editor.can().chain().focus().undo().run()"
          icon="i-tabler-arrow-back"
          variant="soft"
          @click="editor.chain().focus().undo().run()"
        />
      </UTooltip>
      <UTooltip
        text="Redo"
        :shortcuts="[metaSymbol, '&#x21E7;', 'Z']"
      >
        <UButton
          square
          :disabled="!editor.can().chain().focus().redo().run()"
          icon="i-tabler-arrow-forward"
          variant="soft"
          @click="editor.chain().focus().redo().run()"
        />
      </UTooltip>
    </UButtonGroup>
    <span class="flex justify-between gap-10">
      <span class="flex justify-between gap-1">
        <UTooltip
          text="Bold"
          :shortcuts="[metaSymbol, 'B']"
        >
          <UButton
            square
            :disabled="!editor.can().chain().focus().toggleBold().run()"
            :variant="editor.isActive('bold') ? 'outline' : 'ghost'"
            icon="i-tabler-bold"
            @click="editor.chain().focus().toggleBold().run()"
          />
        </UTooltip>
        <UTooltip
          text="Italics"
          :shortcuts="[metaSymbol, 'I']"
        >
          <UButton
            square
            :disabled="!editor.can().chain().focus().toggleItalic().run()"
            :variant="editor.isActive('italic') ? 'outline' : 'ghost'"
            icon="i-tabler-italic"
            @click="editor.chain().focus().toggleItalic().run()"
          />
        </UTooltip>
        <UTooltip text="Strikethrough">
          <UButton
            square
            :disabled="!editor.can().chain().focus().toggleStrike().run()"
            :variant="editor.isActive('strike') ? 'outline' : 'ghost'"
            icon="i-tabler-strikethrough"
            @click="editor.chain().focus().toggleStrike().run()"
          />
        </UTooltip>
        <UTooltip
          text="Code"
          :shortcuts="[metaSymbol, 'E']"
        >
          <UButton
            square
            :disabled="!editor.can().chain().focus().toggleCode().run()"
            :variant="editor.isActive('code') ? 'outline' : 'ghost'"
            icon="i-tabler-code"
            @click="editor.chain().focus().toggleCode().run()"
          />
        </UTooltip>
        <UTooltip
          text="Numbered List"
          :shortcuts="[metaSymbol, '&#x21E7;', '7']"
        >
          <UButton
            square
            :variant="editor.isActive('orderedList') ? 'outline' : 'ghost'"
            icon="i-tabler-list-numbers"
            @click="editor.chain().focus().toggleOrderedList().run()"
          />
        </UTooltip>
        <UTooltip
          text="Bullet List"
          :shortcuts="[metaSymbol, '&#x21E7;', '8']"
        >
          <UButton
            square
            :variant="editor.isActive('bulletList') ? 'outline' : 'ghost'"
            icon="i-tabler-list"
            @click="editor.chain().focus().toggleBulletList().run()"
          />
        </UTooltip>
        <UTooltip text="Block Quote">
          <UButton
            square
            :variant="editor.isActive('blockquote') ? 'outline' : 'ghost'"
            icon="i-tabler-blockquote"
            @click="editor.chain().focus().toggleBlockquote().run()"
          />
        </UTooltip>
      </span>
      <span class="flex justify-between gap-1">
        <UTooltip
          text="Paragraph"
          :shortcuts="[metaSymbol, '&#9095;', '0']"
        >
          <UButton
            square
            :variant="editor.isActive('paragraph') ? 'outline' : 'ghost'"
            icon="i-material-symbols-format-paragraph-rounded"
            @click="editor.chain().focus().setParagraph().run()"
          />
        </UTooltip>
        <UTooltip
          text="Heading 1"
          :shortcuts="[metaSymbol, '&#9095;', '1']"
        >
          <UButton
            square
            :variant="
              editor.isActive('heading', { level: 1 }) ? 'outline' : 'ghost'
            "
            icon="i-tabler-h-1"
            @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
          />
        </UTooltip>
        <UTooltip
          text="Heading 2"
          :shortcuts="[metaSymbol, '&#9095;', '2']"
        >
          <UButton
            square
            :variant="
              editor.isActive('heading', { level: 2 }) ? 'outline' : 'ghost'
            "
            icon="i-tabler-h-2"
            @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
          />
        </UTooltip>
        <UTooltip
          text="Heading 3"
          :shortcuts="[metaSymbol, '&#9095;', '3']"
        >
          <UButton
            square
            :variant="
              editor.isActive('heading', { level: 3 }) ? 'outline' : 'ghost'
            "
            icon="i-tabler-h-3"
            @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
          />
        </UTooltip>
        <UTooltip
          text="Heading 4"
          :shortcuts="[metaSymbol, '&#9095;', '4']"
        >
          <UButton
            square
            :variant="
              editor.isActive('heading', { level: 4 }) ? 'outline' : 'ghost'
            "
            icon="i-tabler-h-4"
            @click="editor.chain().focus().toggleHeading({ level: 4 }).run()"
          />
        </UTooltip>
        <UTooltip
          text="Code Block"
          :shortcuts="[metaSymbol, '&#9095;', 'C']"
        >
          <UButton
            square
            :variant="editor.isActive('codeBlock') ? 'outline' : 'ghost'"
            icon="i-tabler-terminal-2"
            @click="editor.chain().focus().toggleCodeBlock().run()"
          />
        </UTooltip>
      </span>
    </span>
  </div>
</template>

<style scoped></style>
