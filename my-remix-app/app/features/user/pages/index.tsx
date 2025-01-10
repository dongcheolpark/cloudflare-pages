import { NavLink, useLoaderData } from "@remix-run/react";
import { indexLoader } from "~/features/user/loader";

export default function Index() {
  const { text } = useLoaderData<typeof indexLoader>();

  return (
    <div>
      <h1>{text}</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/users/1">1 Show</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
