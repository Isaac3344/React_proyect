import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Chart from "chart.js/auto";
import { MORT } from "./data";
import "./styles.css";

function Mortandad() {
  const chartRef = useRef(null);

  useEffect(() => {
    const years = [...new Set(MORT.map(m => m.year))].sort();
    const causes = [...new Set(MORT.map(m => m.cause))];

    const datasets = causes.map(cause => ({
      label: cause,
      data: years.map(y => {
        const found = MORT.find(
          m => m.year === y && m.cause === cause
        );
        return found ? found.cases : 0;
      }),
    }));

    const chart = new Chart(chartRef.current, {
      type: "bar",
      data: {
        labels: years,
        datasets,
      },
      options: {
        responsive: true,
        plugins: { legend: { position: "top" } },
      },
    });

    return () => chart.destroy();
  }, []);

  const descargarCSV = () => {
    const csv = [
      "Año,Causa,Casos",
      ...MORT.map(r => `${r.year},"${r.cause}",${r.cases}`),
    ].join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "mortandad.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="page-mortandad">
      <header className="site-header">
        <div className="container">
          <h1 className="brand">Mortandad - Sitio de Práctica</h1>
          <nav>
            <Link to="/">Inicio</Link>
            <Link to="/noticias">Noticias</Link>
          </nav>
        </div>
      </header>

      <main className="container">
        <section className="chart-wrap">
          <canvas ref={chartRef} />
        </section>

        <section className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Año</th>
                <th>Causa</th>
                <th>Casos</th>
              </tr>
            </thead>
            <tbody>
              {MORT.map((r, i) => (
                <tr key={i}>
                  <td>{r.year}</td>
                  <td>{r.cause}</td>
                  <td>{r.cases}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <button onClick={descargarCSV}>Descargar CSV</button>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container"></div>
      </footer>
    </div>
  );
}

export default Mortandad;

