import { data } from "@remix-run/cloudflare";
import { fetchUser, fetchUsers } from "~/features/user/service";
import createLoader from "~/utils/createLoader";

export const indexLoader = createLoader(async ({ db }) => {
  const users = await fetchUsers(db)();

  return data({ users });
});

export const showLoader = createLoader(async ({ db, params }) => {
  if (!params.userId) {
    throw new Response("Not Found", { status: 404 });
  }
  const user = await fetchUser(db)({ userId: Number(params.userId) });
  if (!user) {
    throw new Response("Not Found", { status: 404 });
  }
  return data({ user: user });
});
