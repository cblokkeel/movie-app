import React from 'react'
import './searchMovies.css'

const SearchMovies = ({ handleChange, searchBar }) => {
    return (
        <form className='search-movies-form'>
            <input type="text" placeholder='Search movies...' className='movies-searchbar' onChange={handleChange} value={searchBar}/>
            {/* <button className="submit-button" type='submit'>Search</button> */}
        </form>
    );
};

export default SearchMovies;