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
    per_page: "30",
    orientation: "landscape",
    page: 1,
  });

  return {
    photos: result.response?.results,
  };
};

export const actions = {
  upload: async ({ locals, request, params, fetch }) => {
    const data = await request.formData();
    const hero_image = data.get("url");
    const hero_image_author = data.get("author");
    const hero_image_author_link = data.get("author_link");
    console.log(data.get("download_link"));
    const returnd = await upsplash.photos.trackDownload({
      downloadLocation: data.get("download_link"),
    });
    console.log(returnd);

    const id = params.slug.split("/")[1];
    const { return_data, error: err } = await locals.supabase
      .from("places")
      .update({
        hero_image,
        hero_image_author,
        hero_image_author_link,
      })
      .eq("id", id);
    if (err == null) throw redirect(303, "/");
  },
};
