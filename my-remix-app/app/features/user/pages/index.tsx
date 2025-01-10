import { NavLink, useLoaderData } from "@remix-run/react";
import { indexLoader } from "~/features/user/loader";

export default function Index() {
  const { users } = useLoaderData<typeof indexLoader>();

  return (
    <div>
      <h1>index</h1>
      {users.map((user) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      ))}
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
