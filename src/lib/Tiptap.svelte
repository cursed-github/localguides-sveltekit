<script>
  import "./editorstyle.css";

  import StarterKit from "@tiptap/starter-kit";
  import { Editor, getHTMLFromFragment } from "@tiptap/core";
  import { BulletList } from "@tiptap/extension-bullet-list";
  import { ListItem } from "@tiptap/extension-list-item";
  import { OrderedList } from "@tiptap/extension-ordered-list";
  import { Image } from "@tiptap/extension-image";
  import { Blockquote } from "@tiptap/extension-blockquote";
  import { onMount } from "svelte";
  import { TextAlign } from "@tiptap/extension-text-align";
  import { Typography } from "@tiptap/extension-typography";
  import { FontFamily } from "@tiptap/extension-font-family";
  import { Text } from "@tiptap/extension-text";
  import * as icons from "$lib/stock";
  import {
    Button,
    Dropdown,
    DropdownItem,
    DropdownDivider,
    DropdownHeader,
    Chevron,
    Input,
  } from "flowbite-svelte";
  import TextStyle from "@tiptap/extension-text-style";

  let element;
  let editor;
  let TableOfContent;
  let ToC;

  onMount(async () => {
    TableOfContent = (await import("@tiptap-pro/extension-table-of-content"))
      .TableOfContent;
    ToC = (await import("./ToC.svelte")).default;
    editor = new Editor({
      element: element,
      extensions: [
        StarterKit,
        BulletList,
        ListItem,
        OrderedList,
        Image,
        Image.configure({
          HTMLAttributes: {
            class: "mx-auto h-96 m-2",
          },
        }),
        Blockquote,
        Blockquote.configure({
          HTMLAttributes: {
            class: "border-l-2 border-gray-400 pl-4",
          },
        }),
        TextAlign.configure({
          types: ["heading", "paragraph"],
        }),
        Typography,
        FontFamily,
        TextStyle,
        TableOfContent,
      ],
      content: `
              <h2>
                Hi there,
              </h2>
              <p>
                this is a <em>basic</em> example of <strong>tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
              </p>
              <ul>
                <li>
                  That’s a bullet list with one …
                </li>
                <li>
                  … or two list items.
                </li>
              </ul>
              <p>
                Isn’t that great? And all of that is editable. But wait, there’s more. Let’s try a code block:
              </p>
              <pre><code class="language-css">body {
          display: none;
        }</code></pre>
              <p>
                I know, I know, this is impressive. It’s only the tip of the iceberg though. Give it a try and click a little bit around. Don’t forget to check the other examples too.
              </p>
              <blockquote>
                Wow, that’s amazing. Good work, boy! 👏
                <br />
                — Mom
              </blockquote>
            `,
      onTransaction: () => {
        // force re-render so `editor.isActive` works as expected
        editor = editor;
      },
    });
  });

  const addImage = () => {
    const url = window.prompt("url");

    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    } else editor.commands.deleteSelection();
  };

  const alignImage = (classToAdd) => {
    const elements = document.querySelectorAll(".ProseMirror-selectednode");

    if (
      elements.length === 0 ||
      elements[0].tagName.toLocaleLowerCase() != "img"
    )
      return;

    elements[0].classList.remove("float-left", "float-right", "mx-auto");

    elements[0].classList.add(classToAdd);
  };
</script>

