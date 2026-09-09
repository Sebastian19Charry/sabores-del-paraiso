import Ubicacion from '../components/Ubicacion';
import { Phone, Mail } from 'lucide-react';

export default function UbicacionPage({ data }) {
  if (!data) return null;

  const phone = data.ubicacion?.telefono || "3239808476";
  const email = data.ubicacion?.email || "Saboresdelparaisopuli@gmail.com";
  const horario = data.ubicacion?.horario || "Lunes a Domingo: 8:00 AM - 8:00 PM";

  return (
    <div className="ubicacion-page" style={{ paddingTop: '100px', minHeight: '90vh' }}>
      {/* Header */}
      <section className="section" style={{ paddingBottom: '1rem', textAlign: 'center' }}>
        <div className="container">
          <div style={{
            display: 'inline-block',
            padding: '0.45rem 1.3rem',
            backgroundColor: 'var(--accent-yellow-light)',
            color: 'var(--text-primary)',
            borderRadius: '50px',
            fontSize: '0.9rem',
            fontWeight: '600',
            marginBottom: '1rem',
            border: '1px solid var(--border-yellow)'
          }}>
            Pulí, Cundinamarca
          </div>
          <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', color: 'var(--text-primary)', marginBottom: '1rem' }}>
            Nuestra Ubicación y Contacto
          </h1>
          <p style={{ maxWidth: '750px', margin: '0 auto', fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
            Estamos ubicados en el casco urbano de Pulí, Cundinamarca. Te invitamos a visitarnos o comunicarte directamente con nosotros para pedidos y consultas.
          </p>
        </div>
      </section>

      {/* Componente de Ubicación con Mapa */}
      <Ubicacion data={data.ubicacion} />

      {/* Tarjetas informativas de contacto y horario */}
      <section className="section" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2.2rem'
          }}>
            {/* Dirección */}
            <div className="glass" style={{
              padding: '2.5rem 2rem',
              borderRadius: '24px',
              textAlign: 'center',
              border: '1px solid var(--border-color)',
              background: 'linear-gradient(145deg, var(--surface-color) 0%, var(--surface-alt) 100%)'
            }}>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '0.8rem', color: 'var(--text-primary)' }}>Sede Principal</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.6', margin: 0 }}>
                {data.ubicacion?.address}<br />
                {data.ubicacion?.barrio}<br />
                <strong style={{ color: 'var(--text-primary)' }}>{data.ubicacion?.city}</strong>
              </p>
            </div>

            {/* Horario */}
            <div className="glass" style={{
              padding: '2.5rem 2rem',
              borderRadius: '24px',
              textAlign: 'center',
              border: '1px solid var(--border-color)',
              background: 'linear-gradient(145deg, var(--surface-color) 0%, var(--surface-accent) 100%)'
            }}>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '0.8rem', color: 'var(--text-primary)' }}>Horario de Atención</h3>
              <p style={{ color: 'var(--text-primary)', fontWeight: '700', fontSize: '1.1rem', marginBottom: '0.4rem' }}>
                {horario}
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', margin: 0 }}>
                Jornada continua todos los días de la semana
              </p>
            </div>

            {/* WhatsApp y Correo */}
            <div className="glass" style={{
              padding: '2.5rem 2rem',
              borderRadius: '24px',
              textAlign: 'center',
              border: '1px solid var(--border-color)'
            }}>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Canales de Contacto</h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', alignItems: 'center' }}>
                <a
                  href={`https://wa.me/57${phone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    padding: '0.6rem 1.4rem',
                    borderRadius: '50px',
                    backgroundColor: 'var(--accent-green)',
                    color: 'white',
                    fontWeight: '600',
                    fontSize: '1rem',
                    textDecoration: 'none',
                    boxShadow: '0 4px 12px rgba(22, 163, 74, 0.25)',
                    transition: 'transform 0.2s ease'
                  }}
                >
                  <Phone size={18} /> WhatsApp: {phone}
                </a>

                <a
                  href={`mailto:${email}`}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: 'var(--text-secondary)',
                    fontSize: '0.95rem',
                    wordBreak: 'break-all',
                    marginTop: '0.2rem'
                  }}
                >
                  <Mail size={16} /> {email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
