import { useEffect, useState } from "react";
import "./cart.css";
import DataService from "../services/dataService";

function Cart() {
  const [cartlist, setCartList] = useState([]);

  useEffect(function () {
    loadCart();
  }, []);

  function loadCart() {
    let service = new DataService();
    let cart = service.readCart();
    console.log(cart);
    setCartList(cart);
  }

  function getTotal(prod) {
    const total = prod.price * prod.quantity;
    return total.toFixed(2);
  }

  function getOrderTotal() {
    let total = 0;
    for (let i = 0; i < cartlist.length; i++) {
      let prod = cartlist[i];
      total += prod.price * prod.quantity;
    }

    return total.toFixed(2);
  }

  return (
    <div className="cart">
      <h1>Are you ready to checkout?</h1>

      <div className="parent">
        <div className="list">
          {cartlist.map((prod) => (
            <div className="cart-prod" key={prod._id}>
              <img src={"/images/" + prod.image} alt="" />
              <div>
                <h5>{prod.title}</h5>
                <p>{prod.category}</p>
              </div>
              <label>{prod.price.toFixed(2)}</label>
              <label>{prod.quantity}</label>
              <lable>{getTotal(prod)}</lable>
              <button className="btn btn-sm btn-danger">Remove</button>
            </div>
          ))}
        </div>
        <div className="aside">
          <h4>Your Total</h4>
          <label>${getOrderTotal()}</label>
        </div>
      </div>
    </div>
  );
}

export default Cart;
