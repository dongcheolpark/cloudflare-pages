import type { MetaFunction } from "@remix-run/cloudflare";
import { insertAction } from "~/features/post/action";
import Create from "~/features/post/pages/create";

export const meta: MetaFunction = () => {
  return [{ title: "Post Index" }];
};

export const action = insertAction;

export default Create;
