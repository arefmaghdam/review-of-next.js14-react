import React, { FC } from "react";
import Link from "next/link";
import CodePreview from "../../../components/code-preview";

const OptimizeSintaxProps: FC = () => {
  return (
    <div>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // we can use arrow functions and object destructring
    // App.js codes:

    const App = () => {
        return (
            <Product title="Book 1" />
            <Product title="Book 2" />
            <Product title="Book 3" />
        )
    }

    export default App

    // Product.js codes:

    const Product = ({title}) => {
        return (
            <div>{title}</div>
        )
    }

    export default Product
      `}
      />
    </div>
  );
};

export default OptimizeSintaxProps;
