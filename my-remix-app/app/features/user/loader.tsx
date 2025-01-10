import { PrismaD1 } from "@prisma/adapter-d1";
import { PrismaClient } from "@prisma/client";
import { json, LoaderFunctionArgs } from "@remix-run/cloudflare";

export const indexLoader = async ({ context }: LoaderFunctionArgs) => {
  const { env } = context.cloudflare;
  const adapter = new PrismaD1(env.DB);
  const prisma = new PrismaClient({ adapter });
  const users = await prisma.user.findMany();

  return json({ users: users });
};

export const showLoader = async () => {
  return json({ users: ["DEF"] });
};
