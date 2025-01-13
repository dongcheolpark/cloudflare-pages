import createAction from "~/utils/createAction";
import { object, string } from "zod";
import { redirect } from "@remix-run/cloudflare";

const postSchema = object({
  title: string(),
  content: string(),
});

export const insertAction = createAction(async ({ db, request }) => {
  const formdata = await request.formData();
  const data = await postSchema
    .parseAsync({
      title: formdata.get("title"),
      content: formdata.get("content"),
    })
    .catch((error) => {
      throw new Error(error.errors[0].message);
    });

  await db.post.create({ data });
  return redirect("/posts");
});
