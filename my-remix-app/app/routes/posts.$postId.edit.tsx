import type { MetaFunction } from "@remix-run/cloudflare";
import { updateAction } from "~/features/post/action";
import Edit from "~/features/post/pages/edit";

export const meta: MetaFunction = () => {
  return [{ title: "Post Edit" }];
};

export const action = updateAction;

export default Edit;
