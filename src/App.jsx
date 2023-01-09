import Layout from "./components/Layout";
import Wrapper from "./components/Wrapper";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useState } from "react";
import Start from "./views/start/Start";
import About from "./views/About";
import Blog from "./views/Blog";
import Home from "./views/Home";

function App() {
  /**
   * Set theme day default
   */
  localStorage.getItem("theme") === null
    ? localStorage.setItem("theme", "day")
    : "";

  const [color, setColor] = useState(localStorage.getItem("theme"));

  localStorage.getItem("language") === null
    ? localStorage.setItem("language", "english")
    : "";
  const [language, setLanguage] = useState(localStorage.getItem("language"));
 

  return (
    <Layout color={color}>
      <Wrapper>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  color={color}
                  setColor={setColor}
                  language={language}
                  setLanguage={setLanguage}
                />
              }
            ></Route>
            <Route
              path="/about"
              element={
                <About
                  color={color}
                  setColor={setColor}
                  language={language}
                  setLanguage={setLanguage}
                />
              }
            ></Route>
            <Route
              path="/blog"
              element={
                <Blog
                  color={color}
                  setColor={setColor}
                  language={language}
                  setLanguage={setLanguage}
                />
              }
            ></Route>
          </Routes>
        </BrowserRouter>
      </Wrapper>
    </Layout>
  );
}

export default App;
