import React, { FC } from "react";
import Link from "next/link";
import CodePreview from "../../../components/code-preview";

const SeparateComponents: FC = () => {
  return (
    <div>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // when our app is very big, this is not true to develop our app in App.js, so we can create separate components
    // we use separate components in separate .js files as below:
    
    import React from "react"

    const Home = () => {
        return (
            <div>
                Home Page
            </div>
        )
    }

    export default Home;
      `}
      />
    </div>
  );
};

export default SeparateComponents;
