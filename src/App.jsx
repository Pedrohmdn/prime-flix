import AppRouter from "./router";
import { ToastContainer } from "react-toastify";

export default function App() {
  return (
    <>
      <AppRouter />;
      <ToastContainer />
    </>
  );
}
