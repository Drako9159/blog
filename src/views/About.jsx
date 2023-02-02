import Header from "../components/Header";
import Footer from "../components/Footer";
import Card1 from "./about/Card1";

export default function About() {
  return (
    <>
      <Header activeLink={"about"}></Header>
      <Card1></Card1>
      <Footer></Footer>
    </>
  );
}
