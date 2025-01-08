import { getPrisma } from "@/getPrisma";

export default async function getManyPost() {
  const posts = await getPrisma().post.findMany({
    include: { author: true },
  });
  return posts;
}
