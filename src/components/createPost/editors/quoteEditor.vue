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
/**
 *  Create rich text editor for the quote part
 * @example [none]
 */
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
          HTMLAttributes: {
            class: "quoteClass",
          },
        }),
      ],

      /**
       * Function to make sure that the editor empty when creating it
       * @public This is a public method
       * @param {none}
       */
      onCreate() {
        this.editor = null;
      },

      /**
       * Function to know whenever something is written inside the editor (it removes any edited effects on the new text --> bold/italic..) and sends the content of this editor whether its empty or not to the create posts' components
       * @public This is a public method
       * @param {Editor} editor
       */

      onUpdate: ({ editor }) => {
        try {
          if (editor.getText() == "") {
            this.editor.commands.setContent(null);
            this.$emit("childToParent", "");
          } else {
            // editor.commands.setHeading({ level: 1 });
            // console.log(editor.getHTML());

            this.$emit("childToParent", editor.getHTML());
          }
        } catch (error) {
          console.log(error);
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
  /* content: " Quote"; */
  float: left;
  color: #48515a;
  pointer-events: none;
  height: 0;
}

.placeholderClass {
  font-family: Georgia, serif;
  font-size: 50px;
  font-weight: 300;
  padding-top: 20px;
}

/* .ProseMirror-trailingBreak{
  display: none;
} */

.quoteClass {
  font-family: Georgia, serif;
}

/* .placeholderClass.is-empty.is-editor-empty::after {
  content: "";
} */

/* .placeholderClass:first-child:before {
  content: "\201C";
}
.placeholderClass:last-of-type:after {
  content: "\201D";
} */
</style>
