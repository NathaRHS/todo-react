import { useState } from 'react'

import Card from './Accueil/card'
import './App.css'
import Accueil from './Accueil/Accueil'
import LoginVrai from './login/LoginVrai'
import  {BrowserRouter,Routes,Route} from 'react-router-dom'
import Loading from './Accueil/loading/Loading'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>  
      <Route path='/' element={<Accueil/>}/>
      <Route path='/login' element={<LoginVrai/>}/>
      <Route path='/loading' element={<Loading/>}/>
    </Routes>
    </BrowserRouter>
       
    </>
  )
}

export default App
