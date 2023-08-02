import { s as supabase } from "../../../chunks/supabaseClient.js";
import { r as redirect } from "../../../chunks/index.js";
const load = async ({ url, locals: { getSession } }) => {
  const session = await getSession();
  if (session) {
    throw redirect(303, "/account");
  }
  return { url: url.origin };
};
const actions = {
  // @ts-ignore
  // @ts-ignore
  register: async ({ locals, request }) => {
    const data1 = await request.formData();
    const email = data1.get("email");
    const password = data1.get("password");
    const phone = data1.get("phone");
    console.log(phone);
    let { data, error } = await supabase.auth.signUp({
      email,
      phone,
      password
    });
    if (error) {
      return fail(500, {
        message: "Server error. Try again later.",
        success: false,
        email
      });
    }
    return {
      message: "Please check your email for a magic link to log into the website.",
      success: true
    };
  }
};
export {
  actions,
  load
};
