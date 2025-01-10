"use client";
import { createUserAction } from "@/app/test/create/serverAction";
import { useTransition } from "react";

export const runtime = "edge";

const UserCreate = () => {
  const [isActionPending, startTransition] = useTransition();
  console.log(isActionPending);

  return (
    <form
      action={(formData) => startTransition(() => createUserAction(formData))}
    >
      <div>
        <label>이름</label>
        <input type="text" name="name" />
      </div>
      <div>
        <label>이메일</label>
        <input type="email" name="email" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserCreate;
