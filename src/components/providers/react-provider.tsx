import React, { FC } from "react";
import Link from "next/link";

const ReactProvider: FC = () => {
  return (
    <div>
      <Link href="/react/introduction">introduction</Link>
      <Link href="/react/create-react-app">create react app</Link>
      <Link href="/react/install">install</Link>
      <Link href="/react/getting-started">getting started</Link>
      <Link href="/react/components">components</Link>
      <Link href="/react/separate-components">separate-components</Link>
      <Link href="/react/reusable-components">reusable-components</Link>
      <Link href="/react/props">props</Link>
      <Link href="/react/optimize-syntax-props">optimize-syntax-props</Link>
      <Link href="/react/handling-events">handling-events</Link>
      <Link href="/react/lists-and-keys">lists-and-keys</Link>
    </div>
  );
};

export default ReactProvider;
