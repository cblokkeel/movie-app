import { Component } from 'react'
import './App.css'
import DisplayMovies from './components/DisplayMovies/DisplayMovies'
import NavArrows from './components/NavArrows/NavArrows'
import SearchMovies from './components/SearchMovies/SearchMovies'

class App extends Component {
  constructor() {
    super()
    this.state = {
      'searchBar': '',
      'movies': {},
      'page': 1,
      'totalPages': 1
    }
  }

  handleChange = e => {
    this.setState({ searchBar: e.target.value })
    this.fetchData(this.state.page)
  }

  changeMoviesData = (data) => {
    this.setState({ movies: data })
    this.setState({ totalPages: data.total_pages })
  }

  fetchData = async (page) => {
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=9b338157d5ebb394c709552b0aa23e36&language=en-US&query=${this.state.searchBar}&page=${page}&include_adult=false`)
    const data = await res.json()
    this.changeMoviesData(data)
  }

  handleClick = e => {
    const classList =  Array.from(e.target.classList)
    let actualPage = this.state.page
    if (classList.includes('available')) {
      if(classList.includes('next')) {
        this.setState({ page: this.state.page + 1 })
        actualPage++
      } else {
        this.setState({ page: this.state.page - 1 })
        actualPage--
      }
      this.fetchData(actualPage)
    }
  }


  render() {
    return (
      <div className="App">
        <SearchMovies searchBar={this.state.searchBar} handleChange={this.handleChange}/>
        <DisplayMovies movies={this.state.movies}/>
        <NavArrows handleClick={this.handleClick} page={this.state.page} totalPages={this.state.totalPages}/>
      </div>
    )
  }
}

export default App;
