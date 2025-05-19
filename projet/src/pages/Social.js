import React from "react";
import { Link } from "react-router-dom";
import "../styles/social.css";
//import "../styles/global.css";
//import "../styles/EstivagePage.css";
//import "../styles/App.css";

const Social = () => {

  const handleLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  window.location.href = "/";
};
  return (
    <div className="dashboard">
      
      <nav className="navbar5">
        <h1 className="logo">
           My<span className="green-text">OCP</span>
        </h1>


        
        <div className="user-section">
          <span className="icon">🔔</span> 
          <div className="user-profile">
            <span className="icon">👤</span> 
            <span className="user-name">Nom Utilisateur</span>
          </div>
           <button onClick={handleLogout} className="logout-button">Déconnecter</button>
        </div>
      </nav>

      <ul className="nav-links">
        <li>
          <span className="icon">🏛️</span>
          <Link to="/adminK">Administratif</Link>
        </li>
        <li>
          <span className="icon">👥</span>
          <Link to="/social">Social</Link>
        </li>
        <li>
          <span className="icon">⚕️</span>
          <Link to="/medical">Médical</Link>
        </li>
      </ul>

      
      <div className="dashboard-content">
        <Link to="/home" className="card">
          <span className="icon1">🌴</span>
          <h3>Estivage</h3>
          <p>Séjour dans les CE OCP ou les établissement touristiques</p>
        </Link>

        <Link to="/conventions-tarifaires" className="card">
          <span className="icon1">💵</span>
          <h3>Conventions tarifaires</h3>
          <p>Offres des remises tarifaires auprès des partenaires de renom</p>
        </Link>

        <Link to="/colonies-de-vacances" className="card">
          <span className="icon1">🏕️</span>
          <h3>Colonies de vacances</h3>
          <p>Séjour en colonies de vacances au profit des enfants des collaborateurs</p>
        </Link>

      </div>
     
    </div>
  );
};
export default Social;









