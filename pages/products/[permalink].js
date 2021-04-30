import { useAddToCartHandler } from "../../context/CartContext";
import commerce from "../../utils/commerce";
import Link from "next/link";
import RelatedProduct from "../../components/products/related-product";
import styled from "styled-components";
import Button from "../../components/button/button";

const ProductPage = ({ product }) => {
  const images = product.assets;
  const addToCart = useAddToCartHandler();

  const relatedProducts = product.related_products;

  return (
    <>
      <StyledProductPage>
        <ImageContainer>
          {images.map((image) => (
            <div className="images">
              <img src={image.url} key={image.url} />
            </div>
          ))}
        </ImageContainer>
        <Description>
          <Title>{product.name}</Title>
          <p>{product.price.formatted_with_symbol}</p>

          <div
            className="description"
            dangerouslySetInnerHTML={{ __html: product.description }}
          ></div>
          <Button onClick={() => addToCart(product.id, 1)}>Add to cart</Button>
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
    </>
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
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .description {
    width: 50%;
    margin-bottom: 2rem;
    font-weight: lighter;
    line-height: 1em;
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
    margin-left: 40%;
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
  font-weight: 400;
  color: rgba(0, 0, 0, 0.7);
`;

const RelatedProducts = styled.div`
  cursor: pointer;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
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
