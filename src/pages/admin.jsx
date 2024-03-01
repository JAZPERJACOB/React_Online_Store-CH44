import "./admin.css";
import { useState } from "react";

//create the component
function Admin() {
  const [product, setProduct] = useState({
    title: "",
    category: "",
    price: "",
    image: "",
  });

  function handleInputChange() {}

  return (
    <div className="admin-page">
      <h1>Store Management</h1>

      <div className="parent-container">
        <h3>Register Product</h3>
      </div>

      <div>
        <label>Title</label>
        <input
          value={product.title}
          onChange={handleInputChange}
          name="title"
          type="text"
          className="form-control"
        />
      </div>

      <div>
        <label>Category</label>
        <input
          value={product.category}
          onChange={handleInputChange}
          name="category"
          type="text"
          className="form-control"
        />
      </div>

      <div>
        <label>Price</label>
        <input
          value={product.price}
          onChange={handleInputChange}
          name="price"
          type="text"
          className="form-control"
        />
      </div>

      <div>
        <label>Image</label>
        <input
          value={product.image}
          onChange={handleInputChange}
          name="image"
          type="text"
          className="form-control"
        />
      </div>
      <button>Save</button>
    </div>
  );
}

export default Admin;
