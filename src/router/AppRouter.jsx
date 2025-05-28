import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageHome from "../pages/PageHome";
import PageSingleMovie from "../pages/PageSingleMovie";
import SearchResults from "../pages/PageSearchResults";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { GlobalProvider } from "../context/GlobalContext";
import PageFavorites from "../pages/PageFavorites";
import PageAbout from "../pages/PageAbout";
import { useEffect } from "react";
import PageNotFound from "../pages/PageNotFound";

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
            <Route path="*" element={<PageNotFound />} />
            <Route path="/" element={<PageHome />} />
            <Route path="/movie/:id" element={<PageSingleMovie />} />
            <Route path="/favorites" element={<PageFavorites />} />
            <Route path="/about" element={<PageAbout />} />
            <Route path="/search" element={<SearchResults />} />
          </Routes>
        </div>
        <Footer />
      </GlobalProvider>
    </BrowserRouter>
  );
}

export default AppRouter;
