# 🎬 PrimeFlix

[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![TMDB API](https://img.shields.io/badge/TMDB-API-01B4E4?style=for-the-badge&logo=themoviedatabase&logoColor=white)](https://www.themoviedb.org/)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://prime-flix-black-nine.vercel.app/)

🔗 **Live Demo:** [https://prime-flix-black-nine.vercel.app/](https://prime-flix-black-nine.vercel.app/)

---

<details>
<summary>🇧🇷 Português</summary>

## 📖 Sobre o Projeto

**PrimeFlix** é uma aplicação web desenvolvida em React como projeto de estudos, focada em consumir a API do [The Movie Database (TMDB)](https://www.themoviedb.org/). A aplicação exibe filmes em cartaz nos cinemas, permite visualizar detalhes de cada filme e salvar favoritos utilizando `localStorage`.

## ✨ Funcionalidades

- 🎥 **Filmes em Cartaz** — Lista os 10 filmes mais recentes em cartaz, consumindo o endpoint `movie/now_playing` da TMDB API.
- 🔍 **Detalhes do Filme** — Página dedicada com sinopse, poster e avaliação do filme.
- ⭐ **Favoritos** — Salve filmes na sua lista de favoritos (persistida via `localStorage`).
- 🗑️ **Remover Favorito** — Remova filmes da lista de favoritos com um clique.
- 🎞️ **Buscar Trailer** — Link direto para buscar o trailer do filme no YouTube.
- 🔔 **Notificações Toast** — Feedback visual ao salvar/remover filmes com `react-toastify`.
- ⏳ **Loading State** — Indicador de carregamento enquanto os dados são buscados na API.
- 🚫 **Página 404** — Tratamento de rotas não encontradas.

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Versão | Descrição |
|---|---|---|
| [React](https://react.dev/) | 19.2 | Biblioteca para construção de interfaces |
| [Vite](https://vite.dev/) | 8.2 | Build tool e servidor de desenvolvimento |
| [React Router DOM](https://reactrouter.com/) | 7.18 | Roteamento SPA |
| [Axios](https://axios-http.com/) | 1.19 | Cliente HTTP para requisições à API |
| [React Toastify](https://fkhadra.github.io/react-toastify/) | 11.1 | Notificações toast |
| CSS Modules | — | Estilização com escopo local |

## 📁 Estrutura do Projeto

```
primeFlix/
├── public/
├── src/
│   ├── components/
│   │   ├── Header/          # Navegação principal
│   │   └── RootLayout/      # Layout raiz com Outlet
│   ├── pages/
│   │   ├── Home/            # Listagem de filmes em cartaz
│   │   ├── MovieInfo/       # Detalhes do filme
│   │   ├── Favorites/       # Lista de filmes favoritos
│   │   └── Error/           # Página 404
│   ├── services/
│   │   └── api.jsx          # Configuração do Axios (TMDB API)
│   ├── styles/
│   │   └── index.css        # Estilos globais
│   ├── App.jsx              # Componente principal
│   ├── main.jsx             # Ponto de entrada
│   └── router.jsx           # Configuração de rotas
├── index.html
├── package.json
└── vite.config.js
```

## 🚀 Como Executar

### Pré-requisitos

- [Node.js](https://nodejs.org/) (v18 ou superior)
- [Yarn](https://yarnpkg.com/) ou npm

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/primeFlix.git

# Acesse o diretório do projeto
cd primeFlix

# Instale as dependências
yarn install
# ou
npm install
```

### Execução

```bash
# Inicie o servidor de desenvolvimento
yarn dev
# ou
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`.

## 📚 Aprendizados

Este projeto foi desenvolvido como exercício prático para consolidar conceitos de:

- Consumo de APIs REST com **Axios**
- Gerenciamento de estado com **useState** e **useEffect**
- Roteamento com **React Router DOM v7** (`createBrowserRouter`)
- Rotas dinâmicas com `useParams`
- Navegação programática com `useNavigate`
- Persistência de dados com **localStorage**
- Componentização e CSS Modules
- Feedback ao usuário com **React Toastify**

## 🌐 API Utilizada

Este projeto consome a [TMDB API](https://developer.themoviedb.org/docs/getting-started).

Endpoints utilizados:
- `GET /movie/now_playing` — Filmes em cartaz
- `GET /movie/{movie_id}` — Detalhes de um filme

</details>

---

<details open>
<summary>🇺🇸 English</summary>

## 📖 About the Project

**PrimeFlix** is a React web application built as a study project, focused on consuming the [The Movie Database (TMDB)](https://www.themoviedb.org/) API. The app displays currently playing movies, allows users to view details for each movie, and save favorites using `localStorage`.

## ✨ Features

- 🎥 **Now Playing Movies** — Lists the 10 most recent movies in theaters, consuming the `movie/now_playing` endpoint from the TMDB API.
- 🔍 **Movie Details** — Dedicated page with synopsis, poster, and movie rating.
- ⭐ **Favorites** — Save movies to your favorites list (persisted via `localStorage`).
- 🗑️ **Remove Favorite** — Remove movies from the favorites list with a single click.
- 🎞️ **Search Trailer** — Direct link to search for the movie trailer on YouTube.
- 🔔 **Toast Notifications** — Visual feedback when saving/removing movies using `react-toastify`.
- ⏳ **Loading State** — Loading indicator while data is being fetched from the API.
- 🚫 **404 Page** — Handles routes that are not found.

## 🛠️ Technologies Used

| Technology | Version | Description |
|---|---|---|
| [React](https://react.dev/) | 19.2 | Library for building user interfaces |
| [Vite](https://vite.dev/) | 8.2 | Build tool and development server |
| [React Router DOM](https://reactrouter.com/) | 7.18 | SPA routing |
| [Axios](https://axios-http.com/) | 1.19 | HTTP client for API requests |
| [React Toastify](https://fkhadra.github.io/react-toastify/) | 11.1 | Toast notifications |
| CSS Modules | — | Locally scoped styling |

## 📁 Project Structure

```
primeFlix/
├── public/
├── src/
│   ├── components/
│   │   ├── Header/          # Main navigation
│   │   └── RootLayout/      # Root layout with Outlet
│   ├── pages/
│   │   ├── Home/            # Now playing movies list
│   │   ├── MovieInfo/       # Movie details
│   │   ├── Favorites/       # Favorite movies list
│   │   └── Error/           # 404 page
│   ├── services/
│   │   └── api.jsx          # Axios configuration (TMDB API)
│   ├── styles/
│   │   └── index.css        # Global styles
│   ├── App.jsx              # Main component
│   ├── main.jsx             # Entry point
│   └── router.jsx           # Routes configuration
├── index.html
├── package.json
└── vite.config.js
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [Yarn](https://yarnpkg.com/) or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/primeFlix.git

# Navigate to the project directory
cd primeFlix

# Install dependencies
yarn install
# or
npm install
```

### Running

```bash
# Start the development server
yarn dev
# or
npm run dev
```

The application will be available at `http://localhost:5173`.

## 📚 Key Learnings

This project was built as a hands-on exercise to solidify concepts such as:

- Consuming REST APIs with **Axios**
- State management with **useState** and **useEffect**
- Routing with **React Router DOM v7** (`createBrowserRouter`)
- Dynamic routes with `useParams`
- Programmatic navigation with `useNavigate`
- Data persistence with **localStorage**
- Component-based architecture and CSS Modules
- User feedback with **React Toastify**

## 🌐 API Used

This project consumes the [TMDB API](https://developer.themoviedb.org/docs/getting-started).

Endpoints used:
- `GET /movie/now_playing` — Now playing movies
- `GET /movie/{movie_id}` — Movie details

</details>

