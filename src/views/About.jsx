import Header from "../components/Header";
import Footer from "../components/Footer";
import Card1 from "./about/Card1";

export default function About({ language }) {
  return (
    <>
      <Header activeLink={"about"} language={language}></Header>
      <Card1 language={language}></Card1>
      <Footer language={language}></Footer>
    </>
  );
}
