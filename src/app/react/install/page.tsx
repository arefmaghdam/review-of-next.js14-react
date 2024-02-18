import React, { FC } from "react";
import Link from "next/link";
import CodePreview from "../../../components/code-preview";

const Install: FC = () => {
  return (
    <div>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // install of create-react-app package:
    // npm install -g create-react-app
    // create-react-app usage:
    // create-react-app app-name
    // cd app-name
    // npm start
      `}
      />
    </div>
  );
};

export default Install;
