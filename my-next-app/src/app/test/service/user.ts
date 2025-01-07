import { getPrisma } from "@/getPrisma";

export default async function getManyUser() {
  const users = await getPrisma().user.findMany();
  return users;
}
