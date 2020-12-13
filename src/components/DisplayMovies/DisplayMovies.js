import React from 'react'
import './displayMovies.css'


const DisplayMovies = ({ movies }) => {
    return (
        <div className='movies-container'>
            {   
                movies.results ? (
                    movies.results.map(movie => {
                        return <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt='' className='movie' />
                    })
                ) : (
                    <p>Search for movies !</p>
                )
                
            }
        </div>
    );
};

export default DisplayMovies;