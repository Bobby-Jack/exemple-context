import { createContext } from "react";
import { useState } from "react";


// ceci représente le context, çàd les donné qu'on veux concerver entre divers composent
// dans ce cas ci on fourni un objet ayant une valeur et une fonction 
// leurs véritable valeur seront donné dans le ThemeContextProvider
const ThemeContext = createContext({
    word: '',
    changeWord: ()=>{},
    value: '',
    changeValue: ()=>{}
})

export default ThemeContext;


//ceci est un composent qui fournira le context à son enfant (ici ça sera App.jsx)

const ThemeContextProvider = ({children}) => {

    // les stat sont gèrer ici ainsi que les fonction de modification
    const [theme, setTheme] = useState('dark')
    const [word, setWord] = useState('')


    
    function toggleTheme() {
        if (theme=='dark') {
        setTheme('light')
        }else{
        setTheme('dark')
        }
    }

    // on retourne le context en mode fournisseur (c'est le .Provider) et on initialise les valeur avec les stat et les fonctions fait plus haut
    return (
        <ThemeContext.Provider value={{
            value: theme,
            changeValue: toggleTheme,
            word: word,
            changeWord: setWord
        }}>
            {children}
        </ThemeContext.Provider>
    )
}

export {ThemeContextProvider}
