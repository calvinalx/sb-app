import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { fetchMovies } from "../moviesSlice"

const MovieSearch = () => {
  const [query, setQuery] = useState("")
  const dispatch = useDispatch()
  const { title } = useSelector((state) => state.movies)

  const handleSearch = (e) => {
    e.preventDefault()
    dispatch(fetchMovies({ title: query, page: 1 }))
  }

  return (
    <form onSubmit={handleSearch}>
      <input
        value={query}
        placeholder={title}
        data-testid="movie-search-input"
        onChange={(e) => setQuery(e.target.value)}
      />
      <input data-testid="movie-search-submit" type="submit" />
    </form>
  )
}

export default MovieSearch
