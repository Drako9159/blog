import Layout from "./components/Layout";
import Wrapper from "./components/Wrapper";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useEffect } from "react";
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
import { useErrorStore } from "./store/errors";

function App() {
  localStorage.getItem("themeMode") === null
    ? localStorage.setItem("themeMode", "day")
    : "";

  localStorage.getItem("languageMode") === null
    ? localStorage.setItem("languageMode", "english")
    : "";

  const setTheme = useThemeStore((state) => state.setTheme);
  const setToken = useAuthStore((state) => state.setToken);
  const setLanguageMode = useLanguageStore((state) => state.setLanguage);
  const setError = useErrorStore((state) => state.setError);
  setLanguageMode({ language: localStorage.getItem("languageMode") });
  //Reload theme inmediately

  setTheme({ themeMode: localStorage.getItem("themeMode") });
  //login in aplication app active
  useEffect(() => {
    async function loginApi() {
      try {
        await loginRequest(
          import.meta.env.VITE_USER_KEY,
          import.meta.env.VITE_USER_ROL
        ).then((response) =>
          setToken({ token: response.headers.authorization })
        );
      } catch (error) {
        setError({ code: error.response.status, message: error.code });
      }
    }
    loginApi();
  }, []);
  return (
    <Layout>
      <Wrapper>
        <BrowserRouter>
          <ScrollToTop></ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/blog" element={<Blog />}></Route>
            <Route path="/blog/:id" element={<Post />}></Route>
            <Route path="*" element={<NotFound></NotFound>}></Route>
          </Routes>
        </BrowserRouter>
      </Wrapper>
    </Layout>
  );
}

export default App;
