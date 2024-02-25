import React, { FC } from "react";
import Link from "next/link";
import CodePreview from "../../../components/code-preview";

const ReusableComponents: FC = () => {
  return (
    <div>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // App.js is our main component and we can create a components folder and we develope the other components into components folder
    // components/Product.js codes:

    function Product() {
        return <div>Product</div>
    }

    export default Product

    // App.js codes:

    import Product from "./components/Product"

    function App() {
        return (
            <div id="app" className="container">
                <Product />
                <Product />
                <Product />
            </div>
        )
    }

    export defaut App

    // index.js codes:

    importt ReactDOM from "react-dom"
    import App from "./App.js"

    ReactDOM.render(<App />, document.getElementById("root"))
      `}
      />
    </div>
  );
};

export default ReusableComponents;
