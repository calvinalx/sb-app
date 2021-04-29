import { Link, useLocation } from "react-router-dom"
import MovieSearch from "features/movies/MovieSearch"

const Header = () => {
  let location = useLocation()

  return (
    <header className="bg-gray-900">
      <div className="flex justify-between mx-auto max-w-3xl py-4 px-4 sm:px-6 lg:px-0">
        <Link to="/" className="flex items-center">
          <img
            className="rounded max-h-8 mr-2 text-white"
            src="/logo.svg"
            alt="Movie App"
          />
          <span className="text-white">Movie App</span>
        </Link>

        {location.pathname === "/" ? (
          <MovieSearch />
        ) : (
          <Link to="/" className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
          </Link>
        )}
      </div>
    </header>
  )
}

export default Header
