import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Home2 from './pages/Home2'
import HeaderWithAuth from './components/HeaderWithAuth'
import HeaderWithoutAuth from './components/HeaderWithoutAuth'
import Membership from './pages/Membership';
import Story from './pages/Story'
import Write from './pages/Write'


function App() {
  const [isAuth ,setIsAuth] = useState(true)

  return (
    <>
      
     <BrowserRouter>
        {isAuth?<HeaderWithAuth/>:<HeaderWithoutAuth/>}
        <Routes>
          {
            isAuth?<Route path='/' element={<Home/>}></Route>:<Route path='/' element={<Home2/>}></Route>
          }
          <Route path="/story" element={<Story/>}></Route>
          <Route path='/membership' element={<Membership/>}></Route>
          <Route path='/write' element={<Write/>}></Route>
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
