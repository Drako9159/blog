import Layout from "./components/Layout";
import Wrapper from "./components/Wrapper";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import Start from "./views/start/Start";
import About from "./views/About";
import Blog from "./views/Blog";

function App() {
 
  /**
   * Set theme day default
   */
  localStorage.getItem("theme") === null ? localStorage.setItem("theme", "day") : "";


  const [color, setColor] = useState(localStorage.getItem("theme"));

  return (
    <Layout color={color}>
      <Wrapper>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<Start color={color} setColor={setColor} />}
            ></Route>
            <Route
              path="/about"
              element={<About color={color} setColor={setColor} />}
            ></Route>
            <Route
              path="/blog"
              element={<Blog color={color} setColor={setColor} />}
            ></Route>
          </Routes>
        </BrowserRouter>
      </Wrapper>
    </Layout>
  );
}

export default App;
