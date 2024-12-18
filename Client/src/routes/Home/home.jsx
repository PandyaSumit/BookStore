import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/books");
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.title}>Welcome to Our Bookstore</h1>
        <p style={styles.description}>
          Explore a curated selection of books, find your next favorite, and let your imagination soar.
        </p>
        <button style={styles.button} onClick={handleRedirect}>
          Start Exploring
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    background: "#F0F4F8",
    fontFamily: "'Roboto', sans-serif",
    color: "#333",
  },
  content: {
    textAlign: "center",
    backgroundColor: "#ffffff",
    padding: "60px 40px",
    borderRadius: "20px",
    boxShadow: "0 12px 24px rgba(0, 0, 0, 0.1)",
    maxWidth: "700px",
    width: "90%",
    position: "relative",
    transition: "transform 0.3s ease-in-out",
    overflow: "hidden",
  },
  title: {
    fontSize: "48px",
    fontWeight: "700",
    color: "#333",
    marginBottom: "20px",
    letterSpacing: "1.5px",
    lineHeight: "1.3",
    fontFamily: "'Merriweather', serif",
  },
  description: {
    fontSize: "20px",
    color: "#666",
    marginBottom: "40px",
    lineHeight: "1.6",
    fontWeight: "400",
    fontFamily: "'Roboto', sans-serif",
  },
  button: {
    padding: "18px 60px",
    fontSize: "22px",
    background: "#2d3748",
    color: "#ffffff",
    border: "none",
    borderRadius: "20px", // More rounded corners for a soft effect
    cursor: "pointer",
    transition: "all 0.3s ease-in-out",
    fontWeight: "600",
    boxShadow: "0 12px 25px rgba(76, 132, 255, 0.2)", // Subtle shadow for depth
    outline: "none",
    textTransform: "uppercase",
    letterSpacing: "1.5px",
  },
  buttonHover: {
    background: "linear-gradient(135deg, #38B2AC, #4FD1C5)", // Reverse gradient on hover for dynamic effect
    transform: "scale(1.05)",
    boxShadow: "0 15px 30px rgba(76, 132, 255, 0.3)",
  },
};

export default Home;
