/*import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <p>&copy; {new Date().getFullYear()} Hôtel az-dine - Tous droits réservés.</p>
        <div style={styles.links}>
          <a href="/about" style={styles.link}>À propos</a>
          <a href="/contact" style={styles.link}>Contact</a>
          <a href="/terms" style={styles.link}>Conditions</a>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#1e3a8a",
    color: "white",
    textAlign: "center",
    padding: "15px 0",
    marginTop: "30px",
  },
  container: {
    maxWidth: "900px",
    margin: "auto",
  },
  links: {
    marginTop: "10px",
  },
  link: {
    color: "#f3f4f6",
    margin: "0 10px",
    textDecoration: "none",
  },
};

export default Footer;
*/



import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <p>&copy; {new Date().getFullYear()} My OCP - Tous droits réservés.</p>
        <div style={styles.links}>
          <a href="/about" style={styles.link}>À propos</a>
          <a href="/contact" style={styles.link}>Contact</a>
          <a href="/terms" style={styles.link}>Conditions</a>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#1e3a8a",
    color: "white",
    textAlign: "center",
    padding: "15px 0",
    marginTop: "30px",
  },
  container: {
    maxWidth: "900px",
    margin: "auto",
  },
  links: {
    marginTop: "10px",
  },
  link: {
    color: "#f3f4f6",
    margin: "0 10px",
    textDecoration: "none",
  },
};

export default Footer;