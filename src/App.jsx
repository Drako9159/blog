import Layout from "./components/Layout";
import Wrapper from "./components/Wrapper";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
//import Start from "./views/start/Start";
import NotFound from "./components/NotFound";
import About from "./views/About";
import Blog from "./views/Blog";
import Home from "./views/Home";
import Post from "./views/Post";
import ScrollToTop from "./utils/ScrollToTop";

import { useThemeStore } from "./store/theme";
import { useAuthStore } from "./store/auth";
import { loginRequest } from "./api/auth";
import { useLanguageStore } from "./store/language";

function App() {
  localStorage.getItem("themeMode") === null
    ? localStorage.setItem("themeMode", "day")
    : "";

  localStorage.getItem("languageMode") === null
    ? localStorage.setItem("languageMode", "english")
    : "";

  const [language, setLanguage] = useState(localStorage.getItem("language"));

  const getLibraryColors = useThemeStore((state) => state.libraryColors);
  const setColors = useThemeStore((state) => state.setColors);
  const setTheme = useThemeStore((state) => state.setTheme);
  const setToken = useAuthStore((state) => state.setToken);
  const setLanguageMode = useLanguageStore((state) => state.setLanguage);

  setLanguageMode({ language: localStorage.getItem("languageMode") });
  //Reload theme inmediately

  setTheme({ themeMode: localStorage.getItem("themeMode") });
  setColors({
    colors:
      localStorage.getItem("themeMode") === "day"
        ? getLibraryColors.day
        : getLibraryColors.night,
  });
  //login in aplication app active
  useEffect(() => {
    async function loginApi() {
      const response = await loginRequest("drako9159@gmail.com", "admin");
      const token = response.headers.authorization;
      setToken({ token: token });
    }
    loginApi();
  }, []);

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
