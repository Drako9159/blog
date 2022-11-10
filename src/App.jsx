import Header from "./components/Header";
import Layout from "./components/Layout";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [color, setColor] = useState("black");
  return (
    <Layout color={color}>
      <Wrapper>
        <Header color={color} setColor={setColor}></Header>
        <Footer></Footer>
      </Wrapper>
    </Layout>
  );
}

export default App;
