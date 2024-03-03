import React, { FC } from "react";
import Link from "next/link";
import CodePreview from "../../../components/code-preview";

const PassDataAndEvents: FC = () => {
  return (
    <div>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // we want to have a delete button on Product.js and when we click on the delete button, the product is deleted into state in App.js 
    // App.js codes:

    import { useState } from "react"
    import ProductList from "./components/ProductList/ProductList"

    const App = () => {
        const [products, setProducts] = useState([
            {id: 1, title: "Book 1"},
            {id: 2, title: "Book 2"},
            {id: 3, title: "Book 3"},
        ])

        const deleteProduct = (id) => {
            setProducts(products.filter((item) => item.id !== id))
        }
        
        return (
            <div className="container">
                <ProductList products={products} onDelete={deleteProduct} />
            </div>
        )
    }

    export default App

    // components/ProductList/ProductList.js codes:
    // lists in react are arrays

    import Product from "../Product/Product"

    const ProductList = ({products, onDelete}) => {
        return (
            <div>
                {products.map((item) => (
                    <Product key={item.id} product={item} onDelete={onDelete} />
                ))}
            </div>
        )
    }

    export default ProductList

    // components/Product/Product.js codes:

    const Product = ({product, onDelete}) => {
        return (
            <div>
                <div>{product.title}</div>
                <div>
                    <button onClick={() => onDelete(product.id)}>Delete</button>
                </div>
            </div>
        )
    }

      `}
      />
    </div>
  );
};

export default PassDataAndEvents;
