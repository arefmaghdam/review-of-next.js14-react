import React, { FC } from "react";
import Link from "next/link";
import CodePreview from "../../../components/code-preview";

const WhatIsAPI: FC = () => {
  return (
    <div>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // we can add products to UI but when we refresh we lose datas, because our datas is not saved
    // there are two way to save datas: 1 using local storage 2 using API and backend to save
    // react is for UI developing and can not connect with databases, we should to have a backend such as node.js
    // but we dont want to use backend and we want to use JSON Server as a simple backend to use API
    // wen application structure:
    // databese <=> backend <=> frontend
    // API structure:
    // data(json data) and HTTP Method(GET, POST, DELETE, ...)

    // JSON Server get started:
    // install => npm install json-server
    // package.json scripts changes: "server": "json-server --watch db.json --port 8000"
    // run json-server in inother terminal using npm run server

    // db.json codes:

    {
        "products: [
            {
                "id": 1,
                "title": "Book 1"
            },
            {
                "id": 2,
                "title": "Book 2"
            },
            {
                "id": 3,
                "title": "Book 3"
            }
        ]
    }

    // our server address or API url: http://localhost:8000
    // now we have a simple backend and API and if we enter http://localhost:8000/products
      `}
      />
    </div>
  );
};

export default WhatIsAPI;
