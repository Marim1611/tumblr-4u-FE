<template>
  <div>
    <EditorContent v-bind:editor="editor" />
  </div>
</template>

<script>
import { Editor, EditorContent } from "@tiptap/vue-2";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import Heading from "@tiptap/extension-heading";
import Paragraph from "@tiptap/extension-paragraph";

export default {
  components: {
    EditorContent,
  },
  data() {
    return {
      editor: null,
    };
  },
  mounted() {
    this.editor = new Editor({
      extensions: [
        StarterKit,
        Placeholder.configure({
          placeholder: '"Quote"',
        }),

        Paragraph.configure({
          HTMLAttributes: {
            class: "placeholderClass",
          },
        }),
        Heading.configure({
          levels: [1, 2, 3],
          HTMLAttributes: {
            class: "quoteClass",
          },
        }),
      ],

      onCreate() {
        this.editor = null;
      },

      onUpdate: ({ editor }) => {
        if (editor.getText() == "") {
          this.editor.commands.setContent(null);
          this.$emit("childToParent", null);
        } else {
          editor.commands.setHeading({ level: 1 });
          // console.log(editor.getHTML());

          this.$emit("childToParent", editor.getHTML());
        }
      },
      content: ``,
    });
  },
  methods: {
    fun() {
      console.log(this.editor.getHTML());
    },
  },
};
</script>

<style>
.ProseMirror p.placeholderClass {
  margin: 0;
  outline: none;
  cursor: text;
}

.ProseMirror p.placeholderClass.is-editor-empty::before {
  content: "\201C Quote\201D";
  float: left;
  color: #48515a;
  pointer-events: none;
  height: 0;
}

.placeholderClass {
  font-family: Georgia, serif;
  font-size: 50px;
  font-weight: 300;
}

/* .ProseMirror-trailingBreak{
  display: none;
} */

.quoteClass {
  font-family: Georgia, serif;
}

.quoteClass.is-empty.is-editor-empty::after {
  content: "";
}

.quoteClass:first-child:before {
  content: "\201C";
}
.quoteClass:last-of-type:after {
  content: "\201D";
}
</style>
