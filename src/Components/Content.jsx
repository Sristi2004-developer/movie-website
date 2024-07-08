import React , {useState} from 'react'
import './Content.css'
// import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Moviedetails from './Moviedetails'
// import Moviedetails from './Moviedetails'



const Content = () => {

  const [text,setText]= useState("")

  const [movie,setMovie]= useState([])
  const [loading, setLoading]= useState(null);
  const [error,setError]= useState(null);
  const navigate = useNavigate()
  

  const changeText=(event)=>{
  setText(event.target.value)

  }
  const getMovie = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try{
      const response =await fetch(`https://www.omdbapi.com/?s=${text}&apikey=d62fac6b`)
      const data = await response.json();
      console.log(data);
      if(data.Response === 'True'){
        setMovie(data.Search);
      }else {
        setError('Error fetching movies.Kindly try again')
      }
    }catch(error){
      console.error('Error fetching movies:',error);
      setError('Error fetching movies.Kindly try again')
    } finally{
      setLoading(null);
    }
    



  }
    


    
      // Await fetch(`http://www.omdbapi.com/?s=${text}&apikey=d62fac6b`);
      // const data = await response.json();
      // .then(response =>
      //   response.json())
      //   .then(data =>{
      //     console.log(data);
          // if(data.Response === 'True'){
          //   setMovie(data.Search);
          // }else {
          //   setError('Error fetching movies.Kindly try again')
          // }

        


        // })
  // .catch(error=>{
  //     console.error('Error fetching movies:',error);
  //     setError('Error fetching movies.Kindly try again')
  //   } )
  // } finally{
  //     setLoading(null);
  //   }
  // };

  
  const handlePosterClick = (id) =>{
   
    navigate(`/movie/${id}`);
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
            
                {loading && <p>Loading..</p>}
            {error && <p> {error} </p>}
            {!loading && !error && movie.length ===0 && <p>No movies found</p>}
            



          {
            movie.map((value) =>{
              return(
                
                   <div key={value.imdbID} className='card' onClick={()=>
                    handlePosterClick(value.imdbID) }>
                  <img src={value.Poster} className='card-img' alt="" />
                  <div className='card-body'>
                  <h4 className='card-title'>{value.Year}</h4>
                  <h5 className='card-text'>{value.Title} </h5>
                  

                  </div>

                  </div>

                
              )
            })
          }
          
        <Moviedetails/>

      </div>
      
      
        
       
    
      
      
    </div>
    
      
  )
}

export default Content