<div class="relative flex flex-col vertical-align">
  <div
    class=" sticky top-0 z-10 flex justify-center gap-2 w-full md:w-5/6 xl:max-w-screen-xl mx-auto pt-2 bg-white border-b-2"
  >
    {#if editor}
      <div>
        <!-- <button
          on:click={() =>
            console.log && editor.chain().focus().setFontFamily("serif").run()}
          disabled={!editor.can().chain().focus().setFontFamily("fancy").run()}
          class={editor.isActive("bold") ? "is-active" : ""}
        >
          <img
            src={icons.boldIcon}
            alt="Bold"
            class="w-6 h-6 bg-white hover:bg-slate-200"
          />
        </button> -->
        <button
          on:click={() =>
            console.log && editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          class={editor.isActive("bold") ? "is-active" : ""}
        >
          <img
            src={icons.boldIcon}
            alt="Bold"
            class="w-6 h-6 bg-white hover:bg-slate-200"
          />
        </button>
        <button
          on:click={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          class={editor.isActive("italic") ? "is-active" : ""}
        >
          <img
            src={icons.italicIcon}
            alt="Bold"
            class="w-6 h-6 bg-white hover:bg-slate-200"
          />
        </button>
        <button
          on:click={() => editor.chain().focus().toggleStrike().run()}
          disabled={!editor.can().chain().focus().toggleStrike().run()}
          class={editor.isActive("strike") ? "is-active" : ""}
        >
          <img
            src={icons.strikeIcon}
            alt="Bold"
            class="w-6 h-6 bg-white hover:bg-slate-200"
          />
        </button>
        <button
          on:click={() => editor.chain().focus().toggleCode().run()}
          disabled={!editor.can().chain().focus().toggleCode().run()}
          class={editor.isActive("code") ? "is-active" : ""}
        >
          <img
            src={icons.codeIcon}
            alt="Bold"
            class="w-6 h-6 bg-white hover:bg-slate-200"
          />
        </button>
        <button
          on:click={() =>
            editor.chain().focus().unsetAllMarks().clearNodes().run()}
        >
          <img
            src={icons.clearMarksIcon}
            alt="Bold"
            class="w-6 h-6 bg-white hover:bg-slate-200"
          />
        </button>
        <button
          on:click={() => editor.chain().focus().toggleBulletList().run()}
          class={editor.isActive("bulletList") ? "is-active" : ""}
        >
          <img
            src={icons.bulletIcon}
            alt="Bold"
            class="w-6 h-6 bg-white hover:bg-slate-200"
          />
        </button>
        <button
          on:click={() => editor.chain().focus().toggleOrderedList().run()}
          class={editor.isActive("orderedList") ? "is-active" : ""}
        >
          <img
            src={icons.orderListIcon}
            alt="Bold"
            class="w-6 h-6 bg-white hover:bg-slate-200"
          />
        </button>
        <button
          on:click={() => editor.chain().focus().toggleCodeBlock().run()}
          class={editor.isActive("codeBlock") ? "is-active" : ""}
        >
          <img
            src={icons.codeBlockIcon}
            alt="Bold"
            class="w-6 h-6 bg-white hover:bg-slate-200"
          />
        </button>
        <button
          on:click={() => editor.chain().focus().toggleBlockquote().run()}
          class={editor.isActive("blockquote") ? "is-active" : ""}
        >
          <img
            src={icons.quoteIcon}
            alt="Bold"
            class="w-6 h-6 bg-white hover:bg-slate-200"
          />
        </button>
        <Button color="none" class="p-0">
          <img
            src={icons.h1Icon}
            alt="Bold"
            class="w-6 h-6 bg-white hover:bg-slate-200"
          />
        </Button>
        <Dropdown>
          <button
            on:click={() =>
              editor.chain().focus().toggleHeading({ level: 1 }).run()}
            class={editor.isActive("heading", { level: 1 }) ? "is-active" : ""}
          >
            <img
              src={icons.h1Icon}
              alt="Bold"
              class="w-6 h-6 bg-white hover:bg-slate-200"
            />
          </button>
          <button
            on:click={() =>
              editor.chain().focus().toggleHeading({ level: 2 }).run()}
            class={editor.isActive("heading", { level: 2 }) ? "is-active" : ""}
          >
            <img
              src={icons.h2Icon}
              alt="Bold"
              class="w-6 h-6 bg-white hover:bg-slate-200"
            />
          </button>
          <button
            on:click={() =>
              editor.chain().focus().toggleHeading({ level: 3 }).run()}
            class={editor.isActive("heading", { level: 3 }) ? "is-active" : ""}
          >
            <img
              src={icons.h3Icon}
              alt="Bold"
              class="w-6 h-6 bg-white hover:bg-slate-200"
            />
          </button>
          <button
            on:click={() =>
              editor.chain().focus().toggleHeading({ level: 4 }).run()}
            class={editor.isActive("heading", { level: 4 }) ? "is-active" : ""}
          >
            <img
              src={icons.h4Icon}
              alt="Bold"
              class="w-6 h-6 bg-white hover:bg-slate-200"
            />
          </button>
          <button
            on:click={() =>
              editor.chain().focus().toggleHeading({ level: 5 }).run()}
            class={editor.isActive("heading", { level: 5 }) ? "is-active" : ""}
          >
            <img
              src={icons.h5Icon}
              alt="Bold"
              class="w-6 h-6 bg-white hover:bg-slate-200"
            />
          </button>
          <button
            on:click={() =>
              editor.chain().focus().toggleHeading({ level: 6 }).run()}
            class={editor.isActive("heading", { level: 6 }) ? "is-active" : ""}
          >
            <img
              src={icons.h6Icon}
              alt="Bold"
              class="w-6 h-6 bg-white hover:bg-slate-200"
            />
          </button>
        </Dropdown>
        <Button color="none" class="p-0">
          <img
            src={icons.justifyIcon}
            alt="Bold"
            class="w-6 h-6 bg-white hover:bg-slate-200"
          />
        </Button>
        <Dropdown>
          <button
            on:click={() => editor.chain().focus().setTextAlign("left").run()}
            class={editor.isActive({ textAlign: "left" }) ? "is-active" : ""}
          >
            <img
              src={icons.leftAlignIcon}
              alt="Bold"
              class="w-6 h-6 bg-white hover:bg-slate-200"
            />
          </button>
          <button
            on:click={() => editor.chain().focus().setTextAlign("center").run()}
            class={editor.isActive({ textAlign: "center" }) ? "is-active" : ""}
          >
            <img
              src={icons.centerAlignIcon}
              alt="Bold"
              class="w-6 h-6 bg-white hover:bg-slate-200"
            />
          </button>
          <button
            on:click={() => editor.chain().focus().setTextAlign("right").run()}
            class={editor.isActive({ textAlign: "right" }) ? "is-active" : ""}
          >
            <img
              src={icons.rightAlignIcon}
              alt="Bold"
              class="w-6 h-6 bg-white hover:bg-slate-200"
            />
          </button>
          <button
            on:click={() =>
              editor.chain().focus().setTextAlign("justify").run()}
            class={editor.isActive({ textAlign: "justify" }) ? "is-active" : ""}
          >
            <img
              src={icons.justifyIcon}
              alt="Bold"
              class="w-6 h-6 bg-white hover:bg-slate-200"
            />
          </button>
          <button
            on:click={() => editor.chain().focus().unsetTextAlign().run()}
          >
            <img
              src={icons.unsetAlignIcon}
              alt="Bold"
              class="w-6 h-6 bg-white hover:bg-slate-200"
            />
          </button>
        </Dropdown>
        <button
          on:click={() => editor.chain().focus().setHorizontalRule().run()}
        >
          <img
            src={icons.horizontalRuleIcon}
            alt="Bold"
            class="w-6 h-6 bg-white hover:bg-slate-200"
          />
        </button>
        <button on:click={() => editor.chain().focus().setHardBreak().run()}>
          <img
            src={icons.hardBreakIcon}
            alt="Bold"
            class="w-6 h-6 bg-white hover:bg-slate-200"
          />
        </button>
        <button
          on:click={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().chain().focus().undo().run()}
        >
          <img
            src={icons.undoIcon}
            alt="Bold"
            class="w-6 h-6 bg-white hover:bg-slate-200"
          />
        </button>
        <button
          on:click={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().chain().focus().redo().run()}
        >
          <img
            src={icons.redoIcon}
            alt="Bold"
            class="w-6 h-6 bg-white hover:bg-slate-200"
          />
        </button>
        <Button color="none" class="p-0">
          <img
            src={icons.imageIcon}
            alt="Bold"
            class="w-6 h-6 bg-white hover:bg-slate-200"
          />
        </Button>
        <Dropdown>
          <button on:click={addImage}>
            <img
              src={icons.imageIcon}
              alt="Bold"
              class="w-6 h-6 bg-white hover:bg-slate-200"
            /></button
          >
          <button
            on:click={() => alignImage("float-left")}
            class={editor.isActive({ textAlign: "left" }) ? "is-active" : ""}
          >
            <img
              src={icons.leftAlignIcon}
              alt="Bold"
              class="w-6 h-6 bg-white hover:bg-slate-200"
            />
          </button>
          <button
            on:click={() => alignImage("float-right")}
            class={editor.isActive({ textAlign: "left" }) ? "is-active" : ""}
          >
            <img
              src={icons.rightAlignIcon}
              alt="Bold"
              class="w-6 h-6 bg-white hover:bg-slate-200"
            />
          </button>
          <button
            on:click={() => alignImage("mx-auto")}
            class={editor.isActive({ textAlign: "left" }) ? "is-active" : ""}
          >
            <img
              src={icons.centerAlignIcon}
              alt="Bold"
              class="w-6 h-6 bg-white hover:bg-slate-200"
            />
          </button>
        </Dropdown>
      </div>
    {/if}
  </div>
  <div
    class=" flex justify-left gap-2 w-full md:w-5/6 xl:max-w-screen-xl mx-auto bg-white"
  >
    {#if ToC}
      <svelte:component
        this={ToC}
        {editor}
        items={editor.storage.tableOfContent.content}
      />
    {/if}
  </div>
  <div
    class="flex justify-center bg-white w-full md:w-5/6 xl:max-w-screen-xl mx-auto min-h-screen dark:bg-black dark:text-white focus:border-collapse"
    bind:this={element}
  />
</div>

{#if editor}
  <form action="?/getHTML" method="POST">
    <Input type="hidden" name="content" value={editor.getHTML()} />
    <Button type="submit">save</Button>
  </form>
  console.log({editor.getHTML()});
{/if}

<style>
  /* If you want to add a specific border color for active buttons */
  .is-active {
    border-color: #007bff; /* Blue border for active buttons */
  }
</style>
