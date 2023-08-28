import { supabase } from "$lib/supabaseClient";

// src/routes/+page.server.ts
import { redirect } from "@sveltejs/kit";

// @ts-ignore
export const load = async ({ url, locals: { getSession } }) => {
  const session = await getSession();

  // if the user is already logged in return them to the account page
  if (session) {
    throw redirect(303, "/account");
  }

  return { url: url.origin };
};

export const actions = {
  // @ts-ignore
  // @ts-ignore
  register: async ({ locals, request }) => {
    const data1 = await request.formData();
    const email = data1.get("email");
    const password = data1.get("password");
    const phone = data1.get("phone");
    console.log(phone);

    // @ts-ignore
    let { data, error: err } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          first_name: data1.get("name"),
          phone,
        },
      },
    });

    if (err) {
      console.log(err);
    }

    return {
      message:
        "Please check your email for a magic link to log into the website.",
      success: true,
    };
  },
};
