import { FC } from "react";

const Shop: FC = () => {
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
    </div>
  );
};

export default Shop;
