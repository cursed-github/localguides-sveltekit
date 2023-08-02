import { c as create_ssr_component, v as validate_component, a as add_attribute } from "../../../chunks/ssr.js";
import { l as logo, I as Input, B as Button } from "../../../chunks/logo.js";
import { C as Card } from "../../../chunks/Card.js";
import "../../../chunks/Indicator.svelte_svelte_type_style_lang.js";
import { L as Label } from "../../../chunks/Label.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<body class="bg-gradient-to-b from-white to-teal-400 dark:bg-gradient-to-t dark:from-blue-600 dark:to-gray-900 transition-colors duration-1000 antialiased"><div class="flex justify-center h-screen items-center">${validate_component(Card, "Card").$$render(
    $$result,
    {
      color: "none",
      class: "border-0 bg-gradient-to-b from-white to-orange-300 "
    },
    {},
    {
      default: () => {
        return `<form method="POST" action="?/login"><div class="flex flex-col"><img${add_attribute("src", logo, 0)} class="h-24 flex justify-center ml-6" alt="Flowbite Logo"> <div class="mb-2">${validate_component(Label, "Label").$$render($$result, { for: "email", class: "mb-2" }, {}, {
          default: () => {
            return `Email address`;
          }
        })} ${validate_component(Input, "Input").$$render(
          $$result,
          {
            type: "email",
            id: "email",
            name: "email",
            required: true
          },
          {},
          {}
        )}</div> <div class="mb-6">${validate_component(Label, "Label").$$render($$result, { for: "password", class: "mb-2" }, {}, {
          default: () => {
            return `Password`;
          }
        })} ${validate_component(Input, "Input").$$render(
          $$result,
          {
            type: "password",
            id: "password",
            name: "password",
            required: true
          },
          {},
          {}
        )}</div> ${validate_component(Button, "Button").$$render($$result, { type: "submit" }, {}, {
          default: () => {
            return `Login`;
          }
        })} <div class="text-gray-500 flex items-center justify-center my-2" data-svelte-h="svelte-plflzz">or</div> <div class="px-6 sm:px-0 max-w-sm" data-svelte-h="svelte-1gsz2pl"><form action="?/glogin" method="POST"><button type="submit" class="text-white w-full bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between dark:focus:ring-[#4285F4]/55 mr-2 mb-2"><svg class="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>Login with Google<div></div></button></form></div></div></form>`;
      }
    }
  )}</div></body>`;
});
export {
  Page as default
};
