import { User } from "@prisma/client";
import createService from "~/utils/createService";

export const fetchUsers = createService(async (db) => {
  return db.user.findMany();
});

export const fetchUser = createService<{ userId: number }, User | null>(
  async (db, { userId }) => {
    const user = db.user.findUnique({ where: { id: userId } });
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  }
);
