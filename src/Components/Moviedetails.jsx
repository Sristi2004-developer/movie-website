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
      <h2>{movie.Title}</h2>
      {movie.Poster && <img src={movie.Poster} alt="" /> }
      
      <ul>
        <li><strong>Year:</strong>{movie.Year}

        </li>


        <li><strong>IMDb Rating:</strong>{movie.imdbRating}

        </li>

        <li><strong>Rated:</strong>{movie.Rated}

        </li>
      </ul>
      
    </div>
  )
}

export default Moviedetails
