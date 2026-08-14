import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";
import styles from "./home.module.css";
import { apiKey } from "../../services/apiKey";

export default function Home() {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilms() {
      const response = await api.get("movie/now_playing", {
        params: {
          api_key: apiKey,
          language: "pt-BR",
          page: 1,
        },
      });

      setFilmes(response.data.results.slice(0, 10));
      setLoading(false);
    }

    try {
      loadFilms();
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div className={styles.listaFilmes}>
      {loading ? (
        <div>
          <h2>Carregando</h2>
        </div>
      ) : (
        filmes.map((filme) => (
          <article key={filme.id}>
            <strong>{filme.title}</strong>
            <div className={styles.imageContainer}>
              <img
                src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`}
                alt={filme.title}
              />
            </div>
            <Link to={`/filme/${filme.id}`}>Acessar</Link>
          </article>
        ))
      )}
    </div>
  );
}
