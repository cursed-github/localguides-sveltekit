<script>
  import { Gallery } from "flowbite-svelte";

    export let data;

    // const photos = data.photos?.map((photo)=>({
    //     src:photo.urls.regular
    // }))
    // console.log(photos)
    // let chunks = [];
    // for (let i = 0; i < photos.length; i += 4) {
    //     chunks.push(photos.slice(i, i + 4));
    // }
    // console.log(chunks);
    //import Masonry from 'masonry-layout';

</script>

<body class="bg-gradient-to-r from-white to-cyan-200 min-h-screen">
    <div class="flex justify-center mx-auto md:w-1/2 md:h-1/2">
        <div class="grid  grid-cols-4 gap-0">
            {#each data.photos as photo}
                        <img src={photo.urls.regular} class='place-self-stretch'alt="">
            {/each}
        </div>
    </div>


</body>