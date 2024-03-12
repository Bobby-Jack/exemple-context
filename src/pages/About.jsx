import { useContext } from "react"
import ThemeContext from "../contexts/ThemeContext"
import { Link } from "react-router-dom"
import Layout from "./Layout"
export default function About() {
    const {value, changeValue, word, changeWord} = useContext(ThemeContext)
    return (
        <Layout>
            <h1>ABOUT PAGE</h1>
            <ul>
                <li><Link to={'/'}>home</Link></li>
                <li><Link to={'/about'}>about</Link></li>
            </ul>
            <h2>theme: {value}</h2>
            <button onClick={()=>{changeValue()}}>change</button>
            <h2>{word}</h2>
            <input onChange={(e)=>{changeWord(e.target.value)}}/>
        </Layout>
    )
}