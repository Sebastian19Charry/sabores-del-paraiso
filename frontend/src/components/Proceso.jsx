import './Proceso.css';

export default function Proceso({ data }) {
  return (
    <section id="proceso" className="section">
      <div className="container">
        <h2 className="section-title">El Proceso</h2>
        
        <div className="timeline">
          {data.map((item, index) => (
            <div key={item.step} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-content glass">
                <div className="step-number">{item.step}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
