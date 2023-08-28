<script>
  //   import "$lib/style1.css";
  import { Modal, Button } from "flowbite-svelte";
  import { onMount } from "svelte";
  let defaultModal = false;
  export let data;

  onMount(() => {
    setTimeout(() => {
      if (data.bought == false) {
        defaultModal = true;
      }
    }, 1000); // 5000 milliseconds is 5 seconds
  });
</script>

<Modal title="Terms of Service" bind:open={defaultModal}>
  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
    Buy this guide and support local guides and charities
  </p>

  <svelte:fragment slot="footer">
    <form action="?/buywithstripe" method="POST">
      <Button type="submit">BUY</Button>
      <Button color="alternative" href="/">Decline</Button>
    </form>
  </svelte:fragment>
</Modal>

<div class="flex justify-center">
  <div
    class="w-full md:w-5/6 mx-auto xl:max-w-screen-xl font-fancy bg-slate-50 border-2 shadow-xl p-8 dark:bg-slate-800 dark:text-white text-xl"
  >
    <div class="html-wrapper">{@html data.htmlTextPara};</div>
  </div>
</div>

<style>
  @import "$lib/editordisplaystyle.css";
</style>
