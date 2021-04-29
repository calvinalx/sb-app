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
    <form onSubmit={handleSearch} className="flex border rounded-3xl">
      <input
        value={query}
        placeholder={title}
        data-testid="movie-search-input"
        onChange={(e) => setQuery(e.target.value)}
        className="bg-transparent outline-none text-white pl-3 w-32"
        required
      />
      <input
        data-testid="movie-search-submit"
        type="submit"
        value="Search"
        className="rounded-3xl px-3 py-1 cursor-pointer hover:bg-gray-400 outline-none"
      />
    </form>
  )
}

export default MovieSearch
