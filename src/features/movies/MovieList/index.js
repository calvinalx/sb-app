import React from "react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

import { selectMovies } from "../moviesSlice"

const MovieList = () => {
  const movies = useSelector(selectMovies)

  return (
    <section>
      {movies.map((m, i) => (
        <Link key={i} to={`/${m.id}`}>
          <div>
            <img src={m.Poster} alt={m.Title} />
            {m.Title}
          </div>
        </Link>
      ))}
    </section>
  )
}

export default MovieList
