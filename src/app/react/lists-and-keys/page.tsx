import React, { FC } from "react";
import Link from "next/link";
import CodePreview from "../../../components/code-preview";

const ListsAndKeys: FC = () => {
  return (
    <div>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // App.js codes:

    import ProductList from "./components/ProductList/ProductList"

    const App = () => {
        return (
            <div className="container">
                <ProductList />
            </div>
        )
    }

    export default App

    // components/ProductList/ProductList.js codes:
    // lists in react are arrays

    const products = [
        {id: 1, title: "Book 1"},
        {id: 2, title: "Book 2"},
        {id: 3, title: "Book 3"},
    ]

    const ProductList = () => {
        return (
            <div>
                {products.map((item) => (
                    <p key={item.id}>{item.title}</p>
                ))}
            </div>
        )
    }

    export default ProductList

      `}
      />
    </div>
  );
};

export default ListsAndKeys;
