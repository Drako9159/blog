import Layout from "./components/Layout";
import Wrapper from "./components/Wrapper";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useState } from "react";
//import Start from "./views/start/Start";
import NotFound from "./components/NotFound";
import About from "./views/About";
import Blog from "./views/Blog";
import Home from "./views/Home";
import Post from "./views/Post";
import ScrollToTop from "./utils/ScrollToTop";

import { useThemeStore } from "./store/theme";

function App() {
  localStorage.getItem("theme") === null
    ? localStorage.setItem("theme", "day")
    : "";

  localStorage.getItem("language") === null
    ? localStorage.setItem("language", "english")
    : "";

  localStorage.getItem("themeMode") === null
    ? localStorage.setItem("themeMode", "day")
    : "";

  const [language, setLanguage] = useState(localStorage.getItem("language"));

  const getLibraryColors = useThemeStore((state) => state.libraryColors);
  const setColors = useThemeStore((state) => state.setColors);
  const setTheme = useThemeStore((state) => state.setTheme);

  setTheme({ themeMode: localStorage.getItem("themeMode") });
  setColors({
    colors:
      localStorage.getItem("themeMode") === "day"
        ? getLibraryColors.day
        : getLibraryColors.night,
  });

  return (
    <Layout>
      <Wrapper>
        <BrowserRouter>
          <ScrollToTop></ScrollToTop>
          <Routes>
            <Route
              path="/"
              element={<Home language={language} setLanguage={setLanguage} />}
            ></Route>
            <Route
              path="/about"
              element={<About language={language} setLanguage={setLanguage} />}
            ></Route>
            <Route
              path="/blog"
              element={<Blog language={language} setLanguage={setLanguage} />}
            ></Route>
            <Route
              path="/blog/:id"
              element={<Post language={language} setLanguage={setLanguage} />}
            ></Route>
            <Route path="*" element={<NotFound></NotFound>}></Route>
          </Routes>
        </BrowserRouter>
      </Wrapper>
    </Layout>
  );
}

export default App;
