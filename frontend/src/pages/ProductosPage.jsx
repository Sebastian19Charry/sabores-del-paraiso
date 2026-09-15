import { Cake, Flame, Sparkles } from 'lucide-react';

const iconMap = {
  cake: Cake,
  flame: Flame,
  sparkles: Sparkles
};

export default function ProductosPage({ data }) {
  const productos = data?.productos || [];

  return (
    <div className="productos-page" style={{ paddingTop: '100px', minHeight: '90vh' }}>
      {/* Header */}
      <section className="section" style={{ paddingBottom: '2rem', textAlign: 'center' }}>
        <div className="container">
          <div style={{
            display: 'inline-block',
            padding: '0.45rem 1.3rem',
            backgroundColor: 'var(--accent-green-light)',
            color: 'var(--accent-green)',
            borderRadius: '50px',
            fontSize: '0.9rem',
            fontWeight: '600',
            marginBottom: '1rem',
            border: '1px solid var(--border-color)'
          }}>
            Línea Artesanal de Pulí
          </div>
          <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', color: 'var(--text-primary)', marginBottom: '1rem' }}>
            Nuestros Productos a Base de Maracuyá
          </h1>
          <p style={{ maxWidth: '750px', margin: '0 auto', fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
            Cada preparación es elaborada a mano con pulpa 100% natural de maracuyá cosechado localmente, combinando tradición, nutrición y un balance perfecto entre dulce y cítrico.
          </p>
        </div>
      </section>

      {/* Catálogo de Productos con Fotos Reales */}
      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem'
          }}>
            {productos.map((prod, index) => {
              const IconComponent = iconMap[prod.icon] || Cake;
              const isYellow = index % 2 === 0;
              return (
                <div
                  key={prod.id || index}
                  className="glass"
                  style={{
                    borderRadius: '26px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    position: 'relative',
                    overflow: 'hidden',
                    border: '1px solid var(--border-color)',
                    boxShadow: 'var(--shadow-md)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                  }}
                >
                  {/* Foto del Producto */}
                  <div style={{
                    position: 'relative',
                    width: '100%',
                    height: '240px',
                    overflow: 'hidden',
                    backgroundColor: 'var(--surface-alt)'
                  }}>
                    {prod.image ? (
                      <img
                        src={prod.image}
                        alt={prod.name}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          objectPosition: 'center',
                          transition: 'transform 0.5s ease'
                        }}
                        className="product-img-hover"
                      />
                    ) : (
                      <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <IconComponent size={64} color="var(--accent-color)" />
                      </div>
                    )}
                  </div>

                  <div style={{ padding: '2rem 2rem 2.2rem', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                    <div>
                      {/* Precio y Presentación */}
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.9rem' }}>
                        <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.35rem' }}>
                          <span style={{ fontSize: '1.9rem', fontWeight: '800', color: 'var(--accent-color)', letterSpacing: '-0.5px' }}>
                            {prod.price}
                          </span>
                          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: '600' }}>COP</span>
                        </div>
                        {prod.presentacion && (
                          <span style={{
                            fontSize: '0.82rem',
                            padding: '0.3rem 0.85rem',
                            borderRadius: '50px',
                            backgroundColor: isYellow ? 'var(--accent-yellow-light)' : 'var(--accent-green-light)',
                            color: 'var(--text-primary)',
                            fontWeight: '700',
                            border: isYellow ? '1px solid var(--border-yellow)' : '1px solid var(--border-color)'
                          }}>
                            {prod.presentacion}
                          </span>
                        )}
                      </div>

                      <h2 style={{ fontSize: '1.65rem', color: 'var(--text-primary)', marginBottom: '0.8rem' }}>
                        {prod.name}
                      </h2>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1.8rem' }}>
                        {prod.description}
                      </p>

                      <div style={{
                        backgroundColor: 'var(--surface-alt)',
                        padding: '1.2rem',
                        borderRadius: '18px',
                        textAlign: 'left',
                        marginBottom: '1.8rem',
                        border: '1px solid var(--border-color)'
                      }}>
                        <h4 style={{ fontSize: '0.95rem', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
                          Características Principales:
                        </h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.92rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                          {(prod.caracteristicas || [
                            "100% fruta natural sin conservantes",
                            "Producido artesanalmente en Pulí",
                            "Alto aporte de antioxidantes y vitamina C"
                          ]).map((item, idx) => (
                            <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                              <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--accent-color)', flexShrink: 0 }}></span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div>
                      <a
                        href={`https://wa.me/573239808476?text=${encodeURIComponent(`¡Hola! Me gustaría hacer un pedido de: ${prod.name} (${prod.price})`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'block',
                          padding: '0.85rem',
                          borderRadius: '50px',
                          backgroundColor: isYellow ? 'var(--accent-yellow-light)' : 'var(--accent-green-light)',
                          color: 'var(--text-primary)',
                          border: isYellow ? '1px solid var(--border-yellow)' : '1px solid var(--border-color)',
                          fontWeight: '700',
                          fontSize: '0.95rem',
                          textAlign: 'center',
                          textDecoration: 'none',
                          boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                          transition: 'transform 0.2s ease, opacity 0.2s ease'
                        }}
                      >
                        Pedir por WhatsApp · {prod.price}
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Compromiso con la Calidad */}
      <section className="section" style={{ backgroundColor: 'var(--surface-color)', marginTop: '3rem', borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto' }}>
            <h2 className="section-title">El Maracuyá en Nuestras Recetas</h2>
            <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '2.5rem' }}>
              El maracuyá no es solo un ingrediente delicioso; es el corazón de nuestra propuesta gastronómica. Seleccionamos frutas maduradas naturalmente en las fincas de la región para garantizar la acidez justa y el aroma tropical inconfundible que enamora a nuestros comensales.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.2rem', flexWrap: 'wrap' }}>
              <div style={{ padding: '0.9rem 1.8rem', borderRadius: '50px', background: 'var(--accent-yellow-light)', border: '1px solid var(--border-yellow)', color: 'var(--text-primary)', fontWeight: '600' }}>
                Ingredientes 100% Locales
              </div>
              <div style={{ padding: '0.9rem 1.8rem', borderRadius: '50px', background: 'var(--accent-green-light)', border: '1px solid var(--border-color)', color: 'var(--text-primary)', fontWeight: '600' }}>
                Recetas Tradicionales & Creativas
              </div>
              <div style={{ padding: '0.9rem 1.8rem', borderRadius: '50px', background: 'var(--surface-alt)', border: '1px solid var(--border-color)', color: 'var(--text-primary)', fontWeight: '600' }}>
                Producción Sostenible
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
