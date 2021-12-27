import sanityClient from "@sanity/client";
import imageUrlBuidler from "@sanity/image-url";

export const client = sanityClient({
	projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
	dataset: "production",
	apiVersion: "2021-12-27",
	useCdn: true,
	token: process.env.REACT_APP_SANITY_TOKEN,
});

const builder = imageUrlBuidler(client);

export const urlFor = (source) => {
	builder.image(source);
};
