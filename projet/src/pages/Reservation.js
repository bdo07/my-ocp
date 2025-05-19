

import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const Reservation = () => {
  const { hotelName, roomType } = useParams();
  const navigate = useNavigate();

  const handleConfirmReservation = async (event) => {
  event.preventDefault();

  const form = event.target;
  const customerName = form[0].value;
  const email = form[1].value;
  const phone = form[2].value;
  const startDate = form[3].value;
  const endDate = form[4].value;


const token = localStorage.getItem("token");

  // 1. إرسال البيانات إلى الخادم
  try {
    const response = await fetch("http://localhost:5000/api/reservation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // ✅ أضف التوكن هنا

      },
      body: JSON.stringify({
        hotelName,
        roomType,
        customerName,
        startDate,
        endDate,
        email,
        phone,
      }),
    });

    if (response.ok) {
      // 2. تحميل ملف الحجز بعد النجاح
      const content = `Attestation de réservation\nHôtel: ${hotelName}\nType de chambre: ${roomType}\nNom: ${customerName}\nDélivrée par XYZ Company`;
      const blob = new Blob([content], { type: "text/plain" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "attestation_reservation.txt";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      alert("Réservation confirmée ! L'attestation a été téléchargée.");
    }  else {
  const errorData = await response.json();
  alert("Erreur lors de la réservation: " + errorData.message);
}
  } catch (err) {
    console.error("Erreur réseau :", err);
    alert("Erreur réseau lors de la réservation.");
  }
};

  return (
    <div className="reservation-container">
      <h1>Réservation</h1>
      <p><strong>Hôtel :</strong> {hotelName}</p>
      <p><strong>Type de chambre :</strong> {roomType}</p>
      
      <form className="reservation-form" onSubmit={handleConfirmReservation}>
        <label>Nom complet :</label>
        <input type="text" placeholder="Votre nom" required />
        
        <label>Email :</label>
        <input type="email" placeholder="Votre email" required />
        
        <label>Téléphone :</label>
        <input type="tel" placeholder="Votre numéro" required />
        
        <label>Date d'arrivée :</label>
        <input type="date" required />

        <label>Date de départ :</label>
        <input type="date" required />

        <button type="submit" className="confirm-button">
          Confirmer la réservation
        </button>
      </form>

      <button className="back-button" onClick={() => navigate(-1)}>
        Retour
      </button>
    </div>
  );
};

export default Reservation;