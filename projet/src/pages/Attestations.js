import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Attestations.css";
const Attestations = () => {
  const [selectedAttestation, setSelectedAttestation] = useState("");

  const attestationsList = [
    "Attestation de non déduction au titre de l’impôt",
    "Attestation propre assureur",
    "Attestation non perception des AF",
    "Attestation perception des AF"
  ];

  const printAttestation = () => {
    if (!selectedAttestation) {
      alert("Veuillez sélectionner une attestation.");
      return;
    }
    window.print();
  };

  const downloadAttestation = () => {
    if (!selectedAttestation) {
      alert("Veuillez sélectionner une attestation.");
      return;
    }
    const content = `Attestation: ${selectedAttestation}\nDélivrée par XYZ Company`;
    const blob = new Blob([content], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "attestation.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="attestation-container">
      <div className="navbar1">
        <div className="logo">My<span className="ocp-logo">OCP</span></div>
        <div className="nav-links">
          <Link to="/dashboard">🏛️Administratif</Link> 
          <Link to="/social">👥Social</Link>
          <Link to="/medical">⚕️Médical</Link>
        </div>
      </div>

      <div className="content">
        <div className="left-panel">
          <h2 className="title">📜 Attestation</h2>
          <label>Type d'attestation</label>
          <select
            value={selectedAttestation}
            onChange={(e) => setSelectedAttestation(e.target.value)}
          >
            <option value="">Veuillez Choisir de la liste</option>
            {attestationsList.map((attestation, index) => (
              <option key={index} value={attestation}>
                {attestation}
              </option>
            ))}
          </select>

          <div className="button-container">
            <button className="download-button" onClick={downloadAttestation}>
              Télécharger
            </button>
            <button className="print-button" onClick={printAttestation}>
              Imprimer
            </button>
          </div>
        </div>

        <div className="right-panel">
          <h2 className="title">ℹ️ Attestation</h2>
          <p>
            Ce service vous permet de demander des attestations (attestation de travail,
            attestation de salaire, Attestation IR...).
          </p>
          <p>
            L’historique vous permet de consulter toutes vos anciennes demandes et
            les notifications vous informent de l’avancement et l’état de votre demande.
          </p>
        </div>
      </div>
    </div>
  );
};


export default Attestations;



