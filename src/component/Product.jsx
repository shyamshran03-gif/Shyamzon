import "./Product.css";

const Product = ({ product, isSelected, onSelect }) => {
  return (
    <div
      className={`product ${isSelected ? "selected" : ""}`}
      onClick={() => onSelect(product)}
    >
      <img src={product.thumbnail} alt={product.title} />
      <h4><b>Title: </b> {product.title}</h4>
      <p><b>Price: </b> {product.price}</p>
      <p><b>Description: </b> {product.description}</p>
      <p> <b>Category: </b> {product.category} </p>
        
    </div>
  );
};

export default Product;


