<template>
  <div class="editor">
    <Modal ref="ytmodal" @onConfirm="addCommand" />

    <EditorMenuBar v-bind:editor="editor">
      <div class="menubar_editor" slot-scope="{ commands }">
        <div class="iconCameraEditor" @click="openModal(commands.image)">
          <button
            class="menubar_editor_button"
            @click="openModal(commands.image)"
          >
            <b-icon
              icon="camera-fill"
              font-scale="7"
              style="color: #a3a3a3"
            ></b-icon>
          </button>
        </div>
      </div>
    </EditorMenuBar>

    <EditorContent
      class="editor__content"
      v-bind:editor="editor"
      v-show="viewEditor"
    />
  </div>
</template>

<script>
import { Editor, EditorContent, EditorMenuBar } from "tiptap";
import { Image } from "tiptap-extensions";
import Modal from "./imageModal.vue";

export default {
  name: "editor",
  components: {
    EditorContent,
    EditorMenuBar,
    Modal,
  },
  props: {
    content: {
      type: String,
      default: "",
    },
  },

  data() {
    return {
      editor: null,
      viewEditor: false,
    };
  },
  mounted() {
    this.editor = new Editor({
      extensions: [new Image()],
      content: "",
      onUpdate: ({ getHTML }) => {
        let content = getHTML().toString();
        if (!content.includes("img")) {
          this.viewEditor = false;
          this.$emit("childToParent", "");
        } else {
          this.$emit("childToParent", getHTML());
          this.viewEditor = true;
        }
      },
    });
  },
  beforeDestroy() {
    this.editor.destroy();
  },
  methods: {
    openModal(command) {
      this.$refs.ytmodal.showModal(command);
    },
    addCommand(data) {
      if (data.command !== null) {
        data.command(data.data);
      }
    },
    setContent() {
      this.editor.setContent(this.content);
    },
  },
};
</script>
<style>
.menubar_editor {
  display: flex;
  align-items: center;
}

.menubar_editor_button {
  padding: 0;
  margin: auto;
  cursor: pointer;
}

.iconCameraEditor {
  border-bottom: 2px dashed #ccc;
  border-top: 2px dashed #ccc;
  color: rgb(161, 159, 159);
  background-color: rgba(241, 241, 241, 0.842);
  display: flex;
  flex-direction: row;
  width: 28vw;
  height: 30vh;
  cursor: pointer;
  margin: 0;
  padding: 0;
}
</style>
