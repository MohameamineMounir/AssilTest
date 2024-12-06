import bstillaPoison from "../assets/pastilaPison.webp";
import pastillaAupoulet from "../assets/pastillaAupoulet.png";
import LegumesEpluche from "../assets/mixlegume (1).jpg";
import Legumes from "../assets/amrache2.jpg";

import frites from "../assets/frenchFries.jpg";
import cake from "../assets/cake.jpg";
import soup from "../assets/soup.jpg";
import basbousa from "../assets/basbousa.jpeg";

import basbosaCreme from "../assets/basbousaAuCreme.jpg";

import LegumesSautes from "../assets/sauteLégumes.jpeg";

import saladeRoyale from "../assets/saladeRoyale.jpeg";
import saladevaries from "../assets/saladevaries.jpg";

import kouskous from "../assets/kouskous.jpg";
import tajine from "../assets/tajine.jpg";
import Fruits from "../assets/fruits.jpg";
const DishesPage = () => {
  const productCategories = [
    {
      category: "Meal Packs",
      items: [
        {
          name: "Pack Couscous",
          description: "Pack complet pour préparer un couscous traditionnel",
          image: kouskous,
        },
        {
          name: "Pack Soupe",
          description: "Pack de soupes variées et savoureuses",
          image: soup,
        },
        {
          name: "Pack Légumes Sautés",
          description: "Mélange de légumes frais pour sauté",
          image: LegumesSautes,
        },
        {
          name: "Pack Tajine à Choix",
          description: "Pack personnalisable pour tajine",
          image: tajine,
        },
      ],
    },
    {
      category: "Légumes",
      items: [
        {
          name: "Légumes Épluché à Choix",
          description: "Légumes frais et préparés selon vos préférences",
          image: LegumesEpluche,
        },
        {
          name: "Légumes Épluché et Coupé à Choix",
          description: "Légumes prêts à cuisiner, lavés et coupés",
          image: Legumes,
        },
      ],
    },
    {
      category: "Pastillas",
      items: [
        {
          name: "Pastillas Poisson",
          description: "Pastillas délicates aux fruits de mer",
          image: bstillaPoison,
        },
        {
          name: "Pastillas Poulet",
          description: "Pastillas traditionnelles au poulet",
          image: pastillaAupoulet,
        },
      ],
    },
    {
      category: "Desserts",
      items: [
        {
          name: "Basbossa Nature",
          description: "Basbossa classique sans garniture",
          image: basbousa,
        },
        {
          name: "Basbossa à la Crème",
          description: "Basbossa enrichie avec de la crème",
          image: basbosaCreme,
        },
        {
          name: "Cake",
          description: "Cake maison délicieux",
          image: cake,
        },
      ],
    },
    {
      category: "Extras",
      items: [
        {
          name: "Fruits",
          description: "Sélection de fruits frais",
          image: Fruits,
        },
        {
          name: "Frites",
          description: "Frites croustillantes",
          image: frites,
        },
      ],
    },
    {
      category: "Salades",
      items: [
        {
          name: "Salades Variées",
          description: "Assortiment de salades fraîches",
          image: saladevaries,
        },
        {
          name: "Salades Royales",
          description: "Salades de luxe avec ingrédients premium",
          image: saladeRoyale,
        },
      ],
    },
  ];

  return (
    <section
      id="dishes"
      className="container mx-auto my-16 px-4 rtl font-tajawal text-center"
    >
      {productCategories.map((category, categoryIndex) => (
        <div key={categoryIndex} className="mb-16">
          <h2 className="text-3xl font-extrabold text-green-700 text-center mb-10">
            {category.category}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {category.items.map((dish, dishIndex) => (
              // <div
              //   key={dishIndex}
              //   className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              // >
              //   <div className="relative">
              //     <img
              //       src={dish.image}
              //       alt={dish.name}
              //       className="w-full h-52 object-cover rounded-t-xl"
              //     />
              //     <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-75 rounded-t-xl"></div>
              //     <h3 className="absolute inset-0 flex items-center justify-center text-xl font-semibold text-white">
              //       {dish.name}
              //     </h3>
              //   </div>

              //   <div className="p-6">
              //     <p className="text-gray-600">{dish.description}</p>
              //     <button className="mt-4 w-full bg-green-500 text-white py-2 rounded-md font-medium hover:bg-green-600 transition">
              //       Order Now
              //     </button>
              //   </div>
              // </div>
              <div
                key={dishIndex}
                className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <div className="relative group">
                  {/* Image Section */}
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-52 object-cover rounded-t-xl"
                  />

                  {/* Text Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent group-hover:from-green-800 group-hover:via-green-400 opacity-75 rounded-t-xl transition-all duration-300"></div>
                  <h3 className="absolute inset-0 flex flex-col items-center justify-center text-center text-lg md:text-xl font-bold text-white px-4">
                    {dish.name}
                  </h3>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <p className="text-gray-700 leading-relaxed">
                    {dish.description}
                  </p>
                  <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg font-medium hover:bg-green-700 transition">
                    Order Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default DishesPage;
