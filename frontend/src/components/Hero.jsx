import './Hero.css';

export default function Hero({ data }) {
  if (!data) return null;
  
  return (
    <section className="hero">
      {/* Background image - noticeable and color-harmonized */}
      <div className="hero-bg-image-wrapper">
        <img 
          src="/images/hero_banner.jpg" 
          alt="Postres Artesanales Sabores del Paraíso" 
          className="hero-bg-image"
        />
        <div className="hero-bg-overlay"></div>
      </div>

      <div className="container hero-container animate-on-load">
        <div className="hero-card-glass">
          <div className="hero-badge-top">
            <span>Artesanal · 100% Maracuyá de Pulí</span>
          </div>
          <h1 className="hero-title">{data.title}</h1>
          <h2 className="hero-subtitle">{data.subtitle}</h2>
          <p className="hero-description">{data.description}</p>
        </div>
      </div>
      
      {/* Decorative background ambient glows */}
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
    </section>
  );
}
