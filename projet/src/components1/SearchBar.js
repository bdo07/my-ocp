/*import React, { useState } from "react";
import { FaSearch, FaCalendarAlt } from "react-icons/fa";
import App from "../styles/App.css";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSearch = () => {
    if (!query.trim()) {
      console.error("Veuillez entrer une ville ou un établissement.");
      return;
    }

    // Appelle la fonction onSearch en passant les données
    onSearch(query, startDate, endDate);
  };

  const calculateNights = () => {
    if (!startDate || !endDate) return "0 nuitée";
    const start = new Date(startDate);
    const end = new Date(endDate);
    const nights = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
    return `${nights} nuitée${nights > 1 ? "s" : ""}`;
  };

  return (
    <div className="search-bar">
      <div className="search-field">
        <FaSearch className="icon" />
        <input
          type="text"
          className="search-input"
          placeholder="Ville ou établissement"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <div className="date-picker">
        <FaCalendarAlt className="icon" />
        <input
          type="date"
          className="date-input"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <span> au </span>
        <input
          type="date"
          className="date-input"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>

      <span className="nights">{calculateNights()}</span>

      <button className="search-button" onClick={handleSearch}>
        Rechercher
      </button>
    </div>
  );
};

export default SearchBar;
*/



import React, { useState } from "react";
import { FaSearch, FaCalendarAlt } from "react-icons/fa";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSearch = () => {
    if (!query.trim()) {
      console.error("Veuillez entrer une ville ou un établissement.");
      return;
    }

    // Appelle la fonction onSearch en passant les données
    onSearch(query, startDate, endDate);
  };

  const calculateNights = () => {
    if (!startDate || !endDate) return "0 nuitée";
    const start = new Date(startDate);
    const end = new Date(endDate);
    const nights = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
    return `${nights} nuitée${nights > 1 ? "s" : ""}`;
  };

  return (
    <div className="search-bar">
      <div className="search-field">
        <FaSearch className="icon" />
        <input
          type="text"
          className="search-input"
          placeholder="Ville ou établissement"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <div className="date-picker">
        <FaCalendarAlt className="icon" />
        <input
          type="date"
          className="date-input"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <span> au </span>
        <input
          type="date"
          className="date-input"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>

      <span className="nights">{calculateNights()}</span>

      <button className="search-button" onClick={handleSearch}>
        Rechercher
      </button>
    </div>
  );
};

export default SearchBar;