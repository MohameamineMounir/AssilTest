import { PRODUCTS } from "./products";
import DishesPage from "./DishesPage";
import Categories from "./Categories";

const Salads = () => {
  const pastillaProducts = PRODUCTS.filter(
    (product) => product.category === "salads"
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

export default Salads;
