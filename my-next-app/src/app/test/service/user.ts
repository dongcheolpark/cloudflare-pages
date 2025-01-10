import { getPrisma } from "@/getPrisma";

export async function getManyUser() {
  const users = await getPrisma().user.findMany();
  return users;
}

export async function createUser(data: { email: string; name: string }) {
  const user = await getPrisma().user.create({ data });
  return user;
}
