import { PRODUCTS } from "./products";
import DishesPage from "./DishesPage";
import Categories from "./Categories";

const AllDishes = () => {
  return (
    <>
      <Categories />

      {PRODUCTS.map((product) => (
        <DishesPage key={product.category} data={product} />
      ))}
    </>
  );
};

export default AllDishes;
