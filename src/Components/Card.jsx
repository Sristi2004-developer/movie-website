import React from 'react'
import './Card.css'
import cards_data from '../assets/Cards_data'


const Card = ({title,category}) => {
  return (
    <div className='cards'>
      <h2>{title?title:"Most Popular"}</h2>
      <div className='card-list'>
        {cards_data.map((card,index)=>{
          return <div className='card' key={index}>
            <img src={card.image} alt="" />
            <p>{card.name}</p>
            </div>
        })}
      </div>
      
    </div>
  )
}

export default Card
