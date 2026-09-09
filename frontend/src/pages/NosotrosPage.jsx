import Historia from '../components/Historia';
import Filosofia from '../components/Filosofia';
import Objetivos from '../components/Objetivos';
import Integrantes from '../components/Integrantes';

export default function NosotrosPage({ data }) {
  if (!data) return null;

  return (
    <div className="nosotros-page" style={{ paddingTop: '100px', minHeight: '90vh' }}>
      {/* Header */}
      <section className="section" style={{ paddingBottom: '1rem', textAlign: 'center' }}>
        <div className="container">
          <div style={{
            display: 'inline-block',
            padding: '0.4rem 1.2rem',
            backgroundColor: 'var(--accent-light)',
            color: 'var(--accent-color)',
            borderRadius: '50px',
            fontSize: '0.9rem',
            fontWeight: '600',
            marginBottom: '1rem'
          }}>
            Nuestra Esencia
          </div>
          <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', color: 'var(--text-primary)', marginBottom: '1rem' }}>
            Sobre Sabores del Paraíso
          </h1>
          <p style={{ maxWidth: '750px', margin: '0 auto', fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
            Conoce el origen, los valores, las metas y el equipo apasionado que da vida a cada postre artesanal en el municipio de Pulí.
          </p>
        </div>
      </section>

      {/* Historia */}
      <Historia data={data.historia} />

      {/* Filosofía (Misión, Visión, Valores) */}
      <Filosofia data={data.filosofia} />

      {/* Objetivos */}
      <Objetivos data={data.objetivos} />

      {/* Equipo */}
      <Integrantes data={data.integrantes} />
    </div>
  );
}
