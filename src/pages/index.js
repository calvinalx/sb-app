import { useDispatch, useSelector } from "react-redux"

import Layout from "components/layout"
import MovieList from "../features/movies/MovieList"
import MovieSearch from "features/movies/MovieSearch"

import { fetchMovies } from "../features/movies/moviesSlice"
import { useInfiniteScroll } from "common/hooks"

const Index = () => {
  const dispatch = useDispatch()
  const { title, page, numOfPages, status } = useSelector(
    (state) => state.movies
  )
  const hasMore = page < numOfPages
  const isLoading = status === "loading"

  const [lastItemRef] = useInfiniteScroll(
    () => {
      dispatch(fetchMovies({ title: title, page: page + 1 }))
    },
    hasMore,
    isLoading
  )

  return (
    <Layout>
      <MovieSearch />
      <MovieList />
      <div ref={lastItemRef} />

      {status === "loading" && <p>Loading</p>}
    </Layout>
  )
}

export default Index
