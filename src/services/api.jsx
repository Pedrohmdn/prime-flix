// url base da api: https://api.themoviedb.org/3/
//EndPoit: movie/now_playing
//parametros: ?api_key=7a8b8b6a066327503de5bb61de41df8c&language=pt-BR

import axios from "axios";

const api = axios.create({
  baseURL: " https://api.themoviedb.org/3/",
});

export default api;
