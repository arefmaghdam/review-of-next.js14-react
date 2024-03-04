import React, { FC } from "react";
import Link from "next/link";
import CodePreview from "../../../components/code-preview";

const PostRequest: FC = () => {
  return (
    <div>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // we want to develop addProduct function, because now products add to UI but when we refresh added product deleted because the product not saved
    // App.js codes:

    const addProduct = async (title) => {
        const response = await fetch("http://localhost:8000/products", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(title),
        })
        const responseData = await response.json()
        setProducts([...products, responseData])
    }
      `}
      />
    </div>
  );
};

export default PostRequest;
