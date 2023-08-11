import { upsplash } from "$lib/upsplashClient.js";
import { redirect } from "@sveltejs/kit";

export const load = async ({ locals, params }) => {
  const paramArr = params.slug.split("/");
  const result = await upsplash.search.getPhotos({
    query: paramArr[0],
    per_page: "8",
    orientation: "landscape",
  });

  let { data, error: err } = await locals.supabase
    .from("places_guides")
    .select("*")
    .eq("place_id", paramArr[1]);

  console.log(data);

  return {
    photos: result.response?.results,
    city: paramArr[0],
    country: "",
    guides: data,
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
