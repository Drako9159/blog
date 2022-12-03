import Header from "../../components/Header"
import Footer from "../../components/Footer"

export default function Start({color, setColor}){
    return <>
        <Header color={color} setColor={setColor}></Header>
        <Footer color={color}></Footer>
        
    </>
}