import React, { FC } from "react";
import Link from "next/link";
import CodePreview from "@/components/code-preview";

const DataFetching: FC = () => {
  return (
    <div>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    async function getData() {
        const res = await fetch('https://api.example.com/...')
       
        if (!res.ok) {
          throw new Error('Failed to fetch data')
        }
       
        return res.json()
    }
       
    export default async function Page() {
        const data = await getData()
       
        return (
            <div>
                <ul>
                    {
                        data.map((item) => (
                            <li key={item.id}>{item.title}</li>
                        ))
                    }
                </ul>
            </div>
        )
    } 
      `}
      />
    </div>
  );
};

export default DataFetching;
