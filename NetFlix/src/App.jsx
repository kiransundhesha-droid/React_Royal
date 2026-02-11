import { Form, Route, Routes } from 'react-router-dom'
import Navbar from './Component/Navbar'
import NetflixHome from './Component/NetflixHome'
import Netflixshow from './Component/Netflixshow'
import About from './Component/About'
import ContactUs from './Component/ContactUs'
import Watch from './Component/Watch'
import ErrorPageNotFound from './Component/ErrorPageNotFound'
import Movies from './Component/movies'
import UseState from './Component/UseState'
import Employee from './Component/Employee'
import ReactForm from './Component/ReactFormHook/ReactForm'
import Dropdown from './Component/Dropdown'

function App() {
  

  return (
    <>
      <Navbar/>
      {/* <UseState></UseState> */}
     
      <Routes>
        <Route path='/netflixhome' element={<NetflixHome/>}/>
        <Route path='/netflixshow' element={<Netflixshow/>}/>
        
        <Route path='/about' element={<About/>}/>
        <Route path='ContactUs' element={<ContactUs/>}/>
          <Route path='/Movies' element={<Movies/>}/>
        
        <Route path='/Watch/:Name' element={<Watch/>}/>
      
        <Route path='UseState' element={<UseState/>}/>
        <Route path='/Employee' element={<Employee/>}/>
        <Route path='/Form' element={<ReactForm/>}/>
        <Route path='/Dropdown' element={<Dropdown/>}/>
      
        
        {/* <Route path='/*' element={<ErrorPageNotFound/>}/> */}
      </Routes>
    </>
  )
}

export default App
