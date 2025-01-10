import { data } from "@remix-run/cloudflare";
import createLoader from "~/utils/createLoader";

export const indexLoader = createLoader(async ({ db }) => {
  const users = await db.user.findMany();

  return data({ users });
});

export const showLoader = createLoader(async () => {
  return data({ users: ["DEF"] });
});
