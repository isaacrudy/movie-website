import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageHome from "../pages/PageHome";
import PageSingleMovie from "../pages/PageSingleMovie";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { GlobalProvider } from "../context/GlobalContext";
import PageFavorites from "../pages/PageFavorites";
import { useEffect } from "react";

function AppRouter() {
  useEffect(() => {
    document.title = "Movies";
  }, []);

  return (
    <BrowserRouter>
      <GlobalProvider>
        <Header />
        <div className="wrapper">
          <Routes>
            <Route path="/" element={<PageHome />} />
            <Route path="/movie/:id" element={<PageSingleMovie />} />
            <Route path="/favorites" element={<PageFavorites />} />
          </Routes>
        </div>
        <Footer />
      </GlobalProvider>
    </BrowserRouter>
  );
}

export default AppRouter;
