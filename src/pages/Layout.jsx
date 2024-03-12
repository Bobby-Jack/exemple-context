import ThemeContext from '../contexts/ThemeContext'
import './Layout.css'
import { useContext } from "react"

function Layout({children}) {

    const {value} = useContext(ThemeContext)

    return (
        <div className={value=='dark'?"layout dark":"layout light"}>
            {children}
        </div>
    )
}

export default Layout