
import React from 'react';
import type { Movie } from '../types';

interface HeroSectionProps {
  movie: Movie;
}

const HeroSection: React.FC<HeroSectionProps> = ({ movie }) => {
  return (
    <div className="relative h-[60vh] md:h-[80vh] w-full">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${movie.posterUrl})` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent"></div>
      <div className="relative h-full flex items-end pb-12 md:pb-24">
        <div className="container mx-auto px-4 text-white">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">{movie.title}</h1>
            <div className="flex items-center space-x-4 mb-4">
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">{movie.year}</span>
              {movie.genre?.map((g, i) => (
                <span key={i} className="bg-white/20 px-3 py-1 rounded-full text-sm">{g}</span>
              ))}
            </div>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed drop-shadow-md">{movie.description}</p>
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full transition-transform duration-300 ease-in-out transform hover:scale-105 shadow-lg">
              Watch Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
