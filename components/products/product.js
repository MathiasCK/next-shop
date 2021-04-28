const Product = ({ name, price, assets, description }) => {
  const image = assets[0].url;
  return (
    <div>
      <p>
        {name}: {price.formatted_with_symbol}
      </p>
      <img src={image} style={{ height: "100px", width: "100px" }} />
      <p dangerouslySetInnerHTML={{ __html: description }} />
    </div>
  );
};

export default Product;
