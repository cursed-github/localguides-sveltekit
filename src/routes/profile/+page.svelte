<!-- src/routes/account/+page.svelte -->
<script lang="ts">
  import { enhance } from "$app/forms";
  import { Card, Avatar } from "flowbite-svelte";

  export let data;
</script>

<div class="m-6 flex flex-wrap justify-center md:justify-normal">
  <Card class="flex flex-col w-80">
    <div class="flex flex-row justify-start">
      <Avatar size="lg" />
      <div class="flex flex-col m-3 justify-center">
        <h4>David DavidOff</h4>
        <h6 class="opacity-75">Hong Kong</h6>
      </div>
    </div>
    <div class="my-2">
      <h5 class="opacity-75">Your Introductin to world</h5>
      <a href="google.com" class="opacity-75"><h5>Your Social</h5></a>
      <a href="google.com" class="opacity-75"><h5>testicular@gmail.com</h5></a>
    </div>
  </Card>
</div>
