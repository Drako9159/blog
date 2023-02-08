import Layout from "./components/Layout";
import Wrapper from "./components/Wrapper";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useEffect } from "react";
//import Start from "./views/start/Start";
import NotFound from "./components/NotFound";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import Post from "./pages/Post";
import ScrollToTop from "./utils/ScrollToTop";
import Movies from "./pages/Movies";

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

  const setTheme = useThemeStore((state) => state.setTheme);
  const setToken = useAuthStore((state) => state.setToken);
  const setLanguageMode = useLanguageStore((state) => state.setLanguage);
  setLanguageMode({ language: localStorage.getItem("languageMode") });
  //Reload theme inmediately

  setTheme({ themeMode: localStorage.getItem("themeMode") });
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
        console.log(error);
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
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/blog/:id" element={<Post />} />
            <Route path="*" element={<NotFound></NotFound>} />
          </Routes>
        </BrowserRouter>
      </Wrapper>
    </Layout>
  );
}

export default App;
