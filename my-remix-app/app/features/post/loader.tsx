import { fetchPosts } from "~/features/post/services";
import createLoader from "~/utils/createLoader";

export const indexLoader = createLoader(async ({ db }) => {
  const posts = await fetchPosts(db)();
  return { posts };
});
