import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import api from "../../services/api";
import styles from "./MovieInfo.module.css";

export default function MovieInfo() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const pageNotFound = () => navigate("/");

  useEffect(() => {
    async function loadMovie() {
      const response = await api
        .get(`/movie/${id}`, {
          params: {
            api_key: "7a8b8b6a066327503de5bb61de41df8c",
            language: "pt-BR",
          },
        })
        .then((r) => {
          setMovie(r.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log("Filme não encontrado");
          pageNotFound();
          return;
        });
    }

    loadMovie();

    return () => {
      console.log("Componente desmontado");
    };
  }, []);

  function saveMovie() {
    let savedMovies = JSON.parse(localStorage.getItem("@primeFlix")) || [];

    const hasMovie = savedMovies.some((mov) => mov.id === movie.id);

    if (!hasMovie) {
      savedMovies.push(movie);
      localStorage.setItem("@primeFlix", JSON.stringify(savedMovies));

      toast.success("Filme salvo com sucesso!");
    } else {
      toast.warning("O filme já está na lista");
    }
  }

  return (
    <div className={styles.filmInfo}>
      {loading ? (
        <div>
          <h2>Carregando</h2>
        </div>
      ) : (
        <>
          <h1>{movie.title}</h1>
          <div className={styles.imageContainer}>
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt={movie.title}
            />
          </div>
          <div className={styles.contentInfo}>
            <h3>Sinopse</h3>
            <p>{movie.overview}</p>
            <strong>Avaliação: {movie.vote_average} / 10</strong>
          </div>
          <div className={styles.buttonArea}>
            <button onClick={saveMovie}>Salvar</button>

            <a
              href={`https://www.youtube.com/results?search_query=${movie.title} Trailer`}
              rel="external"
              target="blank"
            >
              <button>Trailer</button>
            </a>
          </div>
        </>
      )}
    </div>
  );
}
