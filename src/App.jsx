import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import DishesPage from "./components/DishesPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
const App = () => {
  return (
    <Router>
      <div className="bg-[#f4fdf8] min-h-screen rtl">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/dishes" element={<DishesPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
