import React, { FC } from "react";
import Link from "next/link";
import CodePreview from "@/components/code-preview";

const ServerActions: FC = () => {
  return (
    <div>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // server actions => we can use functions related to server into server and client components using server actions
    // this means that we dont need to API folder and we can use server codes directly
    // using server actions in server components:

    export default function ServerComponent() {
        async function myAction() {
            "use server"
            ... codes
        }
    }

    // using server actions in client components:

    "use server"

    export async function myAction() {
        ... codes
    }

    "use client"

    import {myAction} from "./actions"

    export default function ClientComponent() {
        return (
            <form action={myAction}>
                <button type="submit">Add To Cart</button>
            </form>
        )
    }

    // the above edition is for when the app features are more and complex, in this cases we create a actions folder and 
    // put server action files or functions into this folder
      `}
      />
    </div>
  );
};

export default ServerActions;
