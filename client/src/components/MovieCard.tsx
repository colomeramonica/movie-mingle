import { useState } from 'react';
import { Movie } from "../types/movie";

interface MovieCardProps {
  movie: Movie;
}

export default function MovieCard({movie}: MovieCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="flex bg-white rounded-md shadow-md relative justify-center items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-2">
        <img 
          className="rounded mx-auto transition-all duration-400 ease-in-out hover:shadow-lg hover:shadow-black/30 hover:opacity-80"
          src={movie.poster}
          alt={movie.title}
          style={{ width: '150px' }}
        />
      {isHovered && (
        <div className="bg-white bg-opacity-90 p-2">
          <h3 className="font-semibold text-base">{movie.title}</h3>
          <p className="text-sm max-w-[400px] white-space: pre-wrap">{movie.overview}</p>
        </div>
      )}
      </div>
    </div>
  );
}