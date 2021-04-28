import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router-dom"

import { fetchMovie } from "./moviesSlice"

const MovieDetail = () => {
  const { id } = useParams()
  const { details } = useSelector((state) => state.movies)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchMovie(id))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  if (details) {
    return (
      <section>
        <div data-testid="movie-detail-title">{details.Title}</div>
      </section>
    )
  }

  return <p>Loading</p>
}

export default MovieDetail
