import { useAddToCartHandler } from "../../context/CartContext";
import commerce from "../../utils/commerce";
import Link from "next/link";
import RelatedProduct from "../../components/products/related-product";
import Button from "../../components/button/button";
import RouteTransition from "../../utils/route-transition";
import { useState } from "react";
import {
  Description,
  StyledProductPage,
  ImageContainer,
  Title,
  RelatedProducts,
} from "../../styles/products/product-styles";

const ProductPage = ({ product }) => {
  const [productSize, setProductSize] = useState();
  const images = product.assets;
  const addToCart = useAddToCartHandler();

  const relatedProducts = product.related_products;

  if (product.variant_groups.length === 0) return;
  const sizeVariant = product.variant_groups[0];

  const sizes = sizeVariant.options;

  const handleSubmit = (e) => {
    e.preventDefault();
    addToCart(product.id, 1, {
      [sizeVariant.id]: productSize,
    });
  };

  return (
    <RouteTransition>
      <StyledProductPage>
        <ImageContainer>
          {images.map((image) => (
            <div className="images">
              <img src={image.url} key={image.url} />
            </div>
          ))}
        </ImageContainer>
        <Description>
          <Title className="sub-header">{product.name}</Title>

          <div
            className="description"
            dangerouslySetInnerHTML={{ __html: product.description }}
          ></div>
          <form onSubmit={handleSubmit}>
            {sizes && (
              <div className="size">
                <p>Choose a size: </p>
                <select
                  required
                  onChange={(e) => setProductSize(e.target.value)}
                >
                  <option disabled selected>
                    Size
                  </option>
                  {sizes.map((size) => (
                    <option key={size.id} value={size.id}>
                      {size.name}
                    </option>
                  ))}
                </select>
              </div>
            )}
            <center>
              <Button type="submit">
                Add to cart | {product.price.formatted_with_symbol}
              </Button>
            </center>
          </form>
        </Description>
      </StyledProductPage>
      <div style={{ marginTop: "auto" }}>
        <Title>You might also like</Title>
        <RelatedProducts>
          {relatedProducts.map((relatedProduct) => (
            <Link href={relatedProduct.permalink}>
              <RelatedProduct
                key={relatedProduct.id}
                relatedProduct={relatedProduct}
              />
            </Link>
          ))}
        </RelatedProducts>
      </div>
    </RouteTransition>
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
