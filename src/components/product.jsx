import DataService from "../services/dataService";
import "./product.css";
import QuantityPicker from "./quantityPicker";
import { useEffect, useState } from "react";

function Product(props) {
  const [quantity, setQuantity] = useState(1);

  function add() {
    const prod4Cart = {
      ...props.data,
      quantity: quantity,
    };

    let service = new DataService();
    service.addToCart(prod4Cart);

    //here
    console.log("adding", prod4Cart);
  }

  useEffect(function () {
    console.log("Hello im a product");
  }, []);

  function onQuantityChange(qty) {
    setQuantity(qty);
  }

  function getTotal() {
    const total = props.data.price * quantity;
    const formattedTotal = total.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

    return formattedTotal;
  }

  return (
    <div className="product">
      <img src={"/images/" + props.data.image} alt=""></img>
      <h5>{props.data.title}</h5>

      <div className="prices">
        <label className="total">{getTotal()}</label>
        <label className="total">
          {props.data.price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </label>
      </div>
      <QuantityPicker onQuantityChange={onQuantityChange}></QuantityPicker>
      <button type="button" className="btn btn-dark" onClick={add}>
        ADD
      </button>
    </div>
  );
}

export default Product;
