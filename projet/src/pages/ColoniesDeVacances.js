import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ColoniesDeVacances.css';

const ColoniesDeVacances = () => {
  const handleButtonClick = (message) => {
    alert(message);
  };

  return (
    <div className="app-container">
      <header className="header2">
      <div className="logo">
                My<span>OCP</span></div>
              <nav className="nav">
                <Link to="/dashboard">🏛️ Administratif</Link> 
                <Link to="/social">👥 Social</Link>
                <Link to="/medical">⚕️ Médical</Link>
              </nav>
        
      </header>
      
      <div className="app-promo">
        " Découvrir la nouvelle mise à jour de l'application My OCP sur Appstore et Google Play "
      </div>
      
      <div className="main-content">
        <h1 className="section-title">Colonies de vacances</h1>
        
        <div className="card-container">
          <div className="card">
            <div className="card-header">
              <div className="card-icon">
                <span>🏖️</span>
              </div>
              <span>⭐</span>
            </div>
            <h2 className="card-title">Colonies d'été</h2>
            <p className="card-description">Découvrez nos séjours d'été pour les enfants de 6 à 15 ans avec des activités nautiques, sportives et culturelles.</p>
            <Link to="/colonies-ete">
              <button className="button">Découvrir</button>
            </Link>
          </div>
          
          <div className="card">
            <div className="card-header">
              <div className="card-icon">
                <span>⛷️</span>
              </div>
              <span>⭐</span>
            </div>
            <h2 className="card-title">Colonies d'hiver</h2>
            <p className="card-description">Des séjours à la montagne pour les vacances d'hiver avec ski, snowboard et activités de neige.</p>
            <Link to="/colonies-hiver">
              <button className="button">Découvrir</button>
            </Link>
          </div>
          
          <div className="card">
            <div className="card-header">
              <div className="card-icon">
                <span>🌍</span>
              </div>
              <span>⭐</span>
            </div>
            <h2 className="card-title">Séjours linguistiques</h2>
            <p className="card-description">Apprentissage des langues étrangères dans un cadre ludique et immersif pour les enfants et adolescents.</p>
            <Link to="/sejours-linguistiques">
              <button className="button">Découvrir</button>
            </Link>
          </div>
        </div>
        
        <div className="card-container additional-cards">
          <div className="card">
            <div className="card-header">
              <div className="card-icon">
                <span>📝</span>
              </div>
              <span>⭐</span>
            </div>
            <h2 className="card-title">Demande d'inscription</h2>
            <p className="card-description">Remplissez le formulaire en ligne pour inscrire votre enfant à une colonie de vacances.</p>
            <Link to="/demande-inscription">
              <button className="button">Faire une demande</button>
            </Link>
          </div>
          
          <div className="card">
            <div className="card-header">
              <div className="card-icon">
                <span>📃</span>
              </div>
              <span>⭐</span>
            </div>
            <h2 className="card-title">Documents nécessaires</h2>
            <p className="card-description">Consultez la liste des documents à fournir pour finaliser l'inscription de votre enfant.</p>
            <Link to="/documents-necessaires">
              <button className="button">Voir les documents</button>
            </Link>
          </div>
        </div>
        
        <div className="contact-banner">
          <h2>Besoin d'aide pour l'inscription ?</h2>
          <p>Notre équipe est à votre disposition pour vous accompagner dans vos démarches</p>
          <button className="button contact-button" onClick={() => handleButtonClick('Contacter le support')}>Nous contacter</button>
        </div>
      </div>
      
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">My OCP</h3>
            <Link to="#" className="footer-link">À propos</Link>
            <Link to="#" className="footer-link">Nos services</Link>
            <Link to="#" className="footer-link">Conditions d'utilisation</Link>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">Aide</h3>
            <Link to="#" className="footer-link">FAQ</Link>
            <Link to="#" className="footer-link">Contact</Link>
            <Link to="#" className="footer-link">Support technique</Link>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">Suivez-nous</h3>
            <Link to="#" className="footer-link">Facebook</Link>
            <Link to="#" className="footer-link">Twitter</Link>
            <Link to="#" className="footer-link">LinkedIn</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ColoniesDeVacances;
