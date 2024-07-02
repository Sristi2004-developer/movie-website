import React from 'react'
import './Sidemenu.css'
import comedy from '../assets/comedy.png'
import entertainment from '../assets/entertainment.png'
import home from '../assets/home.png'
import horror from '../assets/horror.png'
import kids from '../assets/Kids.png'
import languages from '../assets/languages.png'
import scifi from '../assets/sci-fi.png'


const Sidemenu = ({sidemenu}) => {
  return (
    <div className={`sidemenu  ${sidemenu?"":"small-sidemenu"}`}>
      <div className='links'>
        <div className='side-link'>
          <img src={home} alt="" /><p>Home</p>
        </div>

        <div className='side-link'>
          <img src={comedy} alt="" /><p>Comedy</p>
        </div>

        <div className='side-link'>
          <img src={entertainment} alt="" /><p>Entertainment</p>
        </div>

        <div className='side-link'>
          <img src={horror} alt="" /><p>Horror</p>
        </div>

        <div className='side-link'>
          <img src={kids} alt="" /><p>Kids</p>
        </div>

        <div className='side-link'>
          <img src={languages} alt="" /><p>Languages</p>
        </div>

        <div className='side-link'>
          <img src={scifi} alt="" /><p>Sci-fi</p>
        </div>
        <hr/>
      </div>
      
    </div>
  )
}

export default Sidemenu
