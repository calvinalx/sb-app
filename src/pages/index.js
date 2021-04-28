import { useSelector } from "react-redux"

import Layout from "components/layout"
import MovieList from "../features/movies/MovieList"
import MovieSearch from "features/movies/MovieSearch"

const Index = () => {
  const { status } = useSelector((state) => state.movies)

  return (
    <Layout>
      <MovieSearch />
      <MovieList />

      {status === "loading" && <p>Loading</p>}
    </Layout>
  )
}

export default Index
