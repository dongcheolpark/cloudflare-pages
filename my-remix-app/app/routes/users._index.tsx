import type { MetaFunction } from "@remix-run/cloudflare";
import { indexLoader } from "~/features/user/loader";
import Index from "~/features/user/pages";

export const meta: MetaFunction = () => {
  return [{ title: "Index" }];
};

export { indexLoader as loader };

export default Index;
