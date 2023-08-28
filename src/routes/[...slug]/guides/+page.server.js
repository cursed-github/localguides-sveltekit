import { redirect } from "@sveltejs/kit";
import Stripe from "stripe";
import { PRIVATE_STRIPE_SECRET_KEY } from "$env/static/private";

export const load = async ({ locals, params }) => {
  const user = await getSession(locals);
  if (!user) throw redirect(303, "/");

  const userId = user.user.id;
  const userProfile = await fetchUserProfile(locals, userId);
  const guideDetails = await fetchGuideDetails(locals, params.slug);

  const bought = userHasBoughtGuide(userProfile.guides_bought, guideDetails.id);

  return {
    htmlTextPara: guideDetails.htmltext,
    bought,
  };
};

const getSession = async (locals) => {
  return await locals.getSession();
};

const fetchUserProfile = async (locals, userId) => {
  const { data, error } = await locals.supabase
    .from("profiles")
    .select("*")
    .eq("id", userId);

  if (error || !data || data.length === 0) {
    throw new Error("Failed to fetch user profile");
  }

  return data[0];
};

const fetchGuideDetails = async (locals, slug) => {
  const guideId = slug.split("/")[2];

  const { data, error } = await locals.supabase
    .from("places_guides")
    .select("*")
    .eq("id", guideId);

  if (error || !data || data.length === 0) {
    throw new Error("Failed to fetch guide details");
  }

  return data[0];
};

const userHasBoughtGuide = (guides_bought, guideId) => {
  return guides_bought.includes(guideId);
};

/** @type {import('./$types').Actions} */
export const actions = {
  buywithstripe: async ({ locals, request, params, fetch }) => {
    const stripe = new Stripe(PRIVATE_STRIPE_SECRET_KEY, {
      apiVersion: "2023-08-16",
    });
    const session = await stripe.checkout.sessions.create({
      billing_address_collection: "auto",
      line_items: [
        {
          // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
          price: "price_1NjywySHniTOhyE6dU6fdplO",
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `http://localhost:5173/${params.slug}/guides/buy`,
      cancel_url: "http://localhost:5173/",
    });

    throw redirect(303, session.url);
  },
};
