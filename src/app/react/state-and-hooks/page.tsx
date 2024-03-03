import React, { FC } from "react";
import Link from "next/link";
import CodePreview from "../../../components/code-preview";

const StateAndHooks: FC = () => {
  return (
    <div>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // spose products array be a global variable in our app, so we cut products array and paste in App.js
    // but we have a problem, if products array be a real data and we get from API, products array is a dynamic data
    // and render in React in once, but if datas be variable we force render react app when datas is changed
    // react solution for this problem is state using useState hook, because react rerender the app when state is changed
    // App.js codes:

    import { useState } from "react"
    import ProductList from "./components/ProductList/ProductList"

    const App = () => {
        const [products, setProducts] = useState([
            {id: 1, title: "Book 1"},
            {id: 2, title: "Book 2"},
            {id: 3, title: "Book 3"},
        ])
        
        return (
            <div className="container">
                <ProductList products={products} />
            </div>
        )
    }

    export default App

    // components/ProductList/ProductList.js codes:
    // lists in react are arrays

    import Product from "../Product/Product"

    const ProductList = ({products}) => {
        return (
            <div>
                {products.map((item) => (
                    <Product key={item.id} title={item.title} />
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

export default StateAndHooks;
