import { getRequestContext } from "@cloudflare/next-on-pages";
import { PrismaClient } from "@prisma/client";
import { PrismaD1 } from "@prisma/adapter-d1";

export const runtime = "edge";

export const getPrisma = () => {
  const { DB } = getRequestContext().env;
  const adapter = new PrismaD1(DB);

  return new PrismaClient({ adapter });
};
