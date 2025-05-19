import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/ConventionsTarifaires.css';
import "../styles/App.css";
import "../styles/global.css";

const Header = ({ searchTerm, setSearchTerm }) => {
  return (
    <header className="header4">
      <div className="logo">
                My<span>OCP</span></div>
              <nav className="nav">
                <Link to="/dashboard">🏛️ Administratif</Link> 
                <Link to="/social">👥 Social</Link>
                <Link to="/medical">⚕️ Médical</Link>
              </nav>
      
        
    </header>
  );
};

/*const PartnerCard = ({ partner }) => {
  const navigate = useNavigate();

  return (
    <div className="partner-card">
      <div className="partner-logo">
        <img src={partner.logo} alt={`${partner.name} Logo`} />
      </div>
      <div className="partner-info">
        <div className="partner-name">{partner.name}</div>
        <div className="partner-discount">{partner.discount}</div>
        <div className="partner-description">{partner.description}</div>
        <button 
          className="partner-button"
          onClick={() => navigate(`/offre/${partner.id}`)}
        >
          Voir l'offre
        </button>
      </div>
    </div>
  );
};*/
const PartnerCard = ({ partner }) => {
  const navigate = useNavigate();

  return (
    <div className="partner-card">
      <div className="partner-logo">
        <img src={partner.logo} alt={`${partner.name} Logo`} style={{ width: "100px", height: "100px", objectFit: "contain" }} />
      </div>
      <div className="partner-info">
        <div className="partner-name">{partner.name}</div>
        <div className="partner-discount">{partner.discount}</div>
        <div className="partner-description">{partner.description}</div>
        <button 
          className="partner-button"
          onClick={() => navigate(`/offre/${partner.id}`)}
        >
          Voir l'offre
        </button>
      </div>
    </div>
  );
};

const ConventionsTarifaires = () => {
  const [activeFilter, setActiveFilter] = useState("Tous");
  const [searchTerm, setSearchTerm] = useState("");

  const partners = [
    { id: 1, name: "Decathlon", logo: "/images1/th1.jpeg", discount: "-15% sur tout le magasin", description: "Remises exclusives sur tous les articles de sport.", category: "Shopping" },
    { id: 2, name: "SNCF", logo: "/images1/th2.jpeg", discount: "-20% sur les billets de train", description: "Réductions sur vos voyages en train.", category: "Voyages" },
    { id: 3, name: "Fnac", logo: "/images1/th3.jpeg", discount: "-10% sur les livres et high-tech", description: "Économies sur vos achats culturels et technologiques.", category: "Shopping" },
    { id: 4, name: "Accor Hotels", logo: "/images1/th4.jpeg", discount: "Jusqu'à -30% sur les réservations", description: "Tarifs préférentiels dans les hôtels Accor.", category: "Voyages" },
    { id: 5, name: "Le Gourmet", logo: "/images1/th5.jpeg", discount: "-25% sur la carte", description: "Offre spéciale sur une sélection de plats.", category: "Restauration" },
    { id: 6, name: "Spa Zen", logo: "/images1/th6.jpeg", discount: "-30% sur les massages", description: "Détente garantie avec nos offres bien-être.", category: "Bien-être" },
    { id: 7, name: "Parc Aventure", logo: "/images1/th7.jpeg", discount: "-15% sur l'entrée", description: "Venez vivre des moments inoubliables en famille.", category: "Loisirs" },
    { id: 8, name: "Salle de Sport Fit", logo: "/images1/th8.jpeg", discount: "-20% sur l'abonnement", description: "Restez en forme avec nos équipements modernes.", category: "Loisirs" },
  ];

  const filteredPartners = partners.filter(partner => 
    (activeFilter === "Tous" || partner.category === activeFilter) &&
    (partner.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
     partner.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="conventions-container">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      
      <div className="content">
        <h1 className="page-title">Conventions tarifaires</h1>

        <div className="filter-section">
          <div className="filter-title">Filtrer par catégorie</div>
          <div className="filter-options">
            {["Tous", "Shopping", "Voyages", "Restauration", "Loisirs", "Bien-être"].map(filter => (
              <div 
                key={filter}
                className={`filter-option ${activeFilter === filter ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </div>
            ))}
          </div>
        </div>

        <div className="partner-grid">
          {filteredPartners.length > 0 ? (
            filteredPartners.map(partner => <PartnerCard key={partner.id} partner={partner} />)
          ) : (
            <p className="no-results">Aucune offre trouvée.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConventionsTarifaires;
