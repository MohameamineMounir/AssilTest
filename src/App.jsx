// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import HomePage from "./components/HomePage";
// import AboutPage from "./components/AboutPage";
// import DishesPage from "./components/DishesPage";
// import Header from "./components/Header";
// const App = () => {
//   return (
//     <Router>
//       <div className="bg-green-50 min-h-screen rtl">
//         <Header />

//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/about" element={<AboutPage />} />
//           <Route path="/dishes" element={<DishesPage />} />
//         </Routes>

//         <footer className="bg-green-800 text-white text-center p-4 font-tajawal">
//           <p>© 2024 مطبخ المغرب - نكهات أصيلة</p>
//         </footer>
//       </div>
//     </Router>
//   );
// };

// export default App;
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import DishesPage from "./components/DishesPage";
import Header from "./components/Header";

const App = () => {
  return (
    <Router>
      <div className="bg-[#f4fdf8] min-h-screen rtl">
        {" "}
        {/* Softer mint green */}
        {/* Header Section */}
        <Header />
        {/* Main Content */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/dishes" element={<DishesPage />} />
        </Routes>
        {/* Footer Section */}
        <footer className="bg-green-800 text-white text-center p-4 font-tajawal">
          <p>© 2024 مطبخ المغرب - نكهات أصيلة</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
