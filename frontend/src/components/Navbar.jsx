import { NavLink, Link } from 'react-router-dom';
import { Moon, Sun } from 'lucide-react';
import './Navbar.css';

export default function Navbar({ theme, toggleTheme }) {
  return (
    <nav className="navbar glass">
      <div className="container nav-container">
        <Link to="/" className="logo">
          <span className="logo-text">
            <span className="logo-accent">Sabores</span> del Paraíso
          </span>
        </Link>
        <div className="nav-links">
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            Inicio
          </NavLink>
          <NavLink
            to="/productos"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            Productos
          </NavLink>
          <NavLink
            to="/nosotros"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            Nosotros
          </NavLink>
          <NavLink
            to="/ubicacion"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            Ubicación
          </NavLink>
          <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
