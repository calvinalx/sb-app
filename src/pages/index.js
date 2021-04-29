import { useDispatch, useSelector } from "react-redux"

import Layout from "components/layout"
import Loader from "components/loader"
import MovieList from "../features/movies/MovieList"

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
      <MovieList />
      <div ref={lastItemRef} />
      <div className="my-6">{status === "loading" && <Loader />}</div>
    </Layout>
  )
}

export default Index
