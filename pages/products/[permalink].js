import { useAddToCartHandler } from "../../context/CartContext";
import commerce from "../../utils/commerce";
import Link from "next/link";
import RelatedProduct from "../../components/products/related-product";
import styled from "styled-components";
import Button from "../../components/button/button";
import RouteTransition from "../../utils/route-transition";
import { useState } from "react";

const ProductPage = ({ product }) => {
  const [productSize, setProductSize] = useState();
  const images = product.assets;
  const addToCart = useAddToCartHandler();

  const relatedProducts = product.related_products;

  if (product.variant_groups.length === 0) return;
  const sizeVariant = product.variant_groups[0];
  console.log(
    "🚀 ~ file: [permalink].js ~ line 19 ~ ProductPage ~ sizeVariant",
    sizeVariant
  );
  const sizes = sizeVariant.options;

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
          <p>{product.price.formatted_with_symbol}</p>

          <div
            className="description"
            dangerouslySetInnerHTML={{ __html: product.description }}
          ></div>
          <form onSubmit={(e) => e.preventDefault()}>
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
              <Button
                type="submit"
                onClick={() =>
                  addToCart(product.id, 1, {
                    [sizeVariant.id]: productSize,
                  })
                }
              >
                Add to cart
              </Button>
            </center>
          </form>
        </Description>
      </StyledProductPage>
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
    </RouteTransition>
  );
};

const StyledProductPage = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-column-gap: 1rem;
  grid-row-gap: 2rem;
  justify-items: center;
  min-height: 90vh;
  padding-top: 10px;
`;

const Description = styled.div`
  position: sticky;
  top: 5rem;
  height: calc(70vh);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .description {
    width: 50%;
    font-size: calc(10px + 6 * ((100vw - 320px) / 680));
    margin-bottom: 2rem;
    font-weight: lighter !important;
    line-height: em;
  }
  form {
    width: 50%;
  }
  .size {
    display: flex;
    width: 100%;
    justify-content: space-between;
    border-bottom: 1px solid black;
    select {
      outline: none;
      border: none;
    }
  }
  button {
    width: 10%;
    margin-top: 2rem;
    padding: 1rem !important;
  }
`;

const ImageContainer = styled.div`
  flex: 50%;
  margin: 0 auto;
  .images {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0 10%;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      margin-bottom: 0.5rem;
    }
  }
`;

const Title = styled.h1`
  text-align: center;
  color: rgba(0, 0, 0, 0.7);
`;

const RelatedProducts = styled.div`
  cursor: pointer;
  width: 100%;
  display: flex;
  min-height: 30vh;
`;

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
