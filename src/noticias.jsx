import { useState } from "react";
import { Link } from "react-router-dom";
import { NEWS } from "./data";
import "./styles.css";

function Noticias() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const noticiasFiltradas = NEWS.filter(n => {
    const matchCategoria =
      category === "all" || n.category === category;

    const q = search.toLowerCase();
    const matchTexto =
      n.title.toLowerCase().includes(q) ||
      n.excerpt.toLowerCase().includes(q) ||
      n.tags.join(" ").toLowerCase().includes(q);

    return matchCategoria && matchTexto;
  });

  return (
    <div className="page-noticias">
      <header className="site-header">
        <div className="container">
          <h1 className="brand">Noticias - Sitio de Práctica</h1>
          <nav>
            <Link to="/">Inicio</Link>
            <Link to="/mortandad">Mortandad</Link>
          </nav>
        </div>
      </header>

      <main className="container">
        <section className="controls">
          <input
            placeholder="Buscar noticias..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />

          <select
            value={category}
            onChange={e => setCategory(e.target.value)}
          >
            <option value="all">Todas las categorías</option>
            <option value="salud">Salud</option>
            <option value="medio">Medio ambiente</option>
            <option value="comunitario">Comunitario</option>
            <option value="investigacion">Investigación</option>
          </select>
        </section>

        <section className="news-list">
          {noticiasFiltradas.map(item => (
            <article className="news-card" key={item.id}>
              <div className="news-image">
                <img src={item.image} alt={item.title} />
                <span className={`badge ${item.category}`}>
                  {item.category}
                </span>
              </div>

              <div className="news-body">
                <h3 className="news-title">{item.title}</h3>
                <p className="meta">📅 {item.date}</p>
                <p className="excerpt">{item.excerpt}</p>

                <div className="tags">
                  {item.tags.map((t, i) => (
                    <span className="tag" key={i}>{t}</span>
                  ))}
                </div>
              </div>
            </article>



          ))}
        </section>
      </main>

      <footer className="site-footer">
        <div className="container"></div>
      </footer>
    </div>
  );
}

export default Noticias;

