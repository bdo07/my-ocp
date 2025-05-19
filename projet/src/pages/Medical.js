import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "../styles/global.css";
import "../styles/App.css";
import "../App.css";
import "../styles/Medical.css";
// import "../styles/MedicalHospital.css";

const Medical = () => {
  const [userName, setUserName] = useState(localStorage.getItem("userName") || "Nom Utilisateur");

  useEffect(() => {
    const storedUserName = localStorage.getItem("userName");
    if (storedUserName) {
      setUserName(storedUserName);
    }
  }, []);


const handleLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  window.location.href = "/";
};

  return (

    <div className="dashboard">
      <nav className="navbar3">
        <h1 className="logo">
          My<span className="green-text">OCP</span>
        </h1>

        <div className="user-section">
          <span className="icon">🔔</span>
          <div className="user-profile">
            <span className="icon">👤</span>
            <span className="user-name">{userName}</span>
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
        <Link to="/medical-hospital" className="card">
          <span className="icon1">🎓</span>
          <h3>Medical</h3>
          <p>Demande de hospitalisation</p>
        </Link>
      </div>
    </div>
  );
};

export default Medical;
