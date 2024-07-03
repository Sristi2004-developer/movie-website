import React,{useState} from 'react'
import Topbar from './Components/Topbar'
import { Route ,Routes} from 'react-router-dom'
import Home from './Pages/Home'
import Video from './Pages/Video'
import Footer from './Components/Footer'
import Content from './Components/Content'

const App = () => {

  const [sidemenu,setSidemenu] = useState(false);
  return (
    <div>
      <Topbar setSidemenu={setSidemenu}/>
      <Routes>
        <Route path='/' element ={<Home  sidemenu={sidemenu}/>} />
        <Route path='/video/:categoryId/:videoId' element={<Video/>} />
      </Routes>
      <Content/>

      <Footer/>
      
      
    </div>
  )
}

export default App
