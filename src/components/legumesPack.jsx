import { PRODUCTS } from "./products";
import DishesPage from "./DishesPage";
import Categories from "./Categories";

const LegumesPack = () => {
  const pastillaProducts = PRODUCTS.filter(
    (product) => product.category === "legumesPack"
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

export default LegumesPack;
