import { Link } from "react-router-dom"
import { loadFallbackImage } from "common/utils"

const Card = ({ id, title, poster, year }) => (
  <Link data-testid="movie-list-item" to={`/${id}`}>
    <div className="relative">
      <div className="focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500 group block w-full aspect-w-10 aspect-h-7 overflow-hidden">
        <img
          src={poster}
          alt={title}
          className="group-hover:opacity-75 object-cover pointer-events-none rounded-lg"
          style={{ minHeight: 250, maxHeight: 250 }}
          onError={loadFallbackImage}
        />
      </div>
      <p className="mt-2 block text-sm font-medium text-gray-500 truncate pointer-events-none">
        {title}
      </p>
      <p className="block text-sm font-medium text-gray-700 pointer-events-none">
        {year}
      </p>
    </div>
  </Link>
)

export default Card
