import React, { FC } from "react";
import Link from "next/link";
import CodePreview from "../../../components/code-preview";

const FetchDataFromAPI: FC = () => {
  return (
    <div>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // we want read datas dynamicly from server or API instead of useState static datas
    // we want to use useEffect hook for get datas from API that when our app is started datas display in UI

    // App.js codes:

    import { useState, useEffect } from "react"

    const [products, setProducts] = useState([])

    useEffect(() => {
        const sendRequest = async () => {
            const response = await fetch("http://localhost:8000/products")
            const responseData = await response.json()
            setProducts(responseData)
        }
        sendRequest()
    }, [])
      `}
      />
    </div>
  );
};

export default FetchDataFromAPI;
