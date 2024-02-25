import React, { FC } from "react";
import Link from "next/link";
import CodePreview from "../../../components/code-preview";

const ReactComponents: FC = () => {
  return (
    <div>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // react develop the applications based on components, that means we devide the app to small parts and 
    // we develop the parts separatly and we connect the parts together that our app is created, this small 
    // parts are components, we can use classes or functions to implement of components but functional components
    // are better based on final react releases

    import React from "react"
    import ReactDOM from "react-dom"

    const App = () => {
        return (
            <div id="app" className="container">
                Hello
            </div>
        )
    }

    const root = document.getElementById("root")

    ReactDOM.render(<App />, root)

    // the top component is for App.js but we dont use other components same as top component, we use components as below:
    
    import React from "react"

    const Home = () => {
        return (
            <div>
                Home Page
            </div>
        )
    }

    export default Home;
      `}
      />
    </div>
  );
};

export default ReactComponents;
