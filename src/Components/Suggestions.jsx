import React, { useState, useEffect,useRef } from 'react';
import './Suggestions.css';

const oscarWinningMovies=[
   {title: "Titanic",
    imdbID: "tt0120338"
   } ,
   {title: "Slumdog Millionaire",
    imdbID: "tt1010048"
   } ,
   {title: "The Godfather",
    imdbID: "tt0068646"
   } ,
   {title: "Forrest Grump",
    imdbID: "tt0109830"
   } ,
   {title: "A Beautiful Mind",
    imdbID: "tt0268978"
   } ,
   {title: "La la land",
    imdbID: "tt3783958"
   } ,
   {title: "Life of Pi",
    imdbID: "tt0454876"
   } ,
   {title: "Schindler's List",
    imdbID: "tt0108052"
   } 

]
const Suggestions = () => {
    const [suggestions, setSuggestions] = useState([]);
    const [error, setError] = useState(null);
    const suggestionsRef=useRef(null);
    

    useEffect(() => {
        const fetchOscarWinningMovies = async () => {
            try {
                const movieDetails = await Promise.all(
                    oscarWinningMovies.map(async (movie) => {
                        const response = await fetch(`http://www.omdbapi.com/?i=${movie.imdbID}&apikey=d62fac6b`);
                        return response.json();
                    })
                );
                setSuggestions(movieDetails);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchOscarWinningMovies();
    }, []);
    const scrollToSuggestions =() =>{
        suggestionsRef.current.scrollIntoView({behaviour:'smooth'});
    }

    
   

    return (
        <div className='suggestions-container'>
            <h2>Oscar-Winning Movies</h2>
            
            <div ref={suggestionsRef}>
            {error? (
                <div>Error:{error}</div>
            ) : (
                
            <ul>
                {suggestions.length>0 ?(
                  suggestions.map((movie, index) => (
                    <li key={index}>
                       
                        <div className='suggestions-image'>
                        <img src={movie.Poster} alt={`${movie.Title} poster`} />
                    

                        </div>
                        <h3>{movie.Title}</h3>

                     <p>{movie.Year}</p>
                        
                    </li>  
                ))
                
                ) : (
                    <div>No movies found</div>
                )}
            
            </ul>
            )}    
            </div>
            
            
        </div>
    );
};

export default Suggestions;