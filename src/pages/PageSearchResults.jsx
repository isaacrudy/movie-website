import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import "../styles/searchResults.css";
import MovieCards from "../components/MovieCards";


function SearchResults() {
  const location = useLocation();
  const navigate = useNavigate();
  const { query, results } = location.state || {};

  if (!results) {
    return (
      <div className="search-results">
        <h2>No search query found</h2>
        <button onClick={() => navigate('/')}>Go Home</button>
      </div>
    );
  }

  return (
    <div className="search-results">
      <h2>Search Results for "{query}"</h2>
      <div className="movie-grid">
        {results.length > 0 ? (
           <MovieCards movieList={results} sectionClass={"popular"} />
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
}

export default SearchResults;
