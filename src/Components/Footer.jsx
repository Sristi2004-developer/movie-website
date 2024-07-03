import React from 'react'
import './Footer.css'
import facebook_icon from '../assets/facebook_icon.png'
import instagram_icon from '../assets/instagram_icon.png'
import twitter_icon from '../assets/twitter_icon.png'
import youtube_icon from '../assets/youtube_icon.png'

const sections=[
  {
    title: 'Support',
    items: ['FAQ','Documentation','Guides','API','Help Center']
  },
  {
    title: 'Company',
    items: ['About','Blog','Press','Jobs','Partners']
  },
  {
    title: 'Legal',
    items: ['Claims','Privacy','Terms','Policies','Conditions']
  },
  
]

const items =[
  {
    name:'Facebook',
    icon: facebook_icon,
    link: 'https://facebook.com/'
  },
  {
    name:'Instagram',
    icon: instagram_icon,
    link: 'https://instagram.com/'
  },
  {
    name:'Twitter',
    icon: twitter_icon,
    link: 'https://twitter.com/'
  },
  {
    name:'Youtube',
    icon: youtube_icon,
    link: 'https://youtube.com/'
  }

]
const Footer = () => {
  return (
    <>
   
    <div className='footer'>
      <div className='footer-icons'>
        {

          sections.map((section,index)=>(
           <div key={index}>
            <h5>{section.title}</h5>
            <ul>
              {section.items.map((item,i)=>(
                <li key={i}
                className='list'>{item}</li>
              ))}
              </ul> 
              </div>
          ))
        }
        <div className='social-icons'>
          <img src={facebook_icon} alt="" />
          <img src={instagram_icon} alt="" />
          <img src={twitter_icon} alt="" />
          <img src={youtube_icon} alt="" />

        </div>
        
      </div>
      
    </div>
    </>
  )
}

export default Footer
