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
      <Link href="/react/state-and-hooks">state-and-hooks</Link>
      <Link href="/react/pass-data-and-events">pass-data-and-events</Link>
      <Link href="/react/form-components">form-components</Link>
      <Link href="/react/what-is-API">what-is-API</Link>
      <Link href="/react/fetch-data-from-API">fetch-data-from-API</Link>
      <Link href="/react/delete-request">delete-request</Link>
    </div>
  );
};

export default ReactProvider;
