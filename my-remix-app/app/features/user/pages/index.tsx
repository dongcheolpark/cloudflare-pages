import { Outlet, useLoaderData } from "@remix-run/react";
import { indexLoader } from "~/features/user/loader";

export default function Index() {
  const { text } = useLoaderData<typeof indexLoader>();

  return (
    <div>
      <h1>{text}</h1>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
