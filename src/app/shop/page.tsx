import { revalidateTag } from "next/cache";
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
    let title = event.get("title");
    const price = event.get("price");
    const newProduct = { title, price };
    await fetch("http://localhost:8000/products", {
      method: "POST",
      body: JSON.stringify(newProduct),
      headers: {
        "Content-Type": "application/json",
      },
    });
    
    revalidateTag("products");
    
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
