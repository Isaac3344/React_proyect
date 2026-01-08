import salud from "/img/salud.jpg";
import medio from "/img/medio.jpg";
import comunitario from "/img/comunitario.jpg";
import investigacion from "/img/investigacion.jpg";

export const NEWS = [
  {
    id: 1,
    title: "Aumento en programas de salud comunitaria",
    date: "2025-11-10",
    category: "salud",
    excerpt: "Las autoridades locales lanzan programas de prevención.",
    tags: ["salud", "comunidad"],
    image: salud,
  },
  {
    id: 2,
    title: "Impacto ambiental en cuencas",
    date: "2025-10-25",
    category: "medio",
    excerpt: "Estudio revela cambios en la calidad del agua.",
    tags: ["medio ambiente"],
    image: medio,
  },
  {
    id: 3,
    title: "Proyecto reduce mortalidad aviar",
    date: "2025-09-02",
    category: "comunitario",
    excerpt: "Iniciativas locales reducen la mortandad.",
    tags: ["comunitario"],
    image: comunitario,
  },
  {
    id: 4,
    title: "Datos sobre enfermedades emergentes",
    date: "2025-08-15",
    category: "investigacion",
    excerpt: "Investigadores publican nuevos datos.",
    tags: ["investigación"],
    image: investigacion,
  },
];


export const MORT = [
  { year: 2021, cause: "Enfermedad infecciosa", cases: 120 },
  { year: 2022, cause: "Enfermedad infecciosa", cases: 95 },
  { year: 2023, cause: "Enfermedad infecciosa", cases: 78 },
  { year: 2021, cause: "Accidentes", cases: 60 },
  { year: 2022, cause: "Accidentes", cases: 72 },
  { year: 2023, cause: "Accidentes", cases: 55 },
];