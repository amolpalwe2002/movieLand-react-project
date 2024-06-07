import { useEffect, useState } from 'react';
import Card from './Card.jsx'
const API_URL = "http://www.omdbapi.com?apikey=a7e73880"
import PropTypes from 'prop-types';

const Main = ({search}) => {
    const [movies, setMovies] = useState([])
    // const title = "spiderman";
    const fetchMovies = async () => {
        const response = await fetch(`${API_URL}&s=${search}`)
        const data = await response.json()
        setMovies(data.Search)
    }

    useEffect(() => {
        fetchMovies();
        // console.log(movies);
    }, [search])

  return (
      <div className="flex flex-wrap justify-center gap-8">
        {movies?.map((movie) => (
          <Card
            key={movie.imdbID}
            title={movie.Title}
            year={movie.Year}
            poster={movie.Poster}
          />
        ))}
      </div>
  )
}


Main.propTypes = {
  search: PropTypes.string
}

export default Main
