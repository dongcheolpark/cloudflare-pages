import A from "@/app/test/components/A";
import B from "@/app/test/components/B";
import { Suspense } from "react";

export const runtime = "edge";

export default function Test() {
  return (
    <div>
      <Suspense fallback={<div>로딩중...</div>}>
        <A />
      </Suspense>
      <Suspense fallback={<div>로딩중...</div>}>
        <B />
      </Suspense>
    </div>
  );
}
