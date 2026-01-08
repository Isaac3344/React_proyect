import { Link } from "react-router-dom";
import "./styles.css";

function Home() {
  return (
    <div className="page-home">
      <header className="site-header">
        <div className="container">
          <h1 className="brand">Sitio de Informacion - Noticias & Mortandad</h1>
          <nav>
            <Link to="/noticias">Noticias</Link>
            <Link to="/mortandad">Mortandad</Link>
          </nav>
        </div>
      </header>

      <main className="container hero">
        <h2>Bienvenido</h2>
        <p>
          Este proyecto contiene dos páginas de ejemplo:{" "}
          <strong>Noticias</strong> (artículos, búsqueda y filtros) y{" "}
          <strong>Mortandad</strong> (datos, tabla y gráfico interactivo).
        </p>

        <div className="cards">
          <Link className="card" to="/noticias">
            <h3>Ir a Noticias</h3>
            <p>Artículos recientes, categorías, destacados y búsqueda.</p>
          </Link>

          <Link className="card" to="/mortandad">
            <h3>Ir a Mortandad</h3>
            <p>Estadísticas, tendencias y tabla descargable.</p>
          </Link>
        </div>
      </main>

      <footer className="site-footer">
        <div className="container"></div>
      </footer>
    </div>
  );
}

export default Home;
