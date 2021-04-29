import { render, screen, fireEvent } from "@testing-library/react"
import { Provider } from "react-redux"

import MovieSearch from "."

import store from "store"

const renderMovieSearch = () =>
  render(
    <Provider store={store}>
      <MovieSearch />
    </Provider>
  )

test("Search for movies", () => {
  renderMovieSearch()
  const searchQuery = "My Hero Academia"

  const searchInput = screen.getByTestId("movie-search-input")
  expect(searchInput).toBeInTheDocument()
  fireEvent.change(searchInput, { target: { value: searchQuery } })
  expect(searchInput).toHaveValue(searchQuery)

  const submitButton = screen.getByTestId("movie-search-submit")
  fireEvent.click(
    submitButton,
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    })
  )

  const { title, status } = store.getState().movies
  expect(title).toBe(searchQuery)
  expect(status).toBe("loading")
})
