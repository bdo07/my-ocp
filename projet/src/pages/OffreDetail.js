import React from 'react';
import { useParams, Link } from 'react-router-dom';
import '../styles/OffreDetail.css';
const partners = [
  { id: 1, name: "Decathlon", logo: "/images1/th1.jpeg", discount: "-15% sur tout le magasin", description: "Profitez de remises exclusives sur tous les articles de sport.", category: "Shopping" },
  { id: 2, name: "SNCF", logo: "/images1/th8.jpeg", discount: "-20% sur les billets de train", description: "Réductions sur vos voyages en train.", category: "Voyages" },
  { id: 3, name: "Fnac", logo: "/images1/th2.jpeg", discount: "-10% sur les livres et high-tech", description: "Économisez sur vos achats culturels et technologiques.", category: "Shopping" },
  { id: 4, name: "Accor Hotels", logo: "/images1/th4.jpeg", discount: "Jusqu'à -30% sur les réservations", description: "Tarifs préférentiels dans les hôtels Accor.", category: "Voyages" },
  { id: 5, name: "Le Gourmet", logo: "/images1/th5.jpeg", discount: "-25% sur la carte", description: "Offre spéciale sur une sélection de plats.", category: "Restauration" },
  { id: 6, name: "Spa Zen", logo: "/images1/th6.jpeg", discount: "-30% sur les massages", description: "Détente garantie avec nos offres bien-être.", category: "Bien-être" },
  { id: 7, name: "Parc Aventure", logo: "/images1/th7.jpeg", discount: "-15% sur l'entrée", description: "Venez vivre des moments inoubliables en famille.", category: "Loisirs" },
  { id: 8, name: "Salle de Sport Fit", logo: "/images1/th8.jpeg", discount: "-20% sur l'abonnement", description: "Restez en forme avec nos équipements modernes.", category: "Loisirs" }
];

const OffreDetail = () => {
  const { id } = useParams();
  const offer = partners.find(partner => partner.id === parseInt(id));

  if (!offer) return <p>Offre non trouvée.</p>;

  return (
    <div className="offer-detail">
      <img src={offer.logo} alt={offer.name} className="offer-logo" />
      <h2>{offer.name}</h2>
      <p className="offer-discount">{offer.discount}</p>
      <p className="offer-description">{offer.description}</p>
      <Link to="/conventions-tarifaires" className="back-button">Retour</Link>
    </div>
  );
};

export default OffreDetail;
