import { Phone, Mail, Clock, QrCode, Download } from 'lucide-react';
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
          <div className="footer-qr-section">
            <div className="footer-qr-card">
              <img src="./images/qr_menu.png" alt="Código QR Sabores del Paraíso" className="footer-qr-img" />
              <div className="footer-qr-text">
                <span className="footer-qr-title"><QrCode size={15} /> Escanéanos</span>
                <p className="footer-qr-desc">Abre el menú en tu celular</p>
                <a href="./images/qr_menu.png" download="QR_Sabores_Del_Paraiso.png" className="footer-qr-download">
                  <Download size={13} /> Descargar QR
                </a>
              </div>
            </div>
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
