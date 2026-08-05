import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import RootLayout from "./components/RootLayout";
import Error from "./pages/Error";
import Favorites from "./pages/Favorites";
import MovieInfo from "./pages/MovieInfo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "filme/:id",
        element: <MovieInfo />,
      },
      {
        path: "favoritos",
        element: <Favorites />,
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
