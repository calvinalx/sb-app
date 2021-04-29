import React, { useState, useEffect } from "react"
import { Helmet } from "react-helmet"
import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router-dom"

import Modal from "components/modal"
import Loader from "components/loader"

import { fetchMovie } from "../moviesSlice"
import { loadFallbackImage } from "common/utils"

const MovieDetail = () => {
  const { id } = useParams()
  const [image, setImage] = useState("")
  const { details, status } = useSelector((state) => state.movies)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchMovie(id))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  if (status === "succeeded" && details) {
    return (
      <>
        <Helmet>
          <title>{details.Title}</title>
        </Helmet>

        <section className="mb-8">
          <div className="relative">
            <div
              className="h-56 bg-gray-900 sm:h-72 lg:absolute lg:left-0 lg:h-full lg:w-1/2"
              onClick={() => setImage(details.Poster)}
            >
              <img
                className="w-full h-full object-cover cursor-pointer z-50"
                src={details.Poster}
                alt={details.Title}
                onError={loadFallbackImage}
              />
            </div>
            <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12 sm:px-6 lg:py-16">
              <div className="max-w-2xl mx-auto lg:max-w-none lg:mr-0 lg:ml-auto lg:w-1/2 lg:pl-10">
                <div className="h-6 w-max rounded-md bg-gray-500 px-2 text-white">
                  {details.Year}
                </div>
                <h2
                  className="mt-2 text-3xl font-extrabold text-gray-200 sm:text-4xl"
                  data-testid="movie-detail-title"
                >
                  {details.Title}
                </h2>
                <p className="text-gray-400">{details.Genre}</p>
                <p className="mt-6 text-lg text-gray-500">{details.Plot}</p>
                <p className="mt-6 text-gray-500">Cast: {details.Actors}</p>
                <div className="mt-8 overflow-hidden">
                  <dl className="-mx-8 -mt-8 flex flex-wrap">
                    <div className="flex flex-col px-8 pt-8">
                      <dt className="order-2 text-base font-medium text-gray-500">
                        Metascore
                      </dt>
                      <dd className="order-1 text-2xl font-extrabold text-yellow-400 sm:text-3xl">
                        {details.Metascore}
                      </dd>
                    </div>
                    <div className="flex flex-col px-8 pt-8">
                      <dt className="order-2 text-base font-medium text-gray-500">
                        IMDB
                      </dt>
                      <dd className="order-1 text-2xl font-extrabold text-yellow-400 sm:text-3xl">
                        {details.imdbRating}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Modal isOpen={image} onClose={() => setImage("")}>
          <img src={image} alt="Poster" />
        </Modal>
      </>
    )
  }

  return <Loader />
}

export default MovieDetail
