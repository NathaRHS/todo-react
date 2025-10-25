import { useState } from 'react'

import Card from './Accueil/card'
import './App.css'
import Accueil from './Accueil/Accueil'
import Login from './login/Login'
import  {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>  
      <Route path='/' element={<Accueil/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    </BrowserRouter>
       
    </>
  )
}

export default App
