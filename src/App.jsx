import React,{useState,useRef} from 'react'
import Topbar from './Components/Topbar'
import { Route ,Routes} from 'react-router-dom'
import Home from './Pages/Home'
import Video from './Pages/Video'
// import Footer from './Components/Footer'
import Content from './Components/Content'
import Moviedetails from './Components/Moviedetails'
import Suggestions from './Components/Suggestions'




const App = () => {
  const [showSuggestions,setShowSuggestions]=useState(false);
  const suggestionsRef=useRef(null);
  const scrollToSuggestions=() =>{
    setShowSuggestions(true)
    suggestionsRef.current.scrollIntoView({behaviour:'smooth'})
  }
 

  // const [sidemenu,setSidemenu] = useState(false);
  return (
   
       <div >
      
      <Topbar scrollToSuggestions={scrollToSuggestions}/>
      
      <Routes>
        <Route path='/' element ={<Home  />} />
        <Route path='/video/:categoryId/:videoId' element={<Video/>} />
        <Route path="/movies" element={<Content/>} />
        <Route path= "/movie/:id" element={<Moviedetails />} />
        
      </Routes>
      <Content/>
      <div ref={suggestionsRef}>
        {showSuggestions && <Suggestions/>}
        
      </div>
      
      </div>
         
  
  )
}

export default App
