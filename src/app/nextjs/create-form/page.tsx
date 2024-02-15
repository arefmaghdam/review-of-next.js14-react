import React, { FC } from "react";
import Link from "next/link";
import CodePreview from "@/components/code-preview";

const CreateForm: FC = () => {
  return (
    <div>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // we want implement server action in code that we want to see the server action operation
    // we want to have a route named shop and and we want to have a form in this route 
    // so we create a app/shop folder and page.tsx file into app/shop

    // app/shop/page.tsx codes:

    const Shop: FC = () => {
        return (
            <div>
                <form className="flex flex-col gap-5 max-w-xl p-8 mx-auto bg-slate-800 rounded-md">
                    <input type="text" placeholder="Title" className="p-2 bg-slate-600 outline-none rounded-md"/>
                    <input type="text" placeholder="Price" className="p-2 bg-slate-600 outline-none rounded-md" />
                    <button className="p-2 bg-slate-900 rounded-md">Add Product</button>
                </form>
            </div>
        )
    }

    export default Shop
      `}
      />
    </div>
  );
};

export default CreateForm;
