"use server";

import { z } from "zod";
import { createUser } from "@/app/test/service/user";

const schema = z.object({
  email: z.string({
    invalid_type_error: "Invalid Email",
  }),
  name: z.string({}),
});

export const createUserAction = async (formData: FormData) => {
  const validatedFields = schema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
  });

  if (!validatedFields.success) {
    throw new Error(validatedFields.error.errors[0].message);
  }

  createUser(validatedFields.data);
};
