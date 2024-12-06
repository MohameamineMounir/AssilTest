import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="bg-gradient-to-r from-green-700 via-green-800 to-green-900 text-white p-4 sticky top-0 z-50 shadow-lg font-tajawal">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold tracking-wide">
            مطبخ المغرب
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 rtl">
            <li>
              <Link
                to="/"
                className="hover:text-green-300 transition-colors duration-200"
              >
                الرئيسية
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-green-300 transition-colors duration-200"
              >
                عنا
              </Link>
            </li>
            <li>
              <Link
                to="/dishes"
                className="hover:text-green-300 transition-colors duration-200"
              >
                الأطباق
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-green-300 hover:text-green-400 transition-colors"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-gradient-to-b from-green-800 via-green-700 to-green-600 text-white z-40 transform ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 font-tajawal text-lg">
          <Link
            to="/"
            onClick={toggleMenu}
            className="hover:text-green-300 transition-colors duration-200"
          >
            الرئيسية
          </Link>
          <Link
            to="/about"
            onClick={toggleMenu}
            className="hover:text-green-300 transition-colors duration-200"
          >
            عنا
          </Link>
          <Link
            to="/dishes"
            onClick={toggleMenu}
            className="hover:text-green-300 transition-colors duration-200"
          >
            الأطباق
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;