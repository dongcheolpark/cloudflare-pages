import { json } from "@remix-run/cloudflare";

export const loader = async () => {
  return json({ text: "Hello, world!" });
};
