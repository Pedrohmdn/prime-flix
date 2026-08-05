import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import styles from "./favorites.module.css";

export default function Favorites() {
  const [favoriteMovies, setFavoriteMovies] = useState(() => {
    const savedMovies = JSON.parse(localStorage.getItem("@primeFlix"));

    if (savedMovies) {
      return savedMovies;
    }
    return [];
  });

  function deleteMovie(id) {
    const listUpdated = favoriteMovies.filter((movie) => movie.id !== id);

    setFavoriteMovies(listUpdated);

    localStorage.setItem("@primeFlix", JSON.stringify(listUpdated));

    toast.success("Filme removido com sucesso!");
  }
  return (
    <div className={styles.container}>
      <h1>Meus filmes</h1>
      {favoriteMovies.length === 0 && (
        <span className={styles.notice}>Você não tem nenhum filme salvo!</span>
      )}
      <ul className={styles.moviceList}>
        {favoriteMovies.map((movie) => (
          <li key={movie.id} className={styles.row}>
            <span>{movie.title}</span>
            <div className={styles.actions}>
              <Link to={`/filme/${movie.id}`}>Ver Detalhes</Link>
              <button onClick={() => deleteMovie(movie.id)}>Excluir</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
