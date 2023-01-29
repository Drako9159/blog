import Layout from "./components/Layout";
import Wrapper from "./components/Wrapper";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import Start from "./views/start/Start";
import NotFound from "./components/NotFound";
import About from "./views/About";
import Blog from "./views/Blog";
import Home from "./views/Home";
import Post from "./views/Post";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  /**
   * Set theme day default
   */
  localStorage.getItem("theme") === null
    ? localStorage.setItem("theme", "day")
    : "";

  localStorage.getItem("language") === null
    ? localStorage.setItem("language", "english")
    : "";
   

  const [color, setColor] = useState(localStorage.getItem("theme"));

  const [language, setLanguage] = useState(localStorage.getItem("language"));

  

  return (
    
    <Layout color={color}>
     
      <Wrapper>
        
        <BrowserRouter>
        <ScrollToTop></ScrollToTop>
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
            <Route
              path="/blog/:id"
              element={
                <Post
                  color={color}
                  setColor={setColor}
                  language={language}
                  setLanguage={setLanguage}
                  
                />
              }
            ></Route>
            <Route path="*" element={<NotFound color={color}></NotFound>}></Route>
          </Routes>
        </BrowserRouter>
      </Wrapper>
    </Layout>
  );
}

export default App;
