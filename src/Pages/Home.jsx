import React from 'react'
import './Home.css'
import Sidemenu from '../Components/Sidemenu'
import Card from '../Components/Card'

const Home = ({sidemenu}) => {
  return (
    <>
    <Sidemenu sidemenu={sidemenu}/>
    <div className={`container ${sidemenu?"":'large-container'}`}>
      <Card/>
      <div className='more-cards'>
      <Card title={"Movies we think you will like"}/>
      <Card title={"Upcoming"}/>
      <Card title={"Top 14 Movies "}/>
      <Card title={"MovieBinge Originals And Exclusives"}/>


      </div>
    </div>
      
    </>
  )
}

export default Home
