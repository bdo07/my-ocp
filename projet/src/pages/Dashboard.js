import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Dashboard.css";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch("http://localhost:5000/api/user-profile", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((res) => res.json())
      .then((data) => setUser(data.user))
      .catch((err) => console.error("Erreur lors de la récupération du profil :", err));
  }, []);

  const handleLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  window.location.href = "/";
};


  return (
    <div className="dashboard">
      <nav className="navbar2">
        <h1 className="logo">
          My<span className="green-text">OCP</span>
        </h1>
        
        <div className="user-section">
          <span className="icon">🔔</span>
          <div className="user-profile">
            <span className="icon">👤</span>
            <span className="user-name">{user ? user.username : "Chargement..."}</span>
          </div>
          <button onClick={handleLogout} className="logout-button">Déconnecter</button>
        </div>
      </nav>

      <ul className="nav-links">
        <li>
          <span className="icon">🏛️</span>
          <Link to="/dashboard">Administratif</Link>
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
        <Link to="/attestations" className="card">
          <span className="icon1">📜</span>
          <h3>Attestations</h3>
          <p>Documents administratifs : attestations de travail, salaire...</p>
        </Link>

        <Link to="/donnees-personnelles" className="card">
          <span className="icon1">📂</span>
          <h3>Données personnelles</h3>
          <p>Mise à jour des informations administratives et personnelles.</p>
        </Link>

        <Link to="/bulletins-paie" className="card">
          <span className="icon1">💰</span>
          <h3>Bulletins de paie</h3>
          <p>Téléchargement des bulletins de paie.</p>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
