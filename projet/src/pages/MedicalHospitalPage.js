import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '../styles/MedicalHospital.css';

const medicalSpecialties = [
  {
    specialty: 'Cardiologie',
    doctors: [
      {
        name: 'Dr. Marie Dupont',
        availability: [
          { date: '2025-03-26', time: '10:00', department: 'Cardiologie A', clinique: '📍Clinique le Littorale' },
          { date: '2025-03-27', time: '14:30', department: 'Cardiologie B', clinique: '📍Clinique le Littorale' },
        ]
      },
      {
        name: 'Dr. Jean Martin',
        availability: [
          { date: '2025-03-28', time: '09:15', department: 'Cardiologie C', clinique: '📍Clinique Oceanique' },
          { date: '2025-03-29', time: '16:45', department: 'Cardiologie D', clinique: '📍Clinique Oceanique' }
        ]
      }
    ]
  },
  {
    specialty: 'Neurologie',
    doctors: [
      {
        name: 'Dr. Sophie Laurent',
        availability: [
          { date: '2025-03-26', time: '11:00', department: 'Neurologie A', clinique: '📍Clinique Oceanique' },
          { date: '2025-03-27', time: '15:30', department: 'Neurologie B', clinique: '📍Clinique Oceanique' }
        ]
      },
      {
        name: 'Dr. Pierre Rousseau',
        availability: [
          { date: '2025-03-28', time: '10:45', department: 'Neurologie C', clinique: '📍Clinique le Littorale' },
          { date: '2025-03-29', time: '13:15', department: 'Neurologie D', clinique: '📍Clinique le Littorale' }
        ]
      }
    ]
  },
  {
    specialty: 'Pédiatrie',
    doctors: [
      {
        name: 'Dr. Emma Leroy',
        availability: [
          { date: '2025-03-26', time: '13:00', department: 'Pédiatrie A', clinique: '📍Clinique le Littorale' },
          { date: '2025-03-27', time: '16:30', department: 'Pédiatrie B', clinique: '📍Clinique le Littorale' }
        ]
      },
      {
        name: 'Dr. Lucas Moreau',
        availability: [
          { date: '2025-03-28', time: '08:45', department: 'Pédiatrie C', clinique: '📍Clinique le Littorale' },
          { date: '2025-03-29', time: '14:15', department: 'Pédiatrie D', clinique: '📍Clinique le Littorale' }
        ]
      }
    ]
  }
];

// دالة لتنسيق التاريخ
const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('fr-FR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

function MedicalHospitalPage() {
  const [activeSpecialty, setActiveSpecialty] = useState('Cardiologie');

  return (
    <div className="medical-hospital-page">
      <header className="header9">
        <div className="header-content9">
          <div className="logo-container9">
            <span className="logo3">My<span className="ocp3">OCP</span></span>
          </div>
          <nav>
            <ul className="nav-list9">
              <li><Link to="/dashboard" className="nav-link9">🏛️Administratif</Link></li>
              <li><Link to="/social" className="nav-link9">👥Social</Link></li>
              <li><Link to="/medical" className="nav-link9">⚕️Médical</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <h2 className="page-title">Demande de hospitalisation</h2>

        <div className="specialty-tabs">
          <div className="tabs-list">
            {medicalSpecialties.map((specialty) => (
              <button
                key={specialty.specialty}
                className={`tabs-trigger ${activeSpecialty === specialty.specialty ? 'active' : ''}`}
                onClick={() => setActiveSpecialty(specialty.specialty)}
              >
                {specialty.specialty}
              </button>
            ))}
          </div>

          <div className="specialty-content">
            {medicalSpecialties
              .filter(specialty => specialty.specialty === activeSpecialty)
              .map((specialty) => (
                <div key={specialty.specialty} className="specialty-doctors">
                  {specialty.doctors.map((doctor, index) => (
                    <div key={index} className="doctor-card">
                      <div className="doctor-header">
                        <h3>{doctor.name}</h3>
                      </div>
                      <div className="doctor-availability">
                        {doctor.availability.map((slot, slotIndex) => (
                          <div key={slotIndex} className="availability-slot">
                            <div className="slot-details">
                              <p className="department">{slot.department}</p>
                              <p className="date">{formatDate(slot.date)}</p>
                              <p className="department">{slot.clinique}</p>
                            </div>
                            <span className="time">{slot.time}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default MedicalHospitalPage;
