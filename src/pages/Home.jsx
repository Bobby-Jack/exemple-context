import { useContext } from "react"
import ThemeContext from "../contexts/ThemeContext"
import { Link } from "react-router-dom"
import Layout from "./Layout"
export default function Home() {
    // on peut récuppèrer les différent attribut du context ThemeContext de cette manière ...
    const {value, changeValue, word} = useContext(ThemeContext)

    return (
        <Layout>
            
            <h1>HOME PAGE</h1>
            <ul>
                <li><Link to={'/'}>home</Link></li>
                <li><Link to={'/about'}>about</Link></li>
            </ul>
            <h2>theme: {value}</h2>
            <button onClick={()=>{changeValue()}}>change</button>
            <h2>word: {word}</h2>

        </Layout>
    )
}