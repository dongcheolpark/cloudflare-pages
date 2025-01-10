import { useLoaderData } from "@remix-run/react";
import { loader } from "~/features/test/modules";

export default function Index() {
  const { text } = useLoaderData<typeof loader>();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-6xl font-bold">{text}</h1>
    </div>
  );
}
