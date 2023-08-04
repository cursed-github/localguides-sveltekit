<script>
    import "../app.css";
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Button, Input,DarkMode,Search } from 'flowbite-svelte';
    import logo from '$lib/logo.png';
    import { invalidate, invalidateAll } from '$app/navigation'
	import { onMount } from 'svelte'
    import { enhance } from "$app/forms";

	export let data

	let { supabase, session } = data
	$: ({ supabase, session } = data)

	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange((event, _session) => {
			if (_session?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		})

		return () => data.subscription.unsubscribe()
	})
</script>


<div class=" bg-gradient-to-r from-white to-teal-200 min-h-screen dark:bg-gradient-to-b dark:from-blue-950 dark:via-emerald-900 dark:to-blue-950 dark:bg-fixed" >
    <Navbar let:hidden let:toggle navClass='border-b-none  bg-gradient-to-r from-white to-teal-200 dark:bg-none dark:bg-blue-950 border-0' navDivClass='mx-auto flex flex-wrap md:flex-nowrap justify-between items-center'>
        <div class="flex my-2 items-center">
            <NavBrand class="" href="/">
                <img
                src={logo}
                class="h-12"
                alt="Flowbite Logo"
                />
            </NavBrand>
            <div class="flex items-center">
                <Button color="none" data-collapse-toggle="mobile-menu-3" aria-cogit ntrols="mobile-menu-3" aria-expanded="false" class="md:hidden text-gray-500 dark:text-gray-200 hover:bg-gray-100 dark:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1" >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 dark:text-white"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>
                </Button>
                <div class="hidden relative md:block">
                    <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 dark:text-white"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>
                </div>
                <Input id="search-navbar" class="pl-10 dark:bg-gray-100 dark:text-gray-800" placeholder="Search..." />
    
            </div>
        </div>
    </div>
    <NavHamburger btnClass='mr-5 md:hidden' on:click={toggle} />
        <NavUl {hidden} class="order-2" ulClass='flex flex-col p-4 mt-4 md:flex-row md:items-center md:space-x-8 md:mt-0 md:text-sm md:font-medium' >
            <NavLi href="/" active={true}>Home</NavLi>
            {#if session==null}
                <NavLi href="/login">Login</NavLi>
            {/if}
            <NavLi href="/pricing">Pricing</NavLi>
            <NavLi href="/pricing">Pricing</NavLi>
            <NavLi href="/pricing">Pricing</NavLi>
            <DarkMode class='!ml-4'/>
            {#if session!=null}
                <form method="POST" action="/login?/logout" use:enhance >
                <Button type="submit">Logout</Button>
                </form>
            {/if}
        </NavUl>
    </Navbar>
    <slot />
</div>