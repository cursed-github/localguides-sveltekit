export const actions = {
  getHTML: async ({ locals, request, params, fetch }) => {
    const data = await request.formData();
    const user = await locals.getSession();
    if (user == null) throw redirect(303, "/");
    const author_id = user?.user?.id;

    const htmltext = data.get("content");
    const place_id = params.slug.split("/")[1];
    //const author_id = "fhjk";
    const title = "dfs";
    const paragraph = "xyz";
    const hero_image = "xyz";

    const { return_data, error: err } = await locals.supabase
      .from("places_guides")
      .insert([
        {
          htmltext,
          place_id,
          author_id,
          title,
          paragraph,
          hero_image,
        },
      ]);
  },
};
