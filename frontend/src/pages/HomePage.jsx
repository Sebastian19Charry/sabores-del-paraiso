import Hero from '../components/Hero';
import Proceso from '../components/Proceso';

export default function HomePage({ data }) {
  if (!data) return null;

  return (
    <div className="home-page">
      {/* Hero Principal */}
      <Hero data={data.hero} />

      {/* Intro / Misión Destacada */}
      <section className="section" style={{ paddingBottom: '3.5rem' }}>
        <div className="container">
          <div className="glass" style={{
            padding: '3.5rem 2.5rem',
            borderRadius: '28px',
            textAlign: 'center',
            maxWidth: '920px',
            margin: '0 auto',
            border: '1px solid var(--border-color)',
            background: 'linear-gradient(145deg, var(--surface-color) 0%, var(--surface-alt) 100%)',
            boxShadow: 'var(--shadow-md)'
          }}>
            <div style={{
              display: 'inline-block',
              padding: '0.35rem 1.1rem',
              backgroundColor: 'var(--accent-green-light)',
              color: 'var(--accent-green)',
              borderRadius: '50px',
              fontSize: '0.88rem',
              fontWeight: '600',
              marginBottom: '1.2rem',
              border: '1px solid var(--border-color)'
            }}>
              Tradición & Pasión Frutal
            </div>

            <h2 style={{ fontSize: '2.2rem', marginBottom: '1.2rem', color: 'var(--text-primary)', fontWeight: '700' }}>
              El Auténtico Sabor de Pulí
            </h2>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: '1.85', margin: '0 auto', maxWidth: '820px' }}>
              {data.filosofia?.mision}
            </p>
          </div>
        </div>
      </section>

      {/* Proceso Artesanal */}
      <Proceso data={data.proceso} />
    </div>
  );
}
