import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { FaTiktok, FaInstagram } from "react-icons/fa"; // Import TikTok and Instagram icons
import assil from "../assets/ASSIL.png";

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
          <Link to="/" className="flex items-center">
            <div className="h-20 w-20 rounded-full overflow-hidden border-2 border-green-700">
              <img
                src={assil}
                alt="Logo Assil"
                className="h-full w-full object-cover"
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 rtl items-center">
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
                to="/dishes/alldishes"
                className="hover:text-green-300 transition-colors duration-200"
              >
                الأطباق
              </Link>
            </li>
            {/* TikTok Link */}
            <li>
              <a
                href="https://www.tiktok.com/@freshboxagadir?is_from_webapp=1&sender_device=pc"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-300 transition-colors duration-200 flex items-center"
              >
                <FaTiktok className="text-xl ml-2" /> TikTok
              </a>
            </li>
            {/* Instagram Link */}
            <li>
              <a
                href="https://www.instagram.com/freshbox8?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-300 transition-colors duration-200 flex items-center"
              >
                <FaInstagram className="text-xl ml-2" /> Instagram
              </a>
            </li>
          </ul>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-green-300 hover:text-green-400 transition-colors"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"} // Adding an accessible name
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
            to="/dishes/alldishes"
            onClick={toggleMenu}
            className="hover:text-green-300 transition-colors duration-200"
          >
            الأطباق
          </Link>
          {/* TikTok Link in Mobile Menu */}
          <a
            href="https://www.tiktok.com/@freshboxagadir?is_from_webapp=1&sender_device=pc"
            target="_blank"
            rel="noopener noreferrer"
            onClick={toggleMenu}
            className="hover:text-green-300 transition-colors duration-200 flex items-center"
          >
            <FaTiktok className="text-2xl ml-2" /> TikTok
          </a>
          {/* Instagram Link in Mobile Menu */}
          <a
            href="https://www.instagram.com/freshbox8?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            onClick={toggleMenu}
            className="hover:text-green-300 transition-colors duration-200 flex items-center"
          >
            <FaInstagram className="text-2xl ml-2" /> Instagram
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
