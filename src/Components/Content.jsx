import React , {useState} from 'react'
import './Content.css'
import axios from 'axios'


const Content = () => {

  const [text,setText]= useState("")

  const [movie,setMovie]= useState([])

  const changeText=(event)=>{
  setText(event.target.value)

  }
  const getMovie =(e)=>{
    e.preventDefault();

    axios.get(`http://www.omdbapi.com/?s=${text}&apikey=d62fac6b`)
    .then((response)=>{
      console.log(response);
      setMovie(response.data.Search)
    })

  }
  
  
  return (

    <div className='content'>
      <div className='header-middle flex-div'>
          <form className='search-box flex-div' onSubmit={getMovie} >
          <input type="text"placeholder='search' value ={text} onChange={changeText} />
          <button className='btn-form' type="submit" >Search</button>
          </form>
        </div>

        <div className='container'>
          
            {
              movie.map((value,index) =>{
                return(
                  
                     <div className='card'>
                    <img src={value.Poster} className='card-img' alt="" />
                    <div className='card-body'>
                    <h4 className='card-title'>{value.Year}</h4>
                    <h5 className='card-text'>{value.Title} </h5>
                    

                    </div>

                    </div>

                  
                )
              })
            }

          

        </div>
      
      
    </div>
    
    
  )
}

export default Content
