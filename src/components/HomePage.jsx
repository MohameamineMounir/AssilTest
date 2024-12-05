// // import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { FaWhatsapp, FaClock } from "react-icons/fa";

// // Import images
// import img1 from "../assets/kouskous.jpg";
// import img2 from "../assets/ambranch.webp";
// import img3 from "../assets/pastilaPison.webp";
// import img4 from "../assets/fruits.jpg";
// import AboutPage from "./AboutPage";
// import DishesPage from "./DishesPage";

// const HomePage = () => {
//   const categories = [
//     {
//       src: img1,
//       title: "Meal Packs",
//       description: "Découvrez nos packs de repas préparés",
//       route: "/dishes",
//       items: [
//         "Pack couscous",
//         "Pack soupe",
//         "Pack légumes sautés",
//         "Pack tajine à chois",
//       ],
//     },
//     {
//       src: img2,
//       title: "Légumes",
//       description: "Légumes frais et préparés",
//       route: "/dishes",
//       items: ["Légumes épluchés à choix", "Légumes coupés à choix"],
//     },
//     {
//       src: img3,
//       title: "Pastillas",
//       description: "Pastillas fraîches et savoureuses",
//       route: "/dishes",
//       items: ["Pastillas poisson", "Pastillas poulet"],
//     },
//     {
//       src: img4,
//       title: "Desserts",
//       description: "Nos délicieux desserts",
//       route: "/dishes",
//       items: ["Basboussa nature", "Basboussa à la crème", "Cake"],
//     },
//   ];

//   // const [currentTime, setCurrentTime] = useState(new Date());

//   // useEffect(() => {
//   //   const timer = setInterval(() => setCurrentTime(new Date()), 1000);
//   //   return () => clearInterval(timer);
//   // }, []);

//   return (
//     <>
//       {/* Delivery Notice Banner */}
//       <div className="bg-gradient-to-r from-green-600 to-green-400 text-white text-center py-4 px-4">
//         <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
//           <div className="flex items-center mb-2 md:mb-0">
//             <FaClock size={20} className="mr-2" />
//             <span className="font-bold text-lg">🚚 Livraison</span>
//             <span className="ml-2">Commandez avant 24h</span>
//           </div>
//           <div className="text-right flex items-center">
//             <span className="text-lg font-semibold ml-2">
//               {/* {currentTime.toLocaleTimeString("fr-FR")} */}
//             </span>
//             <span className="ml-2 rtl:mr-2">
//               التوصيل قبل 24 ساعة من الطلب 🚚
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* Categories Section */}
//       <div className="container mx-auto px-4 py-6">
//         <h1 className="text-4xl font-extrabold text-center mb-8 text-green-800">
//           Nos Catégories de Produits
//         </h1>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {categories.map((category, index) => (
//             <div
//               key={index}
//               className="bg-white shadow-md rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
//             >
//               <Link to={category.route}>
//                 <div className="relative">
//                   <img
//                     src={category.src}
//                     alt={category.title}
//                     className="w-full h-48 object-cover"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent bg-opacity-50 flex flex-col justify-end p-4 text-white">
//                     <h2 className="text-xl font-bold">{category.title}</h2>
//                     <p className="text-sm">{category.description}</p>
//                   </div>
//                 </div>
//               </Link>

//               <div className="p-4">
//                 <ul className="space-y-2">
//                   {category.items.map((item, itemIndex) => (
//                     <li
//                       key={itemIndex}
//                       className="text-green-700 hover:text-green-800 transition-colors"
//                     >
//                       {item}
//                     </li>
//                   ))}
//                 </ul>
//                 <Link
//                   to={category.route}
//                   className="mt-4 block text-center bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition-colors"
//                 >
//                   Voir plus
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <AboutPage />
//       <DishesPage />

//       {/* Whatsapp Icon */}
//       <a
//         href="https://wa.me/123456789"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors"
//       >
//         <FaWhatsapp size={24} />
//       </a>
//     </>
//   );
// };

// export default HomePage;
import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaClock } from "react-icons/fa";

// Import images (converted to optimized formats like WebP)
import img1 from "../assets/kouskous.jpg";
import img2 from "../assets/ambranch.webp";
import img3 from "../assets/pastilaPison.webp";
import img4 from "../assets/fruits.jpg";

// Lazy load components to reduce initial bundle size
const AboutPage = lazy(() => import("./AboutPage"));
const DishesPage = lazy(() => import("./DishesPage"));

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
      {/* Delivery Notice Banner */}
      <div className="bg-gradient-to-r from-green-600 to-green-400 text-white text-center py-4 px-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-2 md:mb-0">
            <FaClock size={20} className="mr-2" />
            <span className="font-bold text-lg">🚚 Livraison</span>
            <span className="ml-2">Commandez avant 24h</span>
          </div>
          <div className="text-right flex items-center">
            <span className="ml-2 rtl:mr-2">
              التوصيل قبل 24 ساعة من الطلب 🚚
            </span>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-4xl font-extrabold text-center mb-8 text-green-800">
          Nos Catégories de Produits
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <Link to={category.route}>
                <div className="relative">
                  {/* Optimized images with dimensions and lazy-loading */}
                  <img
                    src={category.src}
                    alt={category.title}
                    loading="lazy"
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent bg-opacity-50 flex flex-col justify-end p-4 text-white">
                    <h2 className="text-xl font-bold">{category.title}</h2>
                    <p className="text-sm">{category.description}</p>
                  </div>
                </div>
              </Link>

              <div className="p-4">
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="text-green-700 hover:text-green-800 transition-colors"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  to={category.route}
                  className="mt-4 block text-center bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition-colors"
                >
                  Voir plus
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lazy-loaded pages */}
      <Suspense fallback={<div>Loading...</div>}>
        <AboutPage />
        <DishesPage />
      </Suspense>

      {/* Whatsapp Icon */}
      <a
        href="https://wa.me/123456789"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors"
      >
        <FaWhatsapp size={24} />
      </a>
    </>
  );
};

export default HomePage;
