import React, {useState} from 'react'
import './Topbar.css'
// import menu_icon from '../assets/menu.png'
import logo from '../assets/movie-clapper-open.png'

import more_icon from '../assets/more.png'
import notification_icon  from '../assets/notification.png'
import profile_icon from '../assets/profile-user.png'
import caret_icon from '../assets/caret-down.png'




const Topbar = ({scrollToSuggestions,handleOpenModal}) => {
  

 
  
  
  

  const [open,setOpen] = useState(false);
  return (
    <header className='flex-div'>
      <div className=' header-left flex-div'>
       
        <img className='logo'src={logo} alt=""/>
        <h2>MOVIE BINGE</h2>
        </div>
        

        
  

        <div className='header-right flex-div'>
          
        <button onClick={scrollToSuggestions}>SUGGESTIONS</button>
          
         
          
        </div>
        

      

      
    </header>
    
  )
}


export default Topbar
