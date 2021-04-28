import ProductList from "../../components/products/product-list";
import commerce from "../../utils/commerce";

const CategoryPage = ({ category, products }) => {
  if (!category || !products) return <div>loading...</div>;
  return (
    <div>
      <h1>{category.name}</h1>
      <ProductList products={products} />
    </div>
  );
};

export default CategoryPage;

export async function getStaticProps({ params }) {
  try {
    const { slug } = params;
    if (!slug)
      return {
        props: {},
      };

    console.log(slug);

    const category = await commerce.categories.retrieve(slug, {
      type: "slug",
    });

    const { data: products } = await commerce.products.list({
      category_slug: "slug",
    });

    return {
      props: {
        category,
        products,
      },
    };
  } catch (error) {
    console.log(error.message);
    return {
      props: {},
    };
  }
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
