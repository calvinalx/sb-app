import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import store from "./store"
import routes from "./routes"

import { fetchMovies } from "./features/movies/moviesSlice"

import "./index.css"

store.dispatch(fetchMovies())

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        {routes.map((route, i) => (
          <Route key={i} path={route.path}>
            <route.component />
          </Route>
        ))}
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
)
