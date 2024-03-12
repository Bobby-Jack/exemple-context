import { useContext, useState } from 'react'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'

import { ThemeContextProvider } from './contexts/ThemeContext'

function App() {

  

  const rooter = createBrowserRouter([
    {path:'/',element:<Home/>},
    {path:'about/',element:<About/>},
  ])


  return (
    <>
    {/* le componnent ThemeContextProvider est le fournisseur du context Theme. */}
      <ThemeContextProvider>
        <RouterProvider router={rooter}/>

      </ThemeContextProvider>

    </>
  )
}

export default App
