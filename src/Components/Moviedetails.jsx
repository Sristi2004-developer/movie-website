import React ,{useEffect, useState,useRef} from 'react'
import {useParams}  from 'react-router-dom'
import axios from 'axios'
import './Moviedetails.css'

const Moviedetails = () => {

  const {id} = useParams();
  const [movie,setMovie] = useState(null);
  const detailsRef=useRef(null);
  
     
  useEffect(() =>{
    const fetchMovieDetails = async() =>{
      try{
        const response =await axios.get(`http://www.omdbapi.com/?i=${id}&apikey=d62fac6b`)
        console.log(response.data);
        setMovie(response.data);
      }catch (error){
        console.error(`Error fetching movie details:`,error);
      }
    }
    fetchMovieDetails();
  },[id]);

  useEffect(()=>{
    if(movie && detailsRef.current){
      detailsRef.current.scrollIntoView(
        {behaviour:'smooth'} )
    }
  },[movie]);
   

  if(!movie){
    return <div>Loading..</div>
  }
  return (
    <div className='movie-details' ref={detailsRef}>
      
      {movie.Poster && <img src={movie.Poster} alt="" /> }
      
      <ul>
      <li><strong>Title:</strong>{movie.Title}
      </li>
      <li><strong>Genre:</strong>{movie.Genre}

        </li>

      
        <li><strong>Plot:</strong>{movie.Plot}

        </li>


        <li><strong>IMDb Rating:</strong>{movie.imdbRating}

        </li>

        

      </ul>
      
    </div>
  )
}

export default Moviedetails
