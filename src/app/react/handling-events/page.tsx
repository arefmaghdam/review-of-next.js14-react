import React, { FC } from "react";
import Link from "next/link";
import CodePreview from "../../../components/code-preview";

const HandlingEvents: FC = () => {
  return (
    <div>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // we want to have a button that when we click on the button display product title, for this task we can use onClick attribute
    // there are two way to declare onClick attribute: 1 () => {} 2 function point

    <button onClick={() => console.log("Hello World")}></button>
    <button onClick={buttonHandler}></button>
      `}
      />
    </div>
  );
};

export default HandlingEvents;
