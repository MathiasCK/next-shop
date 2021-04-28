import { useAddToCartHandler } from "../../context/CartContext";
import commerce from "../../utils/commerce";

const ProductPage = ({ product }) => {
  const images = product.assets;
  const addToCart = useAddToCartHandler();

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.price.formatted_with_symbol}</p>
      {images.map((image) => (
        <img
          src={image.url}
          style={{ height: "100px", width: "100px" }}
          key={image.url}
        />
      ))}
      <button onClick={() => addToCart(product.id, 1)}>Add to cart</button>
    </div>
  );
};

export default ProductPage;

export async function getStaticProps({ params }) {
  const { permalink } = params;

  const product = await commerce.products.retrieve(permalink, {
    type: "permalink",
  });

  return {
    props: {
      product,
    },
  };
}
export async function getStaticPaths() {
  const { data: products } = await commerce.products.list();

  return {
    paths: products.map((product) => ({
      params: {
        permalink: product.permalink,
      },
    })),
    fallback: false,
  };
}
