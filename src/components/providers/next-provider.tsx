import Link from "next/link";
import React, { FC } from "react";

const NextProvider: FC = () => {
  return (
    <div>
      <Link href="/nextjs/next.js14-review">next.js 14 review</Link>
      <Link href="/nextjs/adding-fonts">adding fonts</Link>
      <Link href="/nextjs/data-fetching">data fetching</Link>
    </div>
  );
};

export default NextProvider;
