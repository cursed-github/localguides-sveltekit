import { c as create_ssr_component, i as each, a as add_attribute, v as validate_component } from "../../chunks/ssr.js";
import { C as Card } from "../../chunks/Card.js";
import "../../chunks/Indicator.svelte_svelte_type_style_lang.js";
const logo = "/_app/immutable/assets/shark.19d94fa6.png";
const i1 = "/_app/immutable/assets/1.bb0c24de.jpg";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const arr = Array(12).fill(0);
  return `<body class=""><div class="pt-10 flex min-h-screen justify-center mx-auto bg-gradient-to-b from-white to-teal-300 dark:bg-gradient-to-b dark:from-purple-900 dark:to-pink-900"><div class="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">${each(arr, (arra) => {
    return `<button>${validate_component(Card, "Card").$$render($$result, { href: "/account", img: i1 }, {}, {
      default: () => {
        return `<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white" data-svelte-h="svelte-72uz71">Local Guides From Amalfi Coast Italy</h5> <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight" data-svelte-h="svelte-t81s7g">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p> `;
      }
    })} </button>`;
  })}</div> <div class="" data-svelte-h="svelte-h0tocl"><img${add_attribute("src", logo, 0)} id="logo" class="h-24 absolute bottom-0 right-0 mr-4 mb-4" alt="Flowbite Logo"> <img${add_attribute("src", logo, 0)} class="h-24 absolute bottom-0 right-0 mr-7 mb-12" alt="Flowbite Logo"> <img${add_attribute("src", logo, 0)} class="h-24 absolute bottom-0 right-0 mr-10 -mb-4" alt="Flowbite Logo"></div></div></body>`;
});
export {
  Page as default
};
