import styles from "./create.module.scss";

export default function Create() {
  return (
    <div className={styles.root}>
      <h1>Post Create</h1>
      <form method="post" className={styles.formContainer}>
        <input type="text" name="title" placeholder="Title" />
        <textarea name="content" placeholder="Content"></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
