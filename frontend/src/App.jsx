import { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductosPage from './pages/ProductosPage';
import NosotrosPage from './pages/NosotrosPage';
import UbicacionPage from './pages/UbicacionPage';
import { siteData } from './data/siteData';

// Componente para volver al inicio del scroll en cada cambio de ruta
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const [data, setData] = useState(siteData);
  const [loading, setLoading] = useState(false);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Verificar preferencia de sistema
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) {
      setTheme('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  useEffect(() => {
    // Fetch data from backend si está disponible
    const fetchData = async () => {
      try {
        const response = await fetch('/api/data');
        if (response.ok) {
          const result = await response.json();
          setData(result);
        }
      } catch (error) {
        // En GitHub Pages usa siteData automáticamente
      }
    };
    
    fetchData();
  }, []);

  return (
    <HashRouter>
      <ScrollToTop />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Routes>
          <Route path="/" element={<HomePage data={data} />} />
          <Route path="/productos" element={<ProductosPage data={data} />} />
          <Route path="/nosotros" element={<NosotrosPage data={data} />} />
          <Route path="/ubicacion" element={<UbicacionPage data={data} />} />
        </Routes>
      </main>
      <Footer />
    </HashRouter>
  );
}

export default App;
