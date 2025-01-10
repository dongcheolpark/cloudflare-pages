import { NavLink, useLoaderData } from "@remix-run/react";
import { indexLoader } from "~/features/user/loader";

export default function Index() {
  const { users } = useLoaderData<typeof indexLoader>();

  return (
    <div>
      <h1>index</h1>
      <nav>
        <ul>
          <li>
            {users.map((user) => (
              <div key={user.id}>
                <h2>{user.name}</h2>
                <p>{user.email}</p>
                <NavLink key={user.id} to={`/users/${user.id}`}>
                  Show
                </NavLink>
              </div>
            ))}
          </li>
        </ul>
      </nav>
    </div>
  );
}
