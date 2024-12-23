import { PRODUCTS } from "./products";
import DishesPage from "./DishesPage";
import Categories from "./Categories";

const Desserts = () => {
  const pastillaProducts = PRODUCTS.filter(
    (product) => product.category === "Desserts"
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

export default Desserts;
