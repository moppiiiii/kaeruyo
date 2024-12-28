import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/Home.page";
import NotFoundPage from "./pages/404/404.page";
import "./index.css";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
