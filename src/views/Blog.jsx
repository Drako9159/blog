import Header from "../components/Header";
import Footer from "../components/Footer";
import Card1 from "./blog/Card1";

export default function Blog({ color, setColor, language, setLanguage }) {
  return (
    <>
      <Header color={color} setColor={setColor} activeLink={"blog"} language={language}></Header>
      <Card1 color={color} language={language}></Card1>
      <Footer
        color={color}
        language={language}
        setLanguage={setLanguage}
      ></Footer>
    </>
  );
}
