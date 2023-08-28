import { supabase } from "$lib/supabaseClient";
import { redirect } from "@sveltejs/kit";
export const actions = {
  // @ts-ignore
  // @ts-ignore
  login: async ({ locals, request }) => {
    const data1 = await request.formData();
    const email = data1.get("email");
    const password = data1.get("password");
    const phone = data1.get("phone");

    // @ts-ignore
    let { data, erro: err } = await locals.supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (err) console.log(err);
    console.log(data);
    throw redirect(303, "/account");
  },

  logout: async ({ locals, request }) => {
    let { error } = await locals.supabase.auth.signOut();
    throw redirect(303, "/login");
  },
  glogin: async ({ locals, request }) => {
    const provider = "google";
    const { data, error: err } = await locals.supabase.auth.signInWithOAuth({
      provider,
    });
    console.log(data, err);
    throw redirect(303, data.url);
  },
};
