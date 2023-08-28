import { redirect } from "@sveltejs/kit";

export async function GET({ locals, request, params, fetch }) {
  let userid = await locals.getSession();
  userid = userid.user.id;

  let guide_id_str = params.slug.split("/")[2];
  let guide_id = parseInt(guide_id_str, 10);
  const { data: supabase_data, error: err } = await locals.supabase.rpc(
    "append_guides_bought",
    {
      guide_id,
      userid,
    }
  );

  if (err) {
    console.log(err);
    throw new Error("Failed to update guides_bought");
  }

  let segments = params.slug + "/guides";

  return new Response(null, {
    status: 302,
    headers: {
      location: `/${segments}`,
    },
  });
}
