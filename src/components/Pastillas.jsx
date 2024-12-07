import { PRODUCTS } from "./products";
import DishesPage from "./DishesPage";
import Categories from "./Categories";

const Pastillas = () => {
  const pastillaProducts = PRODUCTS.filter(
    (product) => product.category === "Pastillas"
  );

  return (
    <>
      <Categories />
      {pastillaProducts.map((product) => (
        <DishesPage key={product.category} data={product} />
      ))}
    </>
  );
};

export default Pastillas;
