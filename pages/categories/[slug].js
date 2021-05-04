import { motion } from "framer-motion";
import ProductList from "../../components/products/product-list";
import { textAnim } from "../../utils/animation";
import commerce from "../../utils/commerce";

const CategoryPage = ({ category, products }) => {
  console.log(products);
  return (
    <div>
      <motion.h1
        variants={textAnim}
        initial="hidden"
        animate="show"
        className="background-text"
      >
        {category.name.toUpperCase()}
      </motion.h1>
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
