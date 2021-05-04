import ProductList from "../../components/products/product-list";
import commerce from "../../utils/commerce";
import Spinner from "../../utils/Spinner";

const CategoryPage = ({ category, products }) => {
  return (
    <div>
      <center>
        <h1 style={{ fontWeight: "lighter" }}>
          This is: {category.name.toUpperCase()}
        </h1>
      </center>
      <ProductList products={products} />
    </div>
  );
};

export default CategoryPage;

export async function getStaticProps({ params }) {
  const { slug } = params;

  const category = await commerce.categories.retrieve(slug, {
    type: "slug",
  });

  const { data: products } = await commerce.products.list({
    //category_slug: slug,
  });

  return {
    props: {
      category,
      products,
    },
  };
}

export async function getStaticPaths() {
  const { data: categories } = await commerce.categories.list();

  return {
    paths: categories.map((category) => ({
      params: {
        slug: category.slug,
      },
    })),
    fallback: true,
  };
}
