import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageHome from "../pages/PageHome";
import PageSingleMovie from "../pages/PageSingleMovie";
import Header from "../components/Header";
import Footer from "../components/Footer";

function AppRouter() {
  return (
    <BrowserRouter>
      <Header />
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<PageHome />} />
          <Route path="/movie/:id" element={<PageSingleMovie />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRouter;
