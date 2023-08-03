<script>
    import { Card } from "flowbite-svelte";
    import logo from '$lib/shark.png';
    import i1 from '$lib/stock/1.jpg';
    export let data;
    //console.log(data.places)
    const arr = Array(12).fill(0);
</script>


<body class="">
    <div class="pt-10 flex min-h-screen justify-center mx-auto bg-gradient-to-r from-white to-teal-200 dark:bg-gradient-to-b dark:h-screen dark:from-blue-950 dark:via-emerald-600 dark:to-blue-950">
        <div class=" grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            
            {#each data.places as arra}

            <button>
                <Card href='/account' img={i1} >
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Local Guides From {arra.city}, {arra.country}</h5>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
                    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
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