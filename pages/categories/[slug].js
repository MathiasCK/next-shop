import { motion } from "framer-motion";
import ProductList from "../../components/products/product-list";
import { CategoryName } from "../../styles/categories/category-styles";
import { textAnim } from "../../utils/animation";
import commerce from "../../utils/commerce";

const CategoryPage = ({ category, products }) => {
  console.log(products);
  return (
    <div>
      <CategoryName
        variants={textAnim}
        initial="hidden"
        animate="show"
        className="background-text"
      >
        {category.name}
      </CategoryName>
      <ProductList products={products} />
    </div>
  );
};

export default CategoryPage;

export const getStaticProps = async ({ params }) => {
  const { slug } = params;

  const category = await commerce.categories.retrieve(slug, {
    type: "slug",
  });

  const { data: products } = await commerce.products.list({
    // category_slug: slug
  });

  const filterProducts = products.filter((product) => {
    return product.categories.some((category) => {
      return category.slug === slug;
    });
  });

  return {
    props: {
      category,
      products: filterProducts,
    },
  };
};

export const getStaticPaths = async () => {
  const { data: categories } = await commerce.categories.list();

  return {
    paths: categories.map((category) => ({
      params: {
        slug: category.slug,
      },
    })),
    fallback: true,
  };
};
