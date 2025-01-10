import type { MetaFunction } from "@remix-run/cloudflare";
import { loader } from "~/features/test/modules";
import Index from "~/features/test/pages";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export { loader };

export default Index;
