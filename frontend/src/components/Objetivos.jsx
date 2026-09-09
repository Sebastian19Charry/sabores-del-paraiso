import './Objetivos.css';

export default function Objetivos({ data }) {
  return (
    <section id="objetivos" className="section">
      <div className="container">
        <h2 className="section-title">Objetivos</h2>
        
        <div className="objetivos-content">
          <div className="objetivo-card general glass">
            <div className="card-header">
              <h3>Objetivo General</h3>
            </div>
            <p>{data.general}</p>
          </div>
          
          <div className="objetivos-especificos">
            <h3>Objetivos Específicos</h3>
            <ul className="especificos-list">
              {data.especificos.map((obj, index) => (
                <li key={index} className="especifico-item glass">
                  <span className="objetivo-num">0{index + 1}</span>
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="objetivos-empresariales" style={{marginTop: '4rem'}}>
          <h3 className="section-title" style={{fontSize: '2rem'}}>Objetivos Empresariales</h3>
          <div className="especificos-list" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem'}}>
            {data.empresariales.map((obj, index) => (
              <div key={index} className="especifico-item glass">
                <span className="objetivo-num">0{index + 1}</span>
                <span>{obj}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
