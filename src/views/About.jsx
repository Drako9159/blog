import Header from "../components/Header";
import Footer from "../components/Footer"
import Card1 from "./about/Card1"

export default function About({ color, setColor, language}) {
  return (
    <>
      <Header color={color} setColor={setColor} activeLink={"about"}></Header>
      <Card1 color={color}></Card1>
      <Footer color={color} language={language}></Footer>
    </>
  );
}
