<template>
  <div>
    <div>
      <bubble-menu
        class="bubble-menu"
        v-bind:tippy-options="{ duration: 100 }"
        v-bind:editor="editor"
        v-if="editor"
      >
        <b-icon
          class="editButtons"
          v-on:click="boldButton"
          v-bind:class="{
            'is-active': editor.isActive('bold'),
          }"
          icon="type-bold"
          font-scale="2"
        ></b-icon>

        <b-icon
          v-on:click="italicButton"
          v-bind:class="{
            'is-active': editor.isActive('italic'),
          }"
          class="editButtons"
          icon="type-italic"
          font-scale="2"
        ></b-icon>

        <b-icon
          icon="type-h3"
          font-scale="2"
          v-on:click="headlineButton"
          v-bind:class="{
            'is-active': editor.isActive('heading', { level: 3 }),
          }"
          class="editButtons"
        >
          H
        </b-icon>
        <b-icon
          v-on:click="strikedButton"
          v-bind:class="{
            'is-active': editor.isActive('strike'),
          }"
          class="editButtons"
          icon="type-strikethrough"
          font-scale="2"
        ></b-icon>

        <b-icon
          v-on:click="orderedListButton"
          v-bind:class="{
            'is-active': editor.isActive('orderedList'),
          }"
          class="editButtons"
          icon=" list-ol"
          font-scale="2"
        ></b-icon>

        <b-icon
          v-on:click="unorderedListButton"
          v-bind:class="{
            'is-active': editor.isActive('bulletList'),
          }"
          class="editButtons"
          icon="  list-ul"
          font-scale="2"
        ></b-icon>

        <b-icon
          v-on:click="blockQuoteButton"
          v-bind:class="{
            'is-active': editor.isActive('blockquote'),
          }"
          class="editButtons"
          icon=" arrow-bar-right"
          font-scale="2"
        ></b-icon>
      </bubble-menu>
    </div>
    <EditorContent v-bind:editor="editor" />
  </div>
</template>

<script>
import { Editor, EditorContent, BubbleMenu } from "@tiptap/vue-2";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import Paragraph from "@tiptap/extension-paragraph";

export default {
  components: {
    EditorContent,
    BubbleMenu,
  },
  data() {
    return {
      editor: null,
      boldChosen: false,
      italicChosen: false,
      strikeChosen: false,
      headingChosen: false,
      orderedListChosen: false,
      unorderedListChosen: false,
      blockQuoteChosen: false,
    };
  },
  mounted() {
    this.editor = new Editor({
      extensions: [
        StarterKit,
        Placeholder.configure({
          placeholder: "Source",
        }),
        Paragraph.configure({
          HTMLAttributes: {
            class: "sourceClass",
          },
        }),
      ],
    
      onCreate() {
        this.editor = null;
      },
      
      onUpdate: ({ editor }) => {
        if (editor.getText() == "") {
          if (this.headingChosen == true) {
            this.headingChosen = false;
            this.editor.chain().focus().toggleHeading({ level: 3 }).run();
          }
        }
        if (editor.isEmpty) {
          if (this.boldChosen == true) {
            this.boldChosen = false;
            this.editor.chain().focus().toggleBold().run();
          }
          if (this.italicChosen == true) {
            this.italicChosen = false;
            this.editor.chain().focus().toggleItalic().run();
          }
          this.editor.commands.setContent(null);

          this.$emit("childToParent", null);
        } else {
          this.$emit("childToParent", editor.getHTML());
          console.log(editor.getHTML());
        }
      },
      content: ``,
    });
  },
  methods: {
 
    boldButton() {
      this.boldChosen = !this.boldChosen;
      this.editor.chain().focus().toggleBold().run();
    },
    
    italicButton() {
      this.italicChosen = !this.italicChosen;
      this.editor.chain().focus().toggleItalic().run();
    },
    
    headlineButton() {
      if (this.orderedListChosen == true) {
        this.orderedListChosen = !this.orderedListChosen;
        this.unorderedListChosen = false;
        this.editor.chain().focus().toggleOrderedList().run();
      }
      if (this.unorderedListChosen == true) {
        this.unorderedListChosen = !this.unorderedListChosen;
        this.orderedListChosen = false;
        this.editor.chain().focus().toggleBulletList().run();
      }
      this.headingChosen = !this.headingChosen;
      this.editor.chain().focus().toggleHeading({ level: 3 }).run();
    },
   
    strikedButton() {
      this.strikeChosen = !this.strikeChosen;
      this.editor.chain().focus().toggleStrike().run();
    },
  
    orderedListButton() {
      this.orderedListChosen = !this.orderedListChosen;
      this.unorderedListChosen = false;
      this.editor.chain().focus().toggleOrderedList().run();
    },
   
    unorderedListButton() {
      this.unorderedListChosen = !this.unorderedListChosen;
      this.orderedListChosen = false;
      this.editor.chain().focus().toggleBulletList().run();
    },
   
    blockQuoteButton() {
      this.blockQuoteChosen = !this.blockQuoteChosen;
      this.editor.chain().focus().toggleBlockquote().run();
    },
  },
};
</script>

<style>
.ProseMirror {
  outline: none;
  overflow: hidden;
  padding-left: 5px;
  cursor: text;
  word-wrap: break-word;
  max-width: 26vw;
  min-height: 100px;
}

.ProseMirror p.is-editor-empty::before {
  content: attr(data-placeholder);
  float: left;
  color: #81878d;
  pointer-events: none;
  height: 0;
}

.editButtons {
  transition: background-color 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);
  /* box-sizing: border-box; */
  border-radius: 15px;
  border: none;
  width: 30px;
  padding: 6px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.8);
  cursor: pointer;
  margin: 0px 1px;
  white-space: nowrap;
}
.is-active {
  background-color: rgb(14, 177, 226);
}
</style>
