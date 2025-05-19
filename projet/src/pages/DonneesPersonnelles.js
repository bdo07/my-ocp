import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/DonneesPersonnelles.css";
import Footer from "../components1/Footer";

const DonneesPersonnelles = () => {
  const [formData, setFormData] = useState({
    nom: "Dupont",
    prenom: "Jean",
    email: "dupont@example.com",
    telephone: "06 12 34 56 78",
    salaire: "2500€",
    certificat: "Certificat de travail",
    lieu: "Paris, France",
    dateNaissance: "1990-05-15",
    etatCivil: "Célibataire",
    enfants: "0",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Données mises à jour !");
  };

  return (
    <div className="donnees-container">
      {/* Header avec MyOCP */}
      <header className="header4">
        <div className="logo">
          My<span>OCP</span></div>
        <nav className="nav">
          <Link to="/dashboard">🏛️ Administratif</Link> 
          <Link to="/social">👥 Social</Link>
          <Link to="/medical">⚕️ Médical</Link>
        </nav>
      </header>

      {/* Contenu principal */}
      <div className="page-container">
        <h2 className="page-title">👤 Mes Données Personnelles</h2>
        <form className="form-container" onSubmit={handleSubmit}>
          <label>Nom :</label>
          <input type="text" name="nom" value={formData.nom} onChange={handleChange} className="form-input" />

          <label>Prénom :</label>
          <input type="text" name="prenom" value={formData.prenom} onChange={handleChange} className="form-input" />

          <label>Email :</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-input" />

          <label>Téléphone :</label>
          <input type="tel" name="telephone" value={formData.telephone} onChange={handleChange} className="form-input" />

          <label>Salaire :</label>
          <input type="text" name="salaire" value={formData.salaire} onChange={handleChange} className="form-input" />

          <label>Certificats :</label>
          <input type="text" name="certificat" value={formData.certificat} onChange={handleChange} className="form-input" />

          <label>Lieu de résidence :</label>
          <input type="text" name="lieu" value={formData.lieu} onChange={handleChange} className="form-input" />

          <label>Date de naissance :</label>
          <input type="date" name="dateNaissance" value={formData.dateNaissance} onChange={handleChange} className="form-input" />

          <label>État civil :</label>
          <select name="etatCivil" value={formData.etatCivil} onChange={handleChange} className="form-input">
            <option value="Célibataire">Célibataire</option>
            <option value="Marié(e)">Marié(e)</option>
          </select>

          <label>Nombre d’enfants :</label>
          <input
            type="number"
            name="enfants"
            value={formData.enfants}
            onChange={handleChange}
            className="form-input"
            min="0"
            disabled={formData.etatCivil === "Célibataire"}
          />

          <button type="submit" className="form-button">Mettre à jour</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default DonneesPersonnelles;
