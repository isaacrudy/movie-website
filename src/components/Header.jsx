import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import "../styles/header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleSearch = () => setShowSearch(!showSearch);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_TMDB_API_KEY}&query=${encodeURIComponent(query)}`
      );
      const data = await response.json();

      navigate('/search', { state: { query, results: data.results } });
      setQuery('');
      setShowSearch(false);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  return (
    <header className="header">
      <div className="left">
        <NavLink to="/" className="logo-link" aria-label="Homepage">
          <svg className="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <path d="M128 64a64 64 0 1 0 0 128 64 64 0 1 0 0-128zM352 256l-224 0C57.3 256 0 198.7 0 128S57.3 0 128 0c48.2 0 90.2 26.6 112 66C261.8 26.6 303.8 0 352 0c70.7 0 128 57.3 128 128s-57.3 128-128 128zm0-192a64 64 0 1 0 0 128 64 64 0 1 0 0-128zM558.3 259.4c10.8 5.4 17.7 16.5 17.7 28.6l0 192c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48L448 448l0-16 0-96 0-16 12.8-9.6 64-48c9.7-7.3 22.7-8.4 33.5-3zM64 288l64 0 224 0c35.3 0 64 28.7 64 64l0 96c0 35.3-28.7 64-64 64l-224 0c-35.3 0-64-28.7-64-64l0-96-32 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l32 0z"/>
          </svg>
        </NavLink>
      </div>

      <div className="nav-right">
        {/* Nav links */}
        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/favorites">Favorites</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>

        {}
        <div className="search-wrapper">
          <button className="search-icon" onClick={toggleSearch} aria-label="Toggle search">
            <svg className="search-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
            </svg>
          </button>

          {showSearch && (
            <form onSubmit={handleSearch} className="search-dropdown">
              <input
                type="text"
                placeholder="Search movies..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                autoFocus
              />
            </form>
          )}
        </div>

        {}
        <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
          ☰
        </button>
      </div>
    </header>
  );
}

export default Header;
