import Link from "next/link";
import React, { FC } from "react";

const NextProvider: FC = () => {
  return (
    <div>
      <Link href="/nextjs/next.js14-review">next.js 14 review</Link>
      <Link href="/nextjs/adding-fonts">adding fonts</Link>
      <Link href="/nextjs/data-fetching">data fetching</Link>
      <Link href="/nextjs/caching">caching</Link>
      <Link href="/nextjs/server-actions">server actions</Link>
      <Link href="/nextjs/json-server">JSON Server</Link>
    </div>
  );
};

export default NextProvider;
