import A from "@/app/test/components/A";
import B from "@/app/test/components/B";

export const runtime = "edge";

export default function Test() {
  return (
    <div>
      <A />
      <B />
    </div>
  );
}
