import "./product.css";
import QuantityPicker from "./quantityPicker";
function Product(props) {
  return (
    <div className="product">
      <img src={"/images/" + props.data.image} alt=""></img>
      <h5>{props.data.title}</h5>

      <div className="prices">
        <label className="price">
          {props.data.price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </label>
        <label className="total">
          {props.data.price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </label>
      </div>
      <QuantityPicker></QuantityPicker>
      <button type="button" className="btn btn-dark">
        ADD
      </button>
    </div>
  );
}

export default Product;
