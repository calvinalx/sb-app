import Movies from "pages/index"
import MovieDetail from "pages/detail"

const routes = [
  {
    path: "/:id",
    component: MovieDetail,
  },
  {
    path: "/",
    component: Movies,
  },
]

export default routes
