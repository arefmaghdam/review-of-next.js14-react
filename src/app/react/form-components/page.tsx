import React, { FC } from "react";
import Link from "next/link";
import CodePreview from "../../../components/code-preview";

const FormComponents: FC = () => {
  return (
    <div>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // we want to have a form to add product infos, so we should to have a component for this task
    // the input data in form can be changed and we want to get and save input data, so we use onChange event for input using use
    // components/AddProduct/AddProduct.js codes:

    import { useState } from "react"

    const AddProduct = ({onAdd}) => {
      const [title, setTitle] = useState("")

      const submitForm = (e) => {}
        e.preventDefault()
        onAdd({title})
        setTitle("")
      return (
        <div>
          <form onSubmit={submitForm}>
            <div>
              <input 
              type="text" 
              placeholder="Add Product ..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <button type="submit">Add</button>
          </form>
        </div>
      )
    }

    export default AddProduct

    // App.js codes:

    const addProduct = (title) => {
      const id = Math.floor(Math.random() * 10000)
      const newProduct = {id, ...title}
      setProducts([...products, newProduct])
    }

    return (
      <AddProduct onAdd={addProduct} />
      <ProductList products={products} onDelete={dleteProduct} />
    )
      `}
      />
    </div>
  );
};

export default FormComponents;
