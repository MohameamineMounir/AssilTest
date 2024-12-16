import { FaWhatsapp } from "react-icons/fa";

const DishesPage = ({ data }) => {
  return (
    <>
      <section
        id="dishes"
        className="container mx-auto px-4 rtl font-tajawal text-center"
      >
        <div key={data.category} className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {data.items.map((dish) => (
              <div
                key={dish.name}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-52 object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6 flex-grow">
                  <h3 className="font-bold text-xl mb-2 text-gray-800 line-clamp-2 text-center">
                    {dish.name}
                  </h3>
                  <p className="text-gray-600 text-center line-clamp-3 mb-4">
                    {dish.description}
                  </p>
                  <p>{dish.weight}</p>
                  <div className="text-center mb-4">
                    <span className="text-red-500 text-lg font-bold mr-2">
                      {dish.currentPrice}
                    </span>
                    {dish.oldPrice && (
                      <span className="text-gray-400 text-sm line-through">
                        {dish.oldPrice}
                      </span>
                    )}
                  </div>
                  <a
                    href="https://wa.me/+212698883477"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-all w-full font-medium ">
                      اطلب الآن
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <a
        href="https://wa.me/+212698883477"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-600 text-white p-4 rounded-full shadow-xl hover:bg-green-700 transition-colors"
        aria-label="Contact us on Whatsapp"
      >
        <FaWhatsapp size={24} />
      </a>
    </>
  );
};

export default DishesPage;
