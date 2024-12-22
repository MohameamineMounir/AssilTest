import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import DishesPage from "./components/DishesPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Pastillas from "./components/Pastillas";
import Desserts from "./components/Desserts";
import Salads from "./components/Salads";
import LegumesPack from "./components/legumesPack";
import LegumesEpluches from "./components/LegumesEpluches";
import AllDishes from "./components/AllDishes";
import Cart from "./components/Cart";
import { CartProvider } from "./Context/ProductContext";

const App = () => {
  return (
    <CartProvider>
      <Router>
        <div className="bg-[#f4fdf8] min-h-screen rtl flex flex-col">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/cart" element={<Cart />} />

              <Route path="/about" element={<AboutPage />} />
              <Route path="/dishes" element={<DishesPage />} />
              <Route path="/dishes/pastillas" element={<Pastillas />} />
              <Route path="/dishes/legumesPack" element={<LegumesPack />} />
              <Route
                path="/dishes/LegumesEpluches"
                element={<LegumesEpluches />}
              />
              <Route path="/dishes/alldishes" element={<AllDishes />} />
              <Route path="/dishes/desserts" element={<Desserts />} />
              <Route path="/dishes/salads" element={<Salads />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
