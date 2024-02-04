import React, { FC } from "react";
import Link from "next/link";
import CodePreview from "@/components/code-preview";

const NextReview: FC = () => {
  return (
    <div>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // next.js 14 is a stable version of next.js 13, we have some changes in below contents in next.js 14:
    // 1 routing
    // 2 rendering
    // 3 data fetching
    // 4 styling
    // 5 optimization
    // 6 simplicity using of typescript
    // 7 server actions
      `}
      />
    </div>
  );
};

export default NextReview;
