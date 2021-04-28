import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import routes from "./routes"

ReactDOM.render(
  <Router>
    <Switch>
      {routes.map((route, i) => (
        <Route key={i} path={route.path}>
          <route.component />
        </Route>
      ))}
    </Switch>
  </Router>,
  document.getElementById("root")
)
