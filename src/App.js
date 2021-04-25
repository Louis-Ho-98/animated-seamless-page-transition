import { createContext, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Layout from "./routes/Layout";

export const PageVariantsContext = createContext(null);

export function App() {
  const [pageVariantsContext, setPageVariantsContext] = useState(false);
  const updatePageVariantsConetxt = (pageVariantsObj) => {
    setPageVariantsContext(pageVariantsObj);
  };
  return (
    <BrowserRouter>
      <PageVariantsContext.Provider
        value={{ pageVariantsContext, updatePageVariantsConetxt }}
      >
        <Layout />
      </PageVariantsContext.Provider>
    </BrowserRouter>
  );
}
