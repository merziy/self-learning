import SanityClient from "@sanity/client";
import { ImageUrlBuilder } from "@sanity/image-url";

export const sanity = SanityClient({
  projectId: "wtcoq4n6",
  dataset: "production",
  useCdn: true,
});

export const imageUrlBuilder = ImageUrlBuilder(sanity);
