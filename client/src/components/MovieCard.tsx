import { useState } from 'react'
import { Movie } from '../types/movie'
import '../styles/movie-card.scss'

interface MovieCardProps {
  movie: Movie
}

export default function MovieCard({ movie }: MovieCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative flex items-center justify-center rounded-md bg-white shadow-md transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-2">
        <img
          className="duration-400 mx-auto rounded transition-all ease-in-out hover:opacity-80 hover:shadow-lg hover:shadow-black/30"
          src={movie.poster}
          alt={movie.title}
          style={{ width: '100px' }}
        />
        {isHovered && (
          <div className="bg-white bg-opacity-90 p-2">
            <h3 className="text-base font-semibold">{movie.title}</h3>
            <div className="flex flex-wrap py-2">
              {movie.genres.map((genre) => (
                <span
                  className="mr-2 rounded-full border border-gray-800 px-2 py-1 text-xs"
                  key={genre}
                >
                  {genre}
                </span>
              ))}
            </div>
            {/* Uncomment to include movie overview:
            <p className="text-sm max-w-[300px] white-space: pre-wrap">{movie.overview}</p> */}
          </div>
        )}
      </div>
    </div>
  )
}
