import React, { FC } from "react";
import Link from "next/link";
import CodePreview from "@/components/code-preview";

const RevalidateData: FC = () => {
  return (
    <div>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // we want to use revalidate and tag for solve runtime display products that add using form datas
    // 1 we use next: {tags: ["products"]} in get fetch:

    const response = await fetch("http://localhost:8000/products", {
        cache: "no-cache",
        next: {
            tags: ["products"],
        },
      });
    
    // 2 we want to determine that every request that has "products" tag, be refetched and recieved new datas
    // 3 for this task, we import and use revalidateTag package from next/cache:

      import {revalidateTag} from "next/cache"

      // now into server function and after POST fetch we should write:

      revalidateTag("products")

    // app/shop/page.tsx codes:

    import { FC } from "react";

    interface Product {
      id: number;
      title: string;
      price: number;
    }

    const Shop: FC = async () => {
      const response = await fetch("http://localhost:8000/products", {
        cache: "no-cache",
        next: {
            tags: ["products"],
        },
      });

      const data: Product[] = await response.json();

      const addProduct = async (event: FormData) => {
        "use server";
        const title = event.get("title");
        const price = event.get("price");
        const newProduct = { title, price };
        await fetch("http://localhost:8000/products", {
          method: "POST",
          body: JSON.stringify(newProduct),
          headers: {
            "Content-Type": "application/json",
          },
        });
      };

      return (
        <div>
          <form
            action={addProduct}
            className="flex flex-col gap-5 max-w-xl p-8 mx-auto bg-slate-800 rounded-md"
          >
            <input
              name="title"
              type="text"
              placeholder="Title"
              className="p-2 bg-slate-600 outline-none rounded-md"
            />
            <input
              name="price"
              type="text"
              placeholder="Price"
              className="p-2 bg-slate-600 outline-none rounded-md"
            />
            <button className="p-2 bg-slate-900 rounded-md">Add Product</button>
          </form>
          <div className="flex flex-wrap justify-center max-w-xl mx-auto my-10 gap-5">
            {data.map((item) => (
              <div
                key={item.id}
                className="p-5 bg-slate-800 rounded-md text-center"
              >
                <p>{item.title}</p>
                <p>{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      );
    };

    export default Shop;

      `}
      />
    </div>
  );
};

export default RevalidateData;
