import createService from "~/utils/createService";

export const fetchPosts = createService((db) => {
  return db.post.findMany();
});
