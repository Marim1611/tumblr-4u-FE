<template>
  <div>
  <div>
  </div>
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
 *  Create rich text editor for the title
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
          placeholder: "Title",
        }),
        Paragraph.configure({
          HTMLAttributes: {
            class: "placeholderTitleClass",
          },
        }),
        Heading.configure({
          HTMLAttributes: {
            class: "titleClass",
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
          this.editor.commands.setContent("");
          console.log("entered here")
          this.$emit("childToParent", "");
        } else {
          // console.log(editor.getHTML());
          console.log("entered here 3")
        
          this.$emit("childToParent", editor.getHTML());
        }  
        } catch (error) {
         console.log(error) 
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
.ProseMirror p.placeholderTitleClass {
  margin: 0;
  outline: none;
  cursor: text;
  /* line-height: 10px; */
}
.ProseMirror p.placeholderTitleClass.is-editor-empty::before {
  content: attr(data-placeholder);
  float: left;
  color: #48515a;
  pointer-events: none;
  height: 0;
}
.placeholderTitleClass {
  font-size: 36px;
  font-weight: 400;
}
</style>