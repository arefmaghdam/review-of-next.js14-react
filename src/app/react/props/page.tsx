import React, { FC } from "react";
import Link from "next/link";
import CodePreview from "../../../components/code-preview";

const ComponentProps: FC = () => {
  return (
    <div>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // we want use reusable components with dynamic datas, for this task we should to use props context same as functions arguments
    //  product.js codes:

    function Product(props) {
        return <div>{props.title}</div>
    }

    export default Product

    // usage:

    return (
        <div>
            <Product title="Book 1" />
            <Product title="Book 2" />
            <Product title="Book 3" />
        </div>
    )
      `}
      />
    </div>
  );
};

export default ComponentProps;
