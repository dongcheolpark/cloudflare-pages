import { Form, useActionData } from "@remix-run/react";
import { updateAction } from "~/features/post/action";

import styles from "./edit.module.scss";

export default function Edit() {
  const actionData = useActionData<typeof updateAction>();

  return (
    <div className={styles.root}>
      <h1>Post Update</h1>
      {actionData && <p>{actionData.error[0].message}</p>}
      <Form method="post" className={styles.formContainer}>
        <input type="text" name="title" placeholder="Title" />
        <textarea name="content" placeholder="Content"></textarea>
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
}
