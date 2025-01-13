import styles from "./index.module.scss";
import { Form, Link, useLoaderData } from "@remix-run/react";
import { indexLoader } from "~/features/post/loader";

export default function Index() {
  const { posts } = useLoaderData<typeof indexLoader>();

  return (
    <div>
      <h1>Post Index</h1>
      <div>
        <Link to="create">create</Link>
        <div className={styles.postList}>
          {posts.map((post) => (
            <div key={post.id} className={styles.postItem}>
              <h2>
                #{post.id} {post.title}
              </h2>
              <div className={styles.buttonWrapper}>
                <Link to={`edit/${post.id}`}>수정</Link>
                <Form
                  action={`${post.id}/destroy`}
                  method="post"
                  onSubmit={(event) => {
                    const response = confirm(
                      "Please confirm you want to delete this record."
                    );
                    if (!response) {
                      event.preventDefault();
                    }
                  }}
                >
                  <button type="submit">삭제</button>
                </Form>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
