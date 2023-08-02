import "../../../chunks/supabaseClient.js";
import { r as redirect } from "../../../chunks/index.js";
const actions = {
  // @ts-ignore
  // @ts-ignore
  login: async ({ locals, request }) => {
    const data1 = await request.formData();
    const email = data1.get("email");
    const password = data1.get("password");
    data1.get("phone");
    await locals.supabase.auth.signInWithPassword({
      email,
      password
    });
    console.log("from login page server", locals.getSession);
    throw redirect(303, "/account");
  },
  logout: async ({ locals, request }) => {
    console.log("logout completed");
    await locals.supabase.auth.signOut();
    throw redirect(303, "/login");
  },
  glogin: async ({ locals, request }) => {
    const provider = "google";
    const { data, error: err } = await locals.supabase.auth.signInWithOAuth({
      provider
    });
    throw redirect(303, data.url);
  }
};
export {
  actions
};
