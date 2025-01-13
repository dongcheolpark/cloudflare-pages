import { Link, useLoaderData } from "@remix-run/react";
import { indexLoader } from "~/features/post/loader";

export default function Index() {
  const { posts } = useLoaderData<typeof indexLoader>();

  return (
    <div>
      <h1>Post Index</h1>
      <div>
        <Link to="create">create</Link>
        {posts.map((post) => (
          <div key={post.id}>
            <h2>
              #{post.id} {post.title}
            </h2>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
