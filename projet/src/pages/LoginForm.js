import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LoginForm.css";

const LoginForm = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("P2O5");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(""); // Reset any previous error

    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Erreur lors de la connexion");
        return;
      }

      // ✅ حفظ التوكن والمستخدم في localStorage
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify({ username: data.user.username, role }));

      // ✅ التوجيه نحو لوحة القيادة
      navigate("/dashboard");
    } catch (err) {
      console.error("Erreur de connexion:", err);
      setError("Impossible de se connecter au serveur.");
    }
  };

  return (
    <div className="login-container">
      <h1 className="logo">My<span className="green">OCP</span></h1>
      <p className="subtitle">Connectez-vous à l'aide de vos identifiants de la session</p>

      {error && <div className="error-message">{error}</div>}

      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Identifiant"
          className="input-field"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Mot de passe"
          className="input-field"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <select
          className="input-field"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="P2O5">P2O5</option>
          <option value="P2O4">P2O4</option>
          <option value="P2O2">P2O2</option>
        </select>
        <div className="remember-me">
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">Rester connecté(e)</label>
        </div>
        <button type="submit" className="onclik-btn active">SE CONNECTER</button>
      </form>
    </div>
  );
};

export default LoginForm;
