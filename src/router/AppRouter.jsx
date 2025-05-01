import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageHome from "../pages/PageHome";
import Header from "../components/Header";
import Footer from "../components/Footer";

function AppRouter() {
  return (
    <BrowserRouter>
      <Header />
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<PageHome />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRouter;
