<script>
  import {
    Input,
    Label,
    Helper,
    Checkbox,
    Button,
    A,
    Card,
    DarkMode,
    Dropdown,
    DropdownItem,
    Chevron,
    Search,
  } from "flowbite-svelte";
  import logo from "$lib/logo.png";
  import { enhance } from "$app/forms";
  export let data;
</script>

<body class="">
  <div class="flex justify-center h-screen items-center">
    <Card class="dark:bg-gray-800">
      <form method="POST" action="?/register" use:enhance>
        <div class="flex flex-col">
          <img
            src={logo}
            class="h-24 flex justify-center ml-6"
            alt="Flowbite Logo"
          />
          <div class="mb-2">
            <Label for="first_name" class="mb-2">Full Name</Label>
            <Input type="text" id="first_name" name="name" required />
          </div>
          <div class="mb-2">
            <Label for="phone" class="mb-2">Phone number</Label>
            <div class="flex items-center">
              <div class="relative">
                <Button class="w-18 px-2 rounded-r-none h-10"
                  ><Chevron>+01</Chevron></Button
                >
                <Dropdown class="overflow-y-auto px-3 pb-3 text-sm h-44">
                  <div slot="header" class="p-3">
                    <Search size="md" />
                  </div>
                  <DropdownItem class="flex justify-center items-center"
                    >+01</DropdownItem
                  >
                  <DropdownItem class="flex justify-center items-center"
                    >+02</DropdownItem
                  >
                  <DropdownItem class="flex justify-center items-center"
                    >+003</DropdownItem
                  >
                  <DropdownItem class="flex justify-center items-center"
                    >+912</DropdownItem
                  >
                </Dropdown>
              </div>
              <Input
                class="rounded-l-none h-10"
                type="tel"
                id="phone"
                name="phone"
                required
              />
            </div>
          </div>
          <div class="mb-2">
            <Label for="email" class="mb-2">Email address</Label>
            <Input type="email" id="email" name="email" required />
          </div>
          <div class="mb-2">
            <Label for="password" class="mb-2">Password</Label>
            <Input type="password" id="password" name="password" required />
          </div>
          <div class="mb-2">
            <Label for="confirm_password" class="mb-2">Confirm password</Label>
            <Input type="password" id="confirm_password" required />
          </div>
          <Checkbox class="mb-2 space-x-1" required
            >I agree with the <A
              href="/"
              class="text-primary-700 dark:text-primary-600 hover:underline"
              >terms and conditions</A
            >.</Checkbox
          >
          <Button type="submit">Sign Up</Button>
        </div>
      </form>

      <div class="text-gray-500 flex items-center justify-center my-2">or</div>
      <div class="px-6 sm:px-0 max-w-sm">
        <button
          type="button"
          class="text-white w-full bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
          ><svg
            class="mr-2 -ml-1 w-4 h-4"
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="google"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 488 512"
            ><path
              fill="currentColor"
              d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
            /></svg
          >Sign up with Google
          <div /></button
        >
      </div>
    </Card>
  </div>
</body>
