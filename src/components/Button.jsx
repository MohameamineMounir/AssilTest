// src/components/Button.jsx
import { Link } from "react-router-dom";

const Button = ({ children, to, onClick, className }) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`inline-block bg-green-600 text-white py-2 px-4 rounded-md font-medium hover:bg-green-700 transition-colors ${className}`}
    >
      {children}
    </Link>
  );
};

export default Button;
