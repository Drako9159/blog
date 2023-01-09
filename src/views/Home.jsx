import Card1 from "./home/Card1"
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home({ color, setColor, language, setLanguage }){
    return (
        <>
          <Header color={color} setColor={setColor} language={language}></Header>
          <Card1 color={color} setColor={setColor} language={language}></Card1>
          <Footer
            color={color}
            language={language}
            setLanguage={setLanguage}
          ></Footer>
        </>
      );

}