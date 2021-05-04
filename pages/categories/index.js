import CategoryList from "../../components/category/category-list";
import { useCategories } from "../../context/CartContext";
import commerce from "../../utils/commerce";

const Category = ({ categories }) => {
  return <CategoryList categories={categories} />;
};

export async function getStaticProps() {
  const { data: categories } = await commerce.categories.list();

  return {
    props: {
      categories,
    },
  };
}

export default Category;
