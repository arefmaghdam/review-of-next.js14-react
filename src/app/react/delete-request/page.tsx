import React, { FC } from "react";
import Link from "next/link";
import CodePreview from "../../../components/code-preview";

const DeleteRequest: FC = () => {
  return (
    <div>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // in this step we want to develop deleteProduct function, because now this function delete products from UI but not saved and when we refresh, deleted product returned
    // App.js codes:

    const deleteProduct = async (id) => {
        await fetch("http://localhost:8000/products/ + {id}", {
            method: "DELETE",
        })
        setProducts(products.filter((item) => item.id !== id))
    }
      `}
      />
    </div>
  );
};

export default DeleteRequest;
