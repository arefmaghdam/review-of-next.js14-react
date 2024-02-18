import React, { FC } from "react";
import Link from "next/link";
import CodePreview from "../../../components/code-preview";

const CreateReactApp: FC = () => {
  return (
    <div>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // Quick Start:
    // npx create-react-app app-name
    // cd app-name
    // npm start
      `}
      />
    </div>
  );
};

export default CreateReactApp;
