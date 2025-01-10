import type { MetaFunction } from "@remix-run/cloudflare";
import { showLoader } from "~/features/user/loader";
import Show from "~/features/user/pages/show";

export const meta: MetaFunction = () => {
  return [{ title: "Show" }];
};

export { showLoader as loader };

export default Show;
