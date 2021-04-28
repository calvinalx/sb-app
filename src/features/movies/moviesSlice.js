import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit"
import axios from "axios"

import { renameProperty } from "common/utils"
import { OMDB_URL } from "config"

const DEFAULT_TITLE = "Marvel"

export const moviesAdapter = createEntityAdapter()

const initialState = moviesAdapter.getInitialState({
  title: DEFAULT_TITLE,
  page: 1,
  numOfPages: 1,
  status: "idle",
})

export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async (payload, { getState, dispatch }) => {
    const { title: currTitle, page: currPage } = getState().movies
    const title = payload?.title || currTitle
    const page = payload?.page || currPage

    dispatch(changeQuery({ title, page }))

    const response = await axios.get(`${OMDB_URL}&s=${title}&page=${page}`)

    return {
      movies: response.data.Search || [],
      count: response.data.totalResults || 0,
    }
  }
)

export const fetchMovie = createAsyncThunk("movies/fetchMovie", async (id) => {
  const response = await axios.get(`${OMDB_URL}&i=${id}`)
  return response.data
})

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    changeQuery: (state, action) => {
      const { title, page } = action.payload
      if (state.title !== title) moviesAdapter.removeAll(state)
      state.title = title
      state.page = page || 1
    },
  },
  extraReducers: {
    // Fetch Movies
    [fetchMovies.pending]: (state) => {
      state.status = "loading"
    },
    [fetchMovies.fulfilled]: (state, action) => {
      if (action.payload.movies.length > 0) {
        action.payload.movies.forEach((movie) =>
          renameProperty(movie, "imdbID", "id")
        )
        moviesAdapter.upsertMany(state, action.payload.movies)
        state.numOfPages = Math.ceil(action.payload.count / 10)
        state.status = "succeeded"
      } else {
        state.status = "failed"
      }
    },
    [fetchMovies.rejected]: (state, action) => {
      state.status = "failed"
      state.error = action.payload
    },

    // Fetch Single Movie
    [fetchMovie.pending]: (state) => {
      state.status = "loading"
    },
    [fetchMovie.fulfilled]: (state, action) => {
      state.details = action.payload
      state.status = "succeeded"
    },
    [fetchMovie.rejected]: (state, action) => {
      state.status = "failed"
      state.error = action.payload
    },
  },
})

export const { changeQuery } = moviesSlice.actions

export default moviesSlice.reducer

export const { selectAll: selectMovies } = moviesAdapter.getSelectors(
  (state) => state.movies
)
