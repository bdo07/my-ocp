/*import React, { useState } from "react";
import SearchBar from "../components1/SearchBar";
import HotelCard from "../components1/HotelCard";
import hotels from "../data/hotels";


const Home = () => {
  const [filteredHotels, setFilteredHotels] = useState(hotels);
  const [searchMessage, setSearchMessage] = useState(""); 

  const handleSearch = (searchTerm) => {
    // Filtrer les hôtels selon le terme de recherche
    const results = hotels.filter((hotel) =>
      hotel.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    setFilteredHotels(results);

    // Afficher un message de confirmation
    if (results.length > 0) {
      setSearchMessage(`✅ ${results.length} hôtels trouvés !`);
    } else {
      setSearchMessage("❌ Aucun hôtel trouvé.");
    }
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Hôtels et centres d'estivage</h1>
      </div>

      <SearchBar onSearch={handleSearch} />

      {searchMessage && <p className="search-message">{searchMessage}</p>}

      <div className="hotel-list">
        {filteredHotels.map((hotel, index) => (
          <HotelCard key={index} hotel={hotel} />
        ))}
      </div>
    </div>
  );
};

export default Home;
*/


import React, { useState } from "react";
import SearchBar from "../components1/SearchBar";
import HotelCard from "../components1/HotelCard";
import hotels from "../data/hotels";
import "../styles/App.css";
const Home = () => {
  const [filteredHotels, setFilteredHotels] = useState(hotels);
  const [searchMessage, setSearchMessage] = useState(""); // État pour le message

  const handleSearch = (searchTerm) => {
    // Filtrer les hôtels selon le terme de recherche
    const results = hotels.filter((hotel) =>
      hotel.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    setFilteredHotels(results);

    // Afficher un message de confirmation
    if (results.length > 0) {
      setSearchMessage(`✅ ${results.length} hôtels trouvés !`);
    } else {
      setSearchMessage("❌ Aucun hôtel trouvé.");
    }
  };

  return (




    
    <div className="container2">
      <div className="header">
        <h1>Hôtels et centres d'estivage</h1>
      </div>

      <SearchBar onSearch={handleSearch} />

      {/* Affichage du message de confirmation */}
      {searchMessage && <p className="search-message">{searchMessage}</p>}

      <div className="hotel-list">
        {filteredHotels.map((hotel, index) => (
          <HotelCard key={index} hotel={hotel} />
        ))}
      </div>
    </div>
  );
};

export default Home;