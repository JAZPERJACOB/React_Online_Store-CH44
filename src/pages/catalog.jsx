import Product from "../components/product";
import "./catalog.css";
import { useEffect, useState } from "react";
import DataService from "../services/dataService";

function Catalog() {
  const [productState, setProducts] = useState([]);

  useEffect(function () {
    console.log("component is loaded");
    loadCatalog();
  }, []);

  async function loadCatalog() {
    let service = new DataService();
    let products = await service.getProducts();
    setProducts(products);

    console.log(products);
  }

  return (
    <div>
      <h1>Here look {productState.length} my awesome products</h1>
      {productState.map((productArrow) => (
        <Product data={productArrow}></Product>
      ))}
    </div>
  );
}

export default Catalog;
