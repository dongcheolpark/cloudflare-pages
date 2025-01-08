import getManyUser from "@/app/test/service/user";

export const runtime = "edge";

export async function GET() {
  const result = await getManyUser();
  return new Response(JSON.stringify(result));
}
