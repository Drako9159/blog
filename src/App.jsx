import Layout from "./components/Layout";
import Wrapper from "./components/Wrapper";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Start from "./views/start/Start";
import About from "./views/about/About";

function App() {
  const [color, setColor] = useState("day");
  return (
    <Layout color={color}>
      <Wrapper>
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
      </Wrapper>
    </Layout>
  );
}

export default App;
