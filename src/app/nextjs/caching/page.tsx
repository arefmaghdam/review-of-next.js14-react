import React, { FC } from "react";
import Link from "next/link";
import CodePreview from "@/components/code-preview";

const Caching: FC = () => {
  return (
    <div>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // when we use fetch (not axios or ...) in next.js we use caching feature automaticly and defaultly and cached data is saved in file system
    // this means we send a request to same url, next.js give us datas from file system cach datas and rendering and speed of app increase
    // this use just when we work with datas that are static and not change oftenly
    // when we want to recieve new data in each request but not from cache or file system, we should use aregument of {chache: no-store}
    // when we want to recieve datas in each some seconds, we should use argument of {next:{revalidate: 30}}
      `}
      />
    </div>
  );
};

export default Caching;
