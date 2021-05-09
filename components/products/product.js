import {
  ProductDescription,
  ProductImage,
  StyledProduct,
} from "../../styles/products/product-styles";
import { productAnim } from "../../utils/animation";

const Product = ({ name, price, assets }) => {
  if (!name || !price || !assets) return <div>Loading...</div>;
  const images = assets;

  return (
    <StyledProduct variants={productAnim}>
      {images[1].url && (
        <ProductImage imageUrl={images[0].url} imageUrl2={images[1].url} />
      )}
      <ProductDescription>
        <p className="sub-header product">{name}</p>
        <p className="sub-header price">{price.formatted_with_symbol}</p>
      </ProductDescription>
    </StyledProduct>
  );
};

export default Product;
