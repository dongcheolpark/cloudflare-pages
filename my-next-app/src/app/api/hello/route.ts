import { PrismaClient } from "@prisma/client";
import { PrismaD1 } from "@prisma/adapter-d1";
// import { getRequestContext } from '@cloudflare/next-on-pages'
export interface Env {
  DB: D1Database;
}

export const runtime = "edge";

export async function GET() {
  console.log("DB", process.env.DB);
  const adapter = new PrismaD1(process.env.DB as unknown as D1Database);
  const prisma = new PrismaClient({ adapter });

  const users = await prisma.user.findMany();
  const result = JSON.stringify(users);
  return new Response(result);
}
