import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import DishesPage from "./components/DishesPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Pastillas from "./components/Pastillas";
import Desserts from "./components/Desserts";

import LegumesPack from "./components/legumesPack";
import LegumesEpluches from "./components/LegumesEpluches";
import AllDishes from "./components/AllDishes";
const App = () => {
  return (
    <Router>
      {/* <div className="bg-[#f4fdf8] min-h-screen rtl">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/dishes" element={<DishesPage />} />
          <Route path="/dishes/pastillas" element={<Pastillas />} />
          <Route path="/dishes/legumesPack" element={<LegumesPack />} />
          <Route path="/dishes/LegumesEpluches" element={<LegumesEpluches />} />
          <Route path="/dishes/allDishes" element={<AllDishes />} />

          <Route path="/dishes/desserts" element={<Desserts />} />
        </Routes>
        <Footer />
      </div> */}
      <div className="bg-[#f4fdf8] min-h-screen rtl flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/dishes" element={<DishesPage />} />
            <Route path="/dishes/pastillas" element={<Pastillas />} />
            <Route path="/dishes/legumesPack" element={<LegumesPack />} />
            <Route
              path="/dishes/LegumesEpluches"
              element={<LegumesEpluches />}
            />
            <Route path="/dishes/allDishes" element={<AllDishes />} />
            <Route path="/dishes/desserts" element={<Desserts />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
