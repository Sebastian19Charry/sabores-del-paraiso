import './Ubicacion.css';

export default function Ubicacion({ data }) {
  return (
    <section id="ubicacion" className="section" style={{ backgroundColor: 'var(--surface-color)' }}>
      <div className="container">
        <h2 className="section-title">Ubicación</h2>
        
        <div className="ubicacion-content glass">
          <div className="ubicacion-info">
            <h3>Sede del Proyecto</h3>
            <p className="address" style={{fontWeight: '600'}}>{data.address}</p>
            <p className="barrio" style={{fontSize: '1.125rem'}}>{data.barrio}</p>
            <p className="city">{data.city}, {data.country}</p>
            
            <div className="coordinates">
              <span>Lat: {data.coordinates.lat}</span>
              <span>Lng: {data.coordinates.lng}</span>
            </div>
          </div>
          
          <div className="map-placeholder">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.220557434319!2d-74.7109886846985!3d4.674999996599026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f434df81b83d1%3A0xc0fb194917a22055!2sPul%C3%AD%2C%20Cundinamarca%2C%20Colombia!5e0!3m2!1ses-419!2sus!4v1693761234567!5m2!1ses-419!2sus" 
              width="100%" 
              height="100%" 
              style={{border:0, minHeight: '400px'}} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de Ubicación Pulí"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
