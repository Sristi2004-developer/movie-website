import React, {useState} from 'react'
import './Topbar.css'
import menu_icon from '../assets/menu.png'
import logo from '../assets/movie-clapper-open.png'
import search_logo from '../assets/search.png'
import more_icon from '../assets/more.png'
import notification_icon  from '../assets/notification.png'
import profile_icon from '../assets/profile-user.png'
import caret_icon from '../assets/sort-down.png'



const Topbar = ({setSidemenu}) => {

  const [open,setOpen] = useState(false);
  return (
    <header className='flex-div'>
      <div className=' header-left flex-div'>
        <img className='menu-icon' onClick={()=>setSidemenu(prev=>prev===false?true:false)} src={menu_icon} alt=""/>
        <img className='logo'src={logo} alt=""/>
        <h2>MOVIE BINGE</h2>
        </div>
        

        <div className='header-middle flex-div'>
          <div className='search-box flex-div'>
          <input type="text"placeholder='search'/>
          <img src={search_logo} alt=""/>
          </div>

        <div className='header-right flex-div'>
          
          <img src={more_icon} className='more-icon' alt=""/>
          <img src={notification_icon} className='notification-icon' alt=""/>
          <div className='header-profile'onClick={()=>{setOpen(!open)}}>
          <img src={profile_icon} className='user-icon' alt=""/>
          <img src={caret_icon} className='caret-icon' alt=""/>

          </div>
          <div className={`dropdown ${open? 'active' : 'inactive'}`}>
            <p>Sign Out</p>
          </div>

        </div>
        

      </div>

      
    </header>
    
  )
}


export default Topbar
