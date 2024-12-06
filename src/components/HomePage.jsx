import { lazy, Suspense } from "react";
import { FaWhatsapp, FaClock } from "react-icons/fa";
import { Link } from "react-router-dom";
import img1 from "../assets/kouskous.jpg";
import img2 from "../assets/amracheCarot.jpg";
import img3 from "../assets/pastilaPison.webp";
import img4 from "../assets/basbousa.jpeg";

// Lazy load components to reduce initial bundle size
const AboutPage = lazy(() => import("./AboutPage"));
// const DishesPage = lazy(() => import("./DishesPage"));

const HomePage = () => {
  // Product categories data
  const categories = [
    {
      src: img1,
      title: "Meal Packs",
      description: "Découvrez nos packs de repas préparés",
      route: "/dishes",
      items: [
        "Pack couscous",
        "Pack soupe",
        "Pack légumes sautés",
        "Pack tajine à choix",
      ],
    },
    {
      src: img2,
      title: "Légumes",
      description: "Légumes frais et préparés",
      route: "/dishes",
      items: ["Légumes épluchés à choix", "Légumes coupés à choix"],
    },
    {
      src: img3,
      title: "Pastillas",
      description: "Pastillas fraîches et savoureuses",
      route: "/dishes",
      items: ["Pastillas poisson", "Pastillas poulet"],
    },
    {
      src: img4,
      title: "Desserts",
      description: "Nos délicieux desserts",
      route: "/dishes",
      items: ["Basboussa nature", "Basboussa à la crème", "Cake"],
    },
  ];

  return (
    <>
      <div className="bg-gradient-to-r from-green-700 to-green-500 text-white py-4">
        <div className="container mx-auto flex flex-col space-y-3 md:space-y-0 md:flex-row items-center justify-between text-center md:text-left px-4">
          {/* Left Section */}
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-2">
            <FaClock size={20} />
            <span className="font-bold text-lg text-green-200 ">
              {" "}
              Livraison
            </span>
            <span className="text-sm md:text-base">
              Livraison dans les 24 heures suivant la commande 🚚
            </span>
          </div>

          {/* Right Section */}
          <div className="text-sm md:text-base">
            التوصيل بعد 24 ساعة من الطلب 🚚
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-extrabold text-center mb-10 text-green-800">
          مرحبًا بكم في أصيل
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-1 md:gap-5 lg:gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 hover:border-green-600 transition-all"
            >
              <Link to={category.route}>
                <div className="relative">
                  {/* Optimized images with dimensions and lazy-loading */}
                  <img
                    src={category.src}
                    alt={`Image de ${category.title}`}
                    loading="lazy"
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity p-4 flex flex-col justify-end text-center">
                    <h2 className="text-lg font-semibold text-white">
                      {category.title}
                    </h2>
                    <p className="text-sm text-gray-200">
                      {category.description}
                    </p>
                  </div>
                </div>
              </Link>

              <div className="p-4 flex flex-col justify-between h-full">
                <ul className="space-y-2 mb-4 text-center">
                  {category.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="text-gray-600 hover:text-green-700 font-medium"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lazy-loaded pages */}
      <Suspense fallback={<div>Loading...</div>}>
        <AboutPage />
        {/* <DishesPage /> */}
      </Suspense>

      {/* Whatsapp Floating Button */}
      <a
        href="https://wa.me/+212648614441"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-600 text-white p-4 rounded-full shadow-xl hover:bg-green-700 transition-colors"
        aria-label="Contactez-nous sur Whatsapp"
      >
        <FaWhatsapp size={24} />
      </a>
    </>
  );
};

export default HomePage;
