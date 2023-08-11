<script>
  import { TextSelection } from "@tiptap/pm/state";

  export let items = [];
  export let editor;

  const onItemClick = (e, id) => {
    e.preventDefault();

    if (editor) {
      const element = editor.view.dom.querySelector(`[data-toc-id="${id}"`);
      const pos = editor.view.posAtDOM(element, 0);

      // set focus
      const tr = editor.view.state.tr;
      tr.setSelection(new TextSelection(tr.doc.resolve(pos)));
      editor.view.dispatch(tr);
      editor.view.focus();

      if (history.pushState) {
        history.pushState(null, null, `#${id}`);
      }

      window.scrollTo({
        top: element.getBoundingClientRect().top + window.scrollY,
        behavior: "smooth",
      });
    }
  };
</script>

{#if items.length === 0}
  <div class="toc--empty_state">
    <p>Start editing your document to see the outline.</p>
  </div>
{:else}
  <div class="toc--list">
    {#each items as item, i}
      <div
        class={`toc--item toc--item--level_${item.level}`}
        style={`--level: ${item.level}`}
      >
        <a
          href={`#${item.id}`}
          on:click|preventDefault={(e) => onItemClick(e, item.id)}
          style={`background-color: ${
            item.isActive ? "rgba(0, 0, 0, .05)" : "transparent"
          };  color: ${
            item.isScrolledOver && !item.isActive ? "#888" : "#000"
          }`}
        >
          {item.itemIndex}. {item.textContent}
        </a>
      </div>
    {/each}
  </div>
{/if}
