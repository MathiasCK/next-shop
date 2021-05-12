import {
  useAddToCartHandler,
  useSideBarHandler,
} from "../../context/AppContext";
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
import Sidebar from "../../components/layout/navbar/sidebar";

const ProductPage = ({ product }) => {
  const [productSize, setProductSize] = useState();
  const sideBarHandler = useSideBarHandler();
  const images = product.assets;
  const addToCart = useAddToCartHandler();

  const [shippingInfo, setShippingInfo] = useState(false);
  const [deliveryInfo, setDeliveryInfo] = useState(false);

  const shippingHandler = () => {
    setShippingInfo(!shippingInfo);
  };

  const deliveryHandler = () => {
    setDeliveryInfo(!deliveryInfo);
  };

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
          <div className="images">
            {images.map((image) => (
              <img src={image.url} key={image.url} />
            ))}
          </div>
        </ImageContainer>
        <Description>
          <Title className="header">{product.name}</Title>
          <div className="grow">
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
                <Button
                  className="inverted"
                  type="submit"
                  onClick={sideBarHandler}
                >
                  Add to cart | {product.price.formatted_with_symbol}
                </Button>
              </center>
            </form>
            <div className="information">
              <div className="info-header">
                <h4>Shipping and returns</h4>
                <a onClick={shippingHandler}>+</a>
              </div>
              {shippingInfo && (
                <div>
                  <p>
                    Arrives in 5 to 7 days, returns accepted within 30 days. For
                    more information, click here.
                  </p>
                </div>
              )}
            </div>

            <div className="information">
              <div className="info-header">
                <h4>Details</h4>
                <a onClick={deliveryHandler}>+</a>
              </div>
              {deliveryInfo && (
                <div>
                  <p>
                    Slightly textured fabric with tonal geometric design and a
                    bit of shine
                  </p>
                </div>
              )}
            </div>
          </div>
        </Description>
      </StyledProductPage>
      <div style={{ paddingTop: "10rem" }}>
        <center>
          <p style={{ fontWeight: "lighter" }}>Suggested products</p>
          <Title style={{ maxWidth: "500px" }}>
            You may also like to check out these products.
          </Title>
        </center>
      </div>
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
      <Sidebar />
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
