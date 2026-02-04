import { Route, Routes } from 'react-router-dom'
import Navbar from './Component/Navbar'
import NetflixHome from './Component/NetflixHome'
import Netflixshow from './Component/Netflixshow'
import About from './Component/About'
import ContactUs from './Component/ContactUs'
function App() {
  

  return (
    <>
      <Navbar/>

      <Routes>
        <Route path='/netflixhome' element={<NetflixHome/>}/>
        <Route path='/netflixshow' element={<Netflixshow/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='ContactUs' element={<ContactUs/>}/>
      </Routes>
    </>
  )
}

export default App
