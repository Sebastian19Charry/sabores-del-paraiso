import './Filosofia.css';

export default function Filosofia({ data }) {
  return (
    <section id="filosofia" className="section" style={{ backgroundColor: 'var(--surface-color)' }}>
      <div className="container">
        <h2 className="section-title">Identidad Corporativa</h2>
        
        <div className="filosofia-grid">
          <div className="filosofia-card glass">
            <h3>Nuestra Misión</h3>
            <p>{data.mision}</p>
          </div>
          
          <div className="filosofia-card glass">
            <h3>Nuestra Visión</h3>
            <p>{data.vision}</p>
          </div>
        </div>

        <div className="valores-section mt-4">
          <h3 className="text-center mb-2" style={{textAlign: 'center', marginBottom: '2rem'}}>Nuestros Valores</h3>
          <div className="valores-grid">
            {data.valores.map((valor, index) => (
              <div key={index} className="valor-item glass" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="valor-header">
                  <h4>{valor.title}</h4>
                </div>
                <p>{valor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
