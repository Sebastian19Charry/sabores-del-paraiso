import { User } from 'lucide-react';
import './Integrantes.css';

export default function Integrantes({ data }) {
  if (!data || data.length === 0) return null;

  return (
    <section id="integrantes" className="section">
      <div className="container">
        <h2 className="section-title">Equipo del Proyecto</h2>
        <p style={{ textAlign: 'center', maxWidth: '600px', margin: '-1.5rem auto 3rem', color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
          Estudiantes comprometidos con el desarrollo gastronómico y artesanal de Pulí.
        </p>
        
        <div className="integrantes-grid">
          {data.map((integrante, index) => (
            <div key={integrante.id || index} className="integrante-card glass" style={{ animationDelay: `${index * 0.15}s` }}>
              <div className="integrante-icon-wrapper">
                <div className="integrante-avatar-circle">
                  <User size={46} strokeWidth={1.8} />
                </div>
              </div>
              <div className="integrante-info">
                <h3>{integrante.name}</h3>
                <p className="role">{integrante.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
