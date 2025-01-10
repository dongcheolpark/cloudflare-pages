import { json } from "@remix-run/cloudflare";

export const indexLoader = async () => {
  return json({ text: "ABC" });
};

export const showLoader = async () => {
  return json({ users: ["DEF"] });
};
