import ThemeContext from '../contexts/ThemeContext'
import './Layout.css'
import { useContext } from "react"

function Layout({children}) {

    const {value} = useContext(ThemeContext)

    return (
        <div className={"layout "+value}>
            {children}
        </div>
    )
}

export default Layout
