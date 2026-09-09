import { Phone, Mail, Clock } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h2><span style={{ color: 'var(--accent-color)' }}>Sabores</span> del Paraíso</h2>
            <p>Postres, arequipes y salsas artesanales a base de maracuyá · Pulí, Cundinamarca</p>
            <p style={{ marginTop: '0.4rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              Horario: Lunes a Domingo de 8:00 AM a 8:00 PM
            </p>
          </div>
          <div className="footer-contact-info">
            <a href="https://wa.me/573239808476" target="_blank" rel="noopener noreferrer" className="footer-contact-link">
              <Phone size={15} /> WhatsApp: 3239808476
            </a>
            <a href="mailto:Saboresdelparaisopuli@gmail.com" className="footer-contact-link">
              <Mail size={15} /> Saboresdelparaisopuli@gmail.com
            </a>
            <p className="footer-copy">© {currentYear} Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
