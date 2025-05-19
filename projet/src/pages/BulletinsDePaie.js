import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/BulletinsDePaie.css"; 

const BulletinsDePaie = () => {
  const [month, setMonth] = useState("");
  const [year, setYear] = useState(new Date().getFullYear());
  const [phone, setPhone] = useState("");
  const [type, setType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Vérifier si tous les champs sont remplis
    if (!month || !year || !phone || !type) {
      alert("Veuillez remplir tous les champs !");
      return;
    }

    alert(`Bulletin demandé pour ${month} ${year}, téléphone: ${phone}`);
  };

  return (
    <div className="container1">
      {/* Header */}
      <header className="header1">
        <div className="logo">
          My<span className="ocp-logo">OCP</span>
        </div>
        <nav className="nav">
          <Link to="/dashboard">🏛️Administratif</Link>
          <Link to="/social">👥Social</Link>
          <Link to="/medical">⚕️Médical</Link>
        </nav>
      </header>

      {/* Contenu principal */}
      <div className="content">
        <div className="form-container">
          <h2 className="title">Bulletins de paie</h2>
          <form onSubmit={handleSubmit} className="form">
            
            {/* Type de bulletin */}
            <div className="form-group">
              <label>Type de bulletin</label>
              <select value={type} onChange={(e) => setType(e.target.value)} required>
                <option value="">Sélectionnez un type</option>
                <option value="salaire">Salaire</option>
                <option value="primes">Primes</option>
              </select>
            </div>

            {/* Mois et année */}
            <div className="form-group">
              <label>Mois et Année</label>
              <div className="date-select">
                <select value={month} onChange={(e) => setMonth(e.target.value)} required>
                  <option value="">Mois</option>
                  {["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"].map(
                    (m, index) => (
                      <option key={index} value={m}>{m}</option>
                    )
                  )}
                </select>
                <input
                  type="number"
                  value={year}
                  onChange={(e) => setYear(parseInt(e.target.value, 10))}
                  min="2000"
                  max="2100"
                  required
                />
              </div>
            </div>

            {/* Numéro de téléphone */}
            <div className="form-group">
              <label>Numéro de téléphone</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Ex: 0612345678"
                pattern="[0-9]{10}"
                required
              />
            </div>

            {/* Bouton de soumission */}
            <button type="submit" className="submit-btn">Télécharger le bulletin</button>
          </form>
        </div>

        {/* Section d'information */}
        <div className="info-section">
          <h2>📄 Bulletins de paie</h2>
          <p>
            Ce service vous permet de télécharger vos bulletins. Les PDF téléchargés sont sécurisés par un code qui vous sera envoyé par SMS.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BulletinsDePaie;






