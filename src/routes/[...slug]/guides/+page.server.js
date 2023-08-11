export const load = async ({ locals, params }) => {
  const user = await locals.getSession();
  if (user == null) throw redirect(303, "/");
  const userId = user?.user?.id;
  // let { data, error } = await locals.supabase
  //   .from("profiles")
  //   .select("*")
  //   .eq("id", userId);

  const paramArr = params.slug.split("/");

  let { data, error: err } = await locals.supabase
    .from("places_guides")
    .select("htmltext")
    .eq("id", paramArr[2]);

  console.log(data);
  return {
    htmlTextPara: data[0],
  };
};
