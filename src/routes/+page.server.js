import { fail, redirect } from "@sveltejs/kit";
import { SupabaseClient } from "@supabase/supabase-js";

export const load = async ({ locals: { supabase, getSession } }) => {
  let { data: places, error } = await supabase
    .from("places")
    .select("*")
    .order("popularity", { ascending: false });
  return { places };
};
