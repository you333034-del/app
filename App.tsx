
import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import MovieGrid from './components/MovieGrid';
import Footer from './components/Footer';
import { heroMovie, bollywoodMovies, hollywoodMovies, webSeries } from './constants';

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filterMovies = (movies: any[]) =>
    movies.filter(movie =>
      movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <div className="bg-slate-900 text-white min-h-screen font-sans">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <main>
        {!searchQuery && <HeroSection movie={heroMovie} />}
        <div className="container mx-auto px-4 py-8">
          <MovieGrid title="Latest Bollywood Movies" movies={filterMovies(bollywoodMovies)} />
          <MovieGrid title="Latest Hollywood Movies" movies={filterMovies(hollywoodMovies)} />
          <MovieGrid title="Latest Web Series" movies={filterMovies(webSeries)} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
