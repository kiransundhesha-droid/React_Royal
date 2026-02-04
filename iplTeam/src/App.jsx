import './App.css'
import Navbar from './components/Navbar'
import {Routes,Route} from 'react-router-dom';
import ShowTeam from './components/ShowTeam';
import IplTeam from './components/IplTeam';
import ErrorMsg from './components/ErrorMsg';

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<ShowTeam/>}/>
      <Route path='/showTeam' element={<ShowTeam/>}/>
      <Route path='/iplteam/:name/:won' element={<IplTeam/>}/>
      <Route path='/*' element={<ErrorMsg/>}/>
    </Routes>
     </>
  )
}

export default App
