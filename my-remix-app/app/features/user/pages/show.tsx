import { useLoaderData } from "@remix-run/react";
import { showLoader } from "~/features/user/loader";

export default function Show() {
  const { user } = useLoaderData<typeof showLoader>();

  return (
    <div>
      <p>{user.id}</p>
      <p>{user.name}</p>
      <p>{user.email}</p>
    </div>
  );
}
