import CategoryList from "../../components/category/category-list";
import commerce from "../../utils/commerce";

const Category = ({ categories }) => {
  return (
    <div>
      <h1>Categories</h1>
      <CategoryList categories={categories} />
    </div>
  );
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
