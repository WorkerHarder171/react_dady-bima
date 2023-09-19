import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";

function Main() {
  const [product, setProduct] = useState([]);
  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [imageProduct, setImageProduct] = useState("");
  const [productFreshness, setProductFreshness] = useState("");
  const [additionalDesc, setAdditionalDesc] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productNameError, setProductNameError] = useState("");

  useEffect(() => {
    alert("Welcome");
  }, []);

  const addProduct = () => {
    const newProduct = {
      id: uuid(),
      name: productName,
      category: productCategory,
      image: imageProduct,
      additional: additionalDesc,
      fressnesh: productFreshness,
      price: productPrice,
    };
    setProduct([...product, newProduct]);

    setProductName("");
    setProductCategory("");
    setImageProduct("");
    setProductFreshness("");
    setAdditionalDesc("");
    setProductPrice("");
  };
  const editProduct = (id, updateData) => {
    const updateProduct = product.map((product) =>
      product.id === id ? { ...product, ...updateData } : product
    );
    setProduct(updateProduct);
  };

  const deleteProduct = (id) => {
    const confirmDelete = window.confirm(
      "Apakah anda yakin ingin menghapus produk ini?"
    );
    if (confirmDelete) {
      const updateProduct = product.filter((product) => product.id !== id);
      setProduct(updateProduct);
    }
  };

  //Fungsi untuk menangani perubahan input Product Name
  const handleProductNameChange = (event) => {
    const value = event.target.value;
    setProductName(value);
    setProductNameError("");

    //Validasi terhadap panjang product name
    if (value.trim() === "") {
      setProductNameError("Please enter a valid Product name.");
    } else if (value.length > 25) {
      setProductNameError("Product Name must not exceed 25 characters.");
    } else if (value.length < 10) {
      setProductNameError("Product Name must be at least 10 characters.");
    }
  };

  //Fungsi pengiriman form
  const handleSubmit = (event) => {
    event.preventDefault();

    //Validasi jika Product Name kosong saat tombol submit di tekan
    if (productName.trim() === "") {
      setProductNameError("Please enter a valid Product name.");
      return;
    }
  };
  return (
    <main>
      {/* Form New */}
      <form className="mx-auto my-5 w-50" onSubmit={handleSubmit}>
        <div className="form-header">
          <h1 className="text-center">Detail Product</h1>
        </div>
        <div className="form-body">
          {/* Product Name */}
          <div className="product-name mt-3">
            <p className="text-start" htmlFor="productName">
              Product Name
            </p>
            <input
              type="text"
              id="productName"
              value={productName}
              onChange={handleProductNameChange} //event handle onChange
              className="form-control"
              style={{
                border: productNameError ? "2px solid red" : "1px solid #ccc", // deepscan-disable-line // deepscan-disable-line INSUFFICIENT_NULL_CHECK
              }}
            />
            {/* Menampilkan pesan error */}
            {productNameError && (
              <div className="error py-2" style={{ color: "red" }}>
                {productNameError}
              </div>
            )}
          </div>
          {/* End of Product Name */}
          {/* Product Category */}
          <div className="product-category mt-3">
            <p className="text-start">Product Category</p>
            <select
              className="form-select"
              id="floatingSelectGrid"
              value={productCategory}
            >
              <option value="choose">Choose...</option>
              <option value="volvo">Volvo</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </div>
          {/* End of Product Category */}
          {/* Image of Product */}
          <div className="image-of-product mt-3">
            <p className="text-start">Image Of Product</p>
            <div className="input-group mb-3">
              <input
                type="file"
                className="form-control"
                id="inputGroupFile02"
                value={imageProduct}
              />
            </div>
          </div>
          {/* End of Image of Product */}
          {/* Product Freshness */}
          <div className="product-freshness mt-3">
            <p className="text-start">Product Freshness</p>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                value="Brand New"
                checked={productFreshness === "Brand New"}
                onChange={() => setProductFreshness("Brand New")}
              />
              <label
                className="form-check-label text-start"
                htmlFor="flexRadioDefault1"
              >
                Brand New
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                value="Second Hand"
                checked={productFreshness === "Second Hand"}
                onChange={() => setProductFreshness("Second Hand")}
              />
              <label
                className="form-check-label text-start"
                htmlFor="flexRadioDefault2"
              >
                Second Hand
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault3"
                value="Refurbished"
                checked={productFreshness === "Refurbished"}
                onChange={() => setProductFreshness("Refurbished")}
              />
              <label
                className="form-check-label text-start"
                htmlFor="flexRadioDefault3"
              >
                Refurbished
              </label>
            </div>
          </div>
          {/* End of Product Freshness */}
          {/* Additional Description */}
          <div className="additional-desc mt-3">
            <p className="text-start">Additional Description</p>
            <textarea
              name="additional description"
              id="add-desc"
              cols={30}
              rows={10}
              className="form-control"
              defaultValue={additionalDesc}
            />
            {/* End of Additional Description */}
          </div>
          {/* Product Price */}
          <div className="product-price mt-3">
            <p className="text-start">Product Price</p>
            <div className="input-group mb-3">
              <span className="input-group-text">$</span>
              <input
                type="number"
                className="form-control"
                aria-label="Amount (to the nearest dollar)"
                id="productPrice"
                value={productPrice}
                onChange={(event) => setProductPrice(event.target.value)}
              />
            </div>
          </div>
          {/* End of Product Price */}
          {/* Buttons */}
          <button
            type="button"
            id="btn"
            onClick={addProduct}
            className="btn w-100 btn-primary"
          >
            Submit
          </button>
          {/* End of Buttons */}
        </div>
      </form>
      {/* End of Form New */}
      <Table
        product={product}
        editProduct={editProduct}
        deleteProduct={deleteProduct}
      />
    </main>
  );
}

function Table({ product, editProduct, deleteProduct }) {
  return (
    <div>
      <div className="tabel-section mt-5">
        <div className="container">
          <h1 className="title-text text-center">List Product</h1>
          <table className="table table-striped" id="ListProduct">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">Product Name</th>
                <th scope="col">Product Category</th>
                <th scope="col">Image of Product</th>
                <th scope="col">Product Freshness</th>
                <th scope="col">Additional Description</th>
                <th scope="col">Product Price</th>
              </tr>
            </thead>
            <tbody>
              {product.map((product, index) => (
                <tr key={product.id}>
                  <td>{index + 1}</td>
                  <td>{product.name}</td>
                  <td>{product.category}</td>
                  <td>{product.imageProduct}</td>
                  <td>{product.freshess}</td>
                  <td>{product.additionalDesc}</td>
                  <td>${product.price}</td>
                  <td>
                    <button
                      onClick={() =>
                        editProduct(product.id, { name: "Update Name" })
                      } className="btn btn-primary m-1"
                    >
                      Edit
                    </button>
                    <button onClick={() => deleteProduct(product.id)}  className="btn btn-outline-primary m-1">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* end of table */}
          {/* Table Search */}
          <div className="search-table my-3">
            <input
              type="search"
              name="search-table"
              id="tabelSearch"
              className="form-control"
              placeholder="Search"
            />
          </div>
          {/* End of Table Search */}
          {/* Button Group Table */}
          <div className="button-group-table my-3 float-start">
            <button
              type="button"
              className="btn btn-primary mx-2"
              id="deleteButton"
            >
              Deletion
            </button>
            <button
              type="button"
              className="btn btn-outline-primary mx-2"
              id="searchButton"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Main;
