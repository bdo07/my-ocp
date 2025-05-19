/*import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../components1/SearchBar";
import HotelCard from "../components1/HotelCard";
import hotels from "../data/hotels";
import "../styles/EstivagePage.css";
import Footer from "../components1/Footer";
//import "../styles/App.css";

const Estivage = () => {
  const [filteredHotels, setFilteredHotels] = useState(hotels);
  const [searchMessage, setSearchMessage] = useState("");

  const handleSearch = (searchTerm) => {
    const results = hotels.filter((hotel) =>
      hotel.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredHotels(results);
    setSearchMessage(
      results.length > 0 ? `✅ ${results.length} hôtels trouvés !` : "❌ Aucun hôtel trouvé."
    );
  };

  return (
    <div>
      <header className="header5">
        <div className="header-content">
          <div className="logo-container">
            <span className="logo">My<span className="ocp">OCP</span></span>
          </div>
          <nav>
            <ul className="nav-list3">
              <li><Link to="/adminK" className="nav-link">🏛️Administratif</Link></li>
              <li><Link to="/social" className="nav-link">👥Social</Link></li>
              <li><Link to="/medical" className="nav-link">⚕️Médical</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="container3">
        <h1>Estivage - Recherche d'hôtels</h1>
        <SearchBar onSearch={handleSearch} />
        <p className="search-message">{searchMessage}</p>
        <div className="hotel-list2">
          {filteredHotels.map((hotel, index) => (
            <HotelCard key={index} hotel={hotel} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Estivage;
*/