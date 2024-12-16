import { FaTiktok, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-4">
          {/* Social Media Icons */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://www.tiktok.com/@produits_assil?is_from_webapp=1&sender_device=pc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:opacity-80 transition-opacity duration-200"
            >
              <FaTiktok className="text-2xl hover:bg-clip-text bg-gradient-to-r from-[#00f2ea] to-[#ff0050]  " />
            </a>
            <a
              href="https://www.instagram.com/produits.assil?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:opacity-80 transition-opacity duration-200"
            >
              <FaInstagram className="text-2xl bg-gradient-to-r from-[#f09433] via-[#e6683c] to-[#bc1888] hover:bg-clip-text " />
            </a>
          </div>

          {/* Copyright Text */}
          <p className="text-sm font-tajawal text-center">
            © 2025 أصيل | الخضروات الجاهزة للطهي
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
