import { Cake, Flame, Sparkles, Rocket, Layers, CheckCircle, Utensils } from 'lucide-react';
import './Productos.css';

const IconMap = {
  cake: Cake,
  flame: Flame,
  sparkles: Sparkles,
  utensils: Utensils,
  rocket: Rocket,
  layers: Layers,
  'check-circle': CheckCircle
};

export default function Productos({ data }) {
  return (
    <section id="productos" className="section" style={{ backgroundColor: 'var(--surface-color)' }}>
      <div className="container">
        <h2 className="section-title">Productos</h2>
        
        <div className="productos-grid">
          {data.map((producto, index) => {
            const Icon = IconMap[producto.icon] || Rocket;
            
            return (
              <div key={producto.id} className="producto-card glass" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="icon-wrapper">
                  <Icon size={32} />
                </div>
                <h3>{producto.name}</h3>
                <p>{producto.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
