import Layout from "./components/Layout";
import Wrapper from "./components/Wrapper";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useState } from "react";
import Start from "./views/start/Start";
import About from "./views/About";

function App() {
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
          </Routes>
        </BrowserRouter>
      </Wrapper>
    </Layout>
  );
}

export default App;
