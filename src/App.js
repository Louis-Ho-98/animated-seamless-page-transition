// import logo from "./logo.svg";
// import "./App.css";
// import Dragable from "./components/Dragable";
// import { BrowserRouter } from "react-router-dom";

// function App() {
//   return (
//     <div className="App">
//       <Dragable />
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//         <button class="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700">
//           Test
//         </button>
//       </header>
//     </div>
//   );
// }

// export default App;

import { createContext, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Layout from "./routes/Layout";

export const PageVariantsContext = createContext(null); 


export function App() {
  const [pageVariantsContext, setPageVariantsContext] = useState(false);
  const updatePageVariantsConetxt = (pageVariantsObj) => {
    setPageVariantsContext(pageVariantsObj);
  }
  return (
    <BrowserRouter>
      <PageVariantsContext.Provider
        value={{ pageVariantsContext, updatePageVariantsConetxt }}
      >
        <Layout />
      </PageVariantsContext.Provider>
    </BrowserRouter>
  );;;
}



