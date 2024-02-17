import React, { FC } from "react";
import Link from "next/link";
import CodePreview from "@/components/code-preview";

const FetchProducts: FC = () => {
  return (
    <div>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // in this step, we want to show products in app/shop/page.tsx using db.json datas as API datas
    // app/shop/page.tsx codes:

    import { FC } from "react";

    interface Product {
        id: number
        title: string
        price: number
    }

    const Shop: FC = async () => {
        const response = await fetch("http://localhost8000/products", {
            cache: "no-cache"
        })

        const data: Product[] = await response.json()

      return (
        <div>
          <form className="flex flex-col gap-5 max-w-xl p-8 mx-auto bg-slate-800 rounded-md">
            <input
              type="text"
              placeholder="Title"
              className="p-2 bg-slate-600 outline-none rounded-md"
            />
            <input
              type="text"
              placeholder="Price"
              className="p-2 bg-slate-600 outline-none rounded-md"
            />
            <button className="p-2 bg-slate-900 rounded-md">Add Product</button>
          </form>
          <div className="flex flex-wrap justify-center max-w-xl mx-auto my-10 gap-5">
            {data.map((item) => (
                <div key={item.id} className="p-5 bg-slate-800 rounded-md text-center">
                    <p>{item.title}</p>
                    <p>{item.price}</p>
                </div>
            ))}
          </div>
        </div>
      );
    };

    export default Shop;

    // difference between no-store and no-cache in cache argument of fetch:
    // no-cache => when we use no-store, datas is not cache and is not save in file system but 
    // when we use no-cache datas is not cache and is save in file system
      `}
      />
    </div>
  );
};

export default FetchProducts;
