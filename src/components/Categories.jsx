// import { Link } from "react-router-dom";

// const Categories = () => {
//   const categoriesList = [
//     "All dishes",
//     "Extras",
//     "desserts",
//     "legumesPack",
//     "pastillas",
//     "LegumesEpluches",
//   ];

//   return (
//     <div
//       className="container mx-auto px-4 pt-2 md:pt-32 lg:pt-10"
//       id="categories"
//     >
//       <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 md:mb-8">
//         <div className="flex items-center space-x-2 mb-4 md:mb-0">
//           <Link
//             to="/"
//             className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 transition duration-300"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               className="w-5 h-5"
//             >
//               <path d="M15 6l-6 6l6 6"></path>
//             </svg>
//             <span className="text-sm font-medium">Home</span>
//           </Link>
//         </div>
//         <div className="flex flex-wrap gap-2">
//           {categoriesList.map((cat) => (
//             <Link
//               key={cat}
//               to={`/dishes/${cat.toLowerCase().replace(" ", "")}`}
//             >
//               <button
//                 className={`px-3 py-2 text-gray-800 rounded-md text-sm font-medium transition duration-300`}
//               >
//                 {cat}
//               </button>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Categories;
import { Link } from "react-router-dom";

const Categories = () => {
  const categoriesList = [
    { name: "All dishes", label: "جميع الأطباق" },
    // { name: "Extras", label: "إضافات" },
    { name: "desserts", label: "حلويات" },
    { name: "legumesPack", label: "عبوات الخضروات" },
    { name: "pastillas", label: "بسطيلة" },
    { name: "LegumesEpluches", label: "خضروات مقشرة" },
  ];

  return (
    <div
      className="container mx-auto px-4 pt-2 md:pt-32 lg:pt-10"
      id="categories"
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 md:mb-8">
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <Link
            to="/"
            className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
            >
              <path d="M15 6l-6 6l6 6"></path>
            </svg>
            <span className="text-sm font-medium">الرئيسية</span>
          </Link>
        </div>
        <div className="flex flex-wrap gap-2">
          {categoriesList.map((cat) => (
            <Link
              key={cat.name}
              to={`/dishes/${cat.name.toLowerCase().replace(" ", "")}`}
            >
              <button
                className={`px-3 py-2 text-gray-800 rounded-md text-sm font-medium transition duration-300`}
              >
                {cat.label}
              </button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
