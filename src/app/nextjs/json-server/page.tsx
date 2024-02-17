import React, { FC } from "react";
import Link from "next/link";
import CodePreview from "@/components/code-preview";

const JSONServer: FC = () => {
  return (
    <div>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // we want to consider form datas as API values, for this task we can use json placeholder
    // but we want use JSON server for this case
    // first we should to install this package using below command:
    // npm install json-server
    // now in package.json file we should change scripts as below:
    // "scripts": {
        ...
        "server": "json-server --watch db.json --port 8000"
      }
    // now we open two terminal:
    // 1 terminal to app using npm run dev in port 3000
    // 2 terminal to json server using npm run server in port 8000
    // db.json file is created with execute npm run server
    // and we can see db.json content using http://localhost8000/posts
    // but we want to customize the db.json file as below:
    // db.json file codes:
      {
        "products": [
          {
            "id": 1,
            "title": "Product 1",
            "price": 99
          },
          {
            "id": 2,
            "title": "Product 2",
            "price": 199
          },
        ]
      }
    // now we can see API datas using http://localhost8000/products
      `}
      />
    </div>
  );
};

export default JSONServer;
