import { render, screen } from "@testing-library/react"
import { BrowserRouter as Router, Switch } from "react-router-dom"
import { configureStore } from "@reduxjs/toolkit"
import { Provider } from "react-redux"

import MovieDetail from "."

import moviesReducer from "../moviesSlice"

const preloadedState = {
  movies: {
    details: {
      Title: "SpongeBob SquarePants",
      Year: "1999–",
      Rated: "TV-Y",
      Released: "01 May 1999",
      Runtime: "23 min",
      Genre: "Animation, Comedy, Family, Fantasy",
      Director: "N/A",
      Writer:
        "Stephen Hillenburg, Tim Hill, Nick Jennings, Derek Drymon, Paul Tibbitt, Zeus Cervas, Casey Alexander, Steve Oedekerk",
      Actors: "Tom Kenny, Bill Fagerbakke, Rodger Bumpass, Clancy Brown",
      Plot:
        "The misadventures of a talking sea sponge who works at a fast food restaurant, attends a boating school, and lives in an underwater pineapple.",
      Language: "English, Spanish, Irish, Korean",
      Country: "USA, Spain",
      Awards:
        "Nominated for 10 Primetime Emmys. Another 53 wins & 51 nominations.",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNTk2NzEyNTQtZTQ5MS00MjAyLTgzMDMtNDNkYTBkM2M2OTU3XkEyXkFqcGdeQXVyODUwNjEzMzg@._V1_SX300.jpg",
      Ratings: [
        {
          Source: "Internet Movie Database",
          Value: "8.2/10",
        },
      ],
      Metascore: "N/A",
      imdbRating: "8.2",
      imdbVotes: "84,672",
      imdbID: "tt0206512",
      Type: "series",
      totalSeasons: "12",
      Response: "True",
    },
  },
}

const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
  preloadedState,
})
store.dispatch = jest.fn(store.dispatch)

const renderMovieDetail = () =>
  render(
    <Provider store={store}>
      <Router>
        <Switch>
          <MovieDetail />
        </Switch>
      </Router>
    </Provider>
  )

it("Renders Movie detail correctly", () => {
  renderMovieDetail()

  screen.findByTestId("movie-detail-title").then((children) => {
    expect(children).toHaveTextContent("SpongeBob")
  })
})
