import React, { FC } from "react";
import Link from "next/link";
import CodePreview from "@/components/code-preview";

const ServerFunction: FC = () => {
  return (
    <div>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // we can use server actions for sending datas to API or saving datas to database
    // now we want to send input datas to API when we click on a button but we know next.js 14 components are server components defaultly
    // and we cant use onclick event, but there are 3 ways to do this task:
    // 1 we can change whole of component to client component using "use client"
    // 2 we can change button component to client component using "use client" in another file or same file
    // 3 we can use server functions or server actions in same file or another file into actions folder to recieve datas in server side
    // we want to use server actions to sending datas to API
    // steps to implement server actions:
    // 1 declare an async function:
            async function addProduct() {}
    // 2 point created function in form tag as action:
            <form action={addProduct} >
    // 3 determine name attribute for inputs for detect inputs that should send their datas:
            <input name="title"
    // 4 server action function development with writing "use server" in top of function, so we have a server function or server action now
    // now we should to change app/shop/page.tsx codes as below:

    import { FC } from "react";

    interface Product {
      id: number;
      title: string;
      price: number;
    }

    const Shop: FC = async () => {
      const response = await fetch("http://localhost:8000/products", {
        cache: "no-cache",
      });

      const data: Product[] = await response.json();

      const addProduct = async (event: FormData) => {
        "use server"
        const title = e.get("title")
        const price = e.get("price")
        const newProduct = {title, price}
        await fetch("http://localhost:8000/products", {
            method: "POST",
            body: JSON.stringify(newProduct),
            headers: {
                "Content-Type": "application/json"
            }
        })
      }

      return (
        <div>
          <form action={addProduct} className="flex flex-col gap-5 max-w-xl p-8 mx-auto bg-slate-800 rounded-md">
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

    // now if we test the app we see product is saved in db.json but not see in UI and need to a refresh
    // this problem is related to cache logic and we should use revalidate tag to solve this problem

      `}
      />
    </div>
  );
};

export default ServerFunction;
