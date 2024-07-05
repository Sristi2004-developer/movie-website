import React,{useState} from 'react'
import Topbar from './Components/Topbar'
import { Route ,Routes} from 'react-router-dom'
import Home from './Pages/Home'
import Video from './Pages/Video'
import Footer from './Components/Footer'
import Content from './Components/Content'
import Moviedetails from './Components/Moviedetails'


const App = () => {

  // const [sidemenu,setSidemenu] = useState(false);
  return (
    
    <div>
      <Topbar />
      <Routes>
        <Route path='/' element ={<Home  />} />
        <Route path='/video/:categoryId/:videoId' element={<Video/>} />
        <Route path="/movies" element={<Content/>} />
        <Route path= "/movie/:id" element={<Moviedetails />} />
      </Routes>
      <Content/>

      <Footer/>
      
      
    </div>
  
  )
}

export default App
