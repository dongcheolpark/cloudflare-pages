import createAction from "~/utils/createAction";
import { object, string } from "zod";
import { json, redirect } from "@remix-run/cloudflare";

const postSchema = object({
  title: string().max(20, "제목은 20자를 넘을 수 없습니다."),
  content: string(),
});

export const insertAction = createAction(async ({ db, request }) => {
  const formdata = await request.formData();
  const { data, error } = postSchema.safeParse({
    title: formdata.get("title"),
    content: formdata.get("content"),
  });
  if (error) {
    return json({ error: error.issues });
  }

  await db.post.create({ data });
  return redirect("/posts");
});

export const destroyAction = createAction(async ({ db, params }) => {
  await db.post.delete({ where: { id: Number(params.postId) } });
  return redirect("/posts");
});
