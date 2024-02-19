import React, { FC } from "react";
import Link from "next/link";
import CodePreview from "../../../components/code-preview";

const GettingStarted: FC = () => {
  return (
    <div>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // we have public/index.html and src/index.js connected to public/index.html
    // public/index.html codes:

    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>My App</title>
        </head>
        <body>
            <noscript>you need to enable javascript to run this app</noscript>
            <div id="root"></div>
        </body>   
    </html>

    // src/index.js codes:

    import React from "react"
    import ReactDOM from "react-dom"

    const element = (
        <div id="app" className="container">
            Hello
        </div>
    )

    const root = document.getElementById("root")

    ReactDOM.render(element, root)
      `}
      />
    </div>
  );
};

export default GettingStarted;
