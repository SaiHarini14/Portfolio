import { useState } from "react";
import "./Footer.css";

export default function Footer() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Sai Harini G | Developer</p>
        <button className="contact-btn" onClick={() => setShowModal(true)}>
          📧 Contact Me
        </button>
      </footer>

      {/* Contact Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} // Prevent modal close when clicking inside
          >
            <button className="close-btn" onClick={() => setShowModal(false)}>
              ✖
            </button>
            <h2>Contact Me</h2>
            <div className="contact-info">
              <p>📧 Email: <a href="mailto:saiharini1484@gmail.com">saiharini1484@gmail.com</a></p>
              <p>💼 LinkedIn: <a href="https://www.linkedin.com/in/sai-harini-g" target="_blank" rel="noopener noreferrer">www.linkedin.com/in/sai-harini-g</a></p>
              <p>🐱 GitHub: <a href="https://github.com/SaiHarini14" target="_blank" rel="noopener noreferrer">https://github.com/SaiHarini14</a></p>
              <p>🌐 Portfolio: <a href="https://yourportfolio.com" target="_blank" rel="noopener noreferrer">yourportfolio.com</a></p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
