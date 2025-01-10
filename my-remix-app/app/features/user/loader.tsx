import { json } from "@remix-run/cloudflare";
import createLoader from "~/utils/createLoader";

export const indexLoader = createLoader(async ({ db }) => {
  const users = await db.user.findMany();

  return json({ users: users });
});

export const showLoader = createLoader(async () => {
  return json({ users: ["DEF"] });
});
