import Card1 from "./home/Card1";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home({ language, setLanguage }) {
  return (
    <>
      <Header language={language}></Header>
      <Card1 language={language}></Card1>
      <Footer language={language} setLanguage={setLanguage}></Footer>
    </>
  );
}
