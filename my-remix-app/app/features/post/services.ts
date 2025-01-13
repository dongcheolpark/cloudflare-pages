import createService from "~/utils/createService";

export const fetchPosts = createService(async (db) => {
  return await db.post.findMany();
});
