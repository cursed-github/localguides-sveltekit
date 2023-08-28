import { fail, redirect } from "@sveltejs/kit";

export const load = async ({ locals: { supabase, getSession } }) => {
  const session = await getSession();
  if (!session) {
    throw redirect(303, "/");
  }
  const {
    data: { user },
  } = await supabase.auth.getUser();

  let { data: profiles, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", session.user.id);
};
