import React, { FC } from "react";
import Link from "next/link";
import CodePreview from "../../../components/code-preview";

const Introduction: FC = () => {
  return (
    <div>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // React => a javascript library for UI development made by facebook
    // library => a set of functions and classes that we use them to develope apps simplicity
    // when we use React? => if our app is more complex ans if we need better performance 
    // better performance => VDOM and reconcilation
    // management of view in react => based on components
      `}
      />
    </div>
  );
};

export default Introduction;
