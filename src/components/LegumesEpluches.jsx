import { PRODUCTS } from "./products";
import DishesPage from "./DishesPage";
import Categories from "./Categories";
const LegumesEpluches = () => {
  const pastillaProducts = PRODUCTS.filter(
    (product) => product.category === "LegumesEpluches"
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

export default LegumesEpluches;
