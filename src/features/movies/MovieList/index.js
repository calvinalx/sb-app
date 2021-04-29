import React from "react"
import { useSelector } from "react-redux"

import Card from "components/card"

import { selectMovies } from "../moviesSlice"

const MovieList = () => {
  const movies = useSelector(selectMovies)

  return (
    <section className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
      {movies.map((movie) => (
        <Card
          key={movie.id}
          id={movie.id}
          title={movie.Title}
          poster={movie.Poster}
          year={movie.Year}
        />
      ))}
    </section>
  )
}

export default MovieList
