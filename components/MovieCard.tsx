
import React from 'react';
import type { Movie } from '../types';

interface MovieCardProps {
  movie: Movie;
}

const PlayIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M8 5v14l11-7z" />
  </svg>
);


const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <div className="bg-slate-800 rounded-lg overflow-hidden shadow-lg group transform hover:-translate-y-2 transition-transform duration-300 ease-in-out">
      <div className="relative">
        <img
          src={movie.posterUrl}
          alt={movie.title}
          className="w-full h-auto aspect-[2/3] object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <PlayIcon className="h-16 w-16 text-white" />
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-md truncate text-white">{movie.title}</h3>
        <p className="text-sm text-gray-400">{movie.year}</p>
      </div>
    </div>
  );
};

export default MovieCard;
