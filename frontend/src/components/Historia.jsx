import './Historia.css';

export default function Historia({ data }) {
  if (!data) return null;
  
  return (
    <section id="historia" className="section">
      <div className="container">
        <h2 className="section-title">{data.title}</h2>
        
        <div className="historia-content glass">
          <div className="historia-text">
            {data.paragraphs.map((paragraph, index) => (
              <p key={index} className="historia-paragraph">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
