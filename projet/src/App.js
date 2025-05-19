import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./pages/LoginForm";
import Dashboard from "./pages/Dashboard";
import Social from "./pages/Social";
import Attestations from "./pages/Attestations";
import DonneesPersonnelles from "./pages/DonneesPersonnelles";
import BulletinsDePaie from "./pages/BulletinsDePaie";
import ConventionsTarifaires from "./pages/ConventionsTarifaires";
import OffreDetail from "./pages/OffreDetail";
import Home from "./pages/Home";
import Reservation from "./pages/Reservation";
import ColoniesDeVacances from "./pages/ColoniesDeVacances";
import Medical from "./pages/Medical";
import MedicalHospitalPage from "./pages/MedicalHospitalPage";
import PrivateRoute from "./pages/PrivateRoute"; // استيراد PrivateRoute

import "./styles/global.css";
import "./styles/App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />} />

        {/* حماية جميع المسارات */}
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/attestations"
          element={
            <PrivateRoute>
              <Attestations />
            </PrivateRoute>
          }
        />
        <Route
          path="/social"
          element={
            <PrivateRoute>
              <Social />
            </PrivateRoute>
          }
        />
        <Route
          path="/medical"
          element={
            <PrivateRoute>
              <Medical />
            </PrivateRoute>
          }
        />
        <Route
          path="/donnees-personnelles"
          element={
            <PrivateRoute>
              <DonneesPersonnelles />
            </PrivateRoute>
          }
        />
        <Route
          path="/bulletins-paie"
          element={
            <PrivateRoute>
              <BulletinsDePaie />
            </PrivateRoute>
          }
        />
        <Route
          path="/conventions-tarifaires"
          element={
            <PrivateRoute>
              <ConventionsTarifaires />
            </PrivateRoute>
          }
        />
        <Route
          path="/offre/:id"
          element={
            <PrivateRoute>
              <OffreDetail />
            </PrivateRoute>
          }
        />
        <Route
          path="/reservation/:hotelName/:roomType"
          element={
            <PrivateRoute>
              <Reservation />
            </PrivateRoute>
          }
        />
        <Route
          path="/colonies-de-vacances"
          element={
            <PrivateRoute>
              <ColoniesDeVacances />
            </PrivateRoute>
          }
        />
        <Route
          path="/medical-hospital"
          element={
            <PrivateRoute>
              <MedicalHospitalPage />
            </PrivateRoute>
          }
        />

<Route path="/adminK" element={
                  <PrivateRoute>
              <Dashboard />
            </PrivateRoute>} />

                
      </Routes>
    </BrowserRouter>
  );
};

export default App;
