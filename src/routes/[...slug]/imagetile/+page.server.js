import { upsplash } from "$lib/upsplashClient.js";
import { redirect } from "@sveltejs/kit";

export const load = async ({ locals, params }) => {
  const user = await locals.getSession();
  if (user == null) throw redirect(303, "/");
  const userId = user?.user?.id;
  let { data, error } = await locals.supabase
    .from("profiles")
    .select("*")
    .eq("id", userId);

  if (data[0].isAdmin != true) throw redirect(303, "/");

  const paramArr = params.slug.split("/");

  const result = await upsplash.search.getPhotos({
    query: paramArr[0],
    per_page: "16",
    orientation: "landscape",
  });

  return {
    photos: result.response?.results,
  };
};

export const actions = {
  upload: async ({ locals, request, params, fetch }) => {
    const data = await request.formData();
    const image_url = data.get("url");
    const image_author = data.get("author");
    const image_author_link = data.get("author_link");
    fetch(data.get("download_link"));
    const place_id = params.slug.split("/")[1];
    const { return_data, error: err } = await locals.supabase
      .from("places")
      .insert({
        place_id,
        image_url,
        image_author,
        image_author_link,
      });

    if (err == null) throw redirect(303, "/");
  },
};
