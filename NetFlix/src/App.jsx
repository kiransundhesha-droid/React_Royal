import { Route, Routes } from 'react-router-dom'
import Navbar from './Component/Navbar'
import NetflixHome from './Component/NetflixHome'
import Netflixshow from './Component/Netflixshow'
import About from './Component/About'
import ContactUs from './Component/ContactUs'
import Watch from './Component/Watch'
import ErrorPageNotFound from './Component/ErrorPageNotFound'
import Movies from './Component/movies'

function App() {
  

  return (
    <>
      <Navbar/>

      <Routes>
        <Route path='/netflixhome' element={<NetflixHome/>}/>
        <Route path='/netflixshow' element={<Netflixshow/>}/>
        
        <Route path='/about' element={<About/>}/>
        <Route path='ContactUs' element={<ContactUs/>}/>
          <Route path='/Movies' element={<Movies/>}/>
        
        <Route path='watch/:Name' element={<Watch/>}/>
      
        
        <Route path='/*' element={<ErrorPageNotFound/>}/>
      </Routes>
    </>
  )
}

export default App
