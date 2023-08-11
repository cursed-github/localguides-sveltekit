<script>
    import { Card } from "flowbite-svelte";
    import logo from '$lib/shark.png';
    import i1 from '$lib/stock/1.jpg';
  import { upsplash } from "$lib/upsplashClient.js";
    export let data;
    //console.log(data.places)
    const arr = Array(12).fill(0);
</script>


<body data-sveltekit-preload-data="tap">
    <div class="pt-10 flex min-h-screen justify-center mx-au">
        <div class=" grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3  2xl:grid-cols-4 auto-rows-max justify-stretch">
            
            {#each data.places as arra}

            <button class='flex flex-col h-full w-full'>
                <Card href='/{arra.city}/{arra.id}' class='h-full w-full dark:bg-none'  padding='none'>
                    <div class="relative group">
                        <img src={arra.hero_image} alt="photo of {arra.city}" class='h-56 w-full rounded-t-lg'>
                        <div class="absolute bottom-0 right-1 text-white text-xsm opacity-0 group-hover:opacity-80 "> Upsplash | {arra.hero_image_author}</div>
                    </div>
                    <div class="p-2 pb-2">
                        <h5 class=" abosulte bottom-0 mb-1 text-2xl  tracking-tight text-gray-900 dark:text-white font-fancy">Local Guides From {arra.city}, {arra.country}</h5>
                    </div>
                    <p class="mx-3 mb-3  text-gray-700 dark:text-gray-400 leading-tight font-fancy">
                        <a href={arra.hero_image_author_link_}>{arra.hero_text}</a>
                    </p>
                </Card>
            </button>
            {/each}
        </div>
        <div class="">
            <img
            src={logo}
            id='logo'
            class="h-24 absolute bottom-0 right-0 mr-4 mb-4"
            alt="Flowbite Logo"
            />
            <img
            src={logo}
            class="h-24 absolute bottom-0 right-0 mr-7 mb-12"
            alt="Flowbite Logo"
            />
            <img
            src={logo}
            class="h-24 absolute bottom-0 right-0 mr-10 -mb-4"
            alt="Flowbite Logo"
            />
        </div>
        
    </div>
</body>