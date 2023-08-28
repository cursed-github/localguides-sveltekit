<script>
  import { Gallery, Card, Button } from "flowbite-svelte";
  import { page } from "$app/stores";
  const hrefeditor = $page.url + "/editor";

  export let data;
</script>

<body class="relative max-w-screen-xl mx-auto">
  <div class="flex justify-center mx-auto md:w-full relative">
    <div class="grid grid-cols-4 gap-0">
      {#each data.photos as photo}
        <img
          src={photo.urls.regular}
          class="place-self-stretch brightness-75"
          alt=""
        />
      {/each}
    </div>

    <h1
      class="absolute bottom-0 flex justify-center items-center text-white text-9xl font-fancy"
    >
      {data.city}
    </h1>
  </div>

  <div class="flex justify-center my-9">
    <div
      class="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 auto-rows-max justify-stretch"
    >
      {#each data.guides as guide}
        <Card padding="none" href={$page.url + "/" + guide.id + "/guides"}>
          <div class="relative group">
            <img
              src={data.photos[0].urls.regular}
              alt="photo of {data.city}"
              class="h-56 w-full rounded-t-lg"
            />
          </div>
          <div class="p-2 pb-2">
            <h5
              class=" abosulte bottom-0 mb-1 text-2xl tracking-tight text-gray-900 dark:text-white font-fancy"
            >
              Local Guides From {data.city}, {data.country}
            </h5>
            <p class="my-2">Emily has been living in Paris for 5 years</p>
          </div>
          <Button class="mx-4 mb-4">
            Read more <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5 ml-2"
              ><path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              /></svg
            >
          </Button>
        </Card>
      {/each}
    </div>
  </div>

  <Button href={hrefeditor} class="fixed bottom-4 right-4">
    Write your own guide</Button
  >
</body>
