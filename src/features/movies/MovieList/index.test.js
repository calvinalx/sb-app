import { render, screen } from "@testing-library/react"
import { BrowserRouter as Router } from "react-router-dom"
import { configureStore } from "@reduxjs/toolkit"
import { Provider } from "react-redux"

import MovieList from "."

import moviesReducer from "../moviesSlice"

const preloadedState = {
  movies: {
    ids: ["tt4154664", "tt3067038", "tt3438640"],
    entities: {
      tt4154664: {
        Title: "Captain Marvel",
        Year: "2019",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_SX300.jpg",
        id: "tt4154664",
      },
      tt3067038: {
        Title: "Marvel One-Shot: Agent Carter",
        Year: "2013",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BZDIwZTM4M2QtMWFhYy00N2VmLWFlMjItMzI3NjBjYTc0OTMxXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_SX300.jpg",
        id: "tt3067038",
      },
      tt3438640: {
        Title: "Marvel One-Shot: All Hail the King",
        Year: "2014",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BZGFkMTZkMDQtNzM4Yy00YWEwLTkzOWEtZTMyNDRlNmJhYWJhXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_SX300.jpg",
        id: "tt3438640",
      },
    },
  },
}

const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
  preloadedState,
})

const renderMovieList = () =>
  render(
    <Provider store={store}>
      <Router>
        <MovieList />
      </Router>
    </Provider>
  )

it("Renders list of movies", async () => {
  renderMovieList()

  screen
    .findAllByTestId("movie-list-item")
    .then((children) => expect(children).toHaveLength(3))
})
