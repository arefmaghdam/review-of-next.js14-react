import React, { FC } from "react";
import Link from "next/link";

const ReactProvider: FC = () => {
  return (
    <div>
      <Link href="/react/introduction">introduction</Link>
      <Link href="/react/create-react-app">create react app</Link>
      <Link href="/react/install">install</Link>
      <Link href="/react/getting-started">getting started</Link>
    </div>
  );
};

export default ReactProvider;
