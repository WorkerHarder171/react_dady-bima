import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import Table from "./Table";

function Main() {
  const [product, setProduct] = useState([]);
  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [imageProduct, setImageProduct] = useState("");
  const [productFreshness, setProductFreshness] = useState("Brand New");
  const [additionalDesc, setAdditionalDesc] = useState("");
  const [productPrice, setProductPrice] = useState("");

  // Set Error
  const [hasError, setHasError] = useState(true);

  //ProductErrorMessage
  const [productNameError, setProductNameError] = useState("");
  const [imageProductError, setImageProductError] = useState("");
  const [productFreshnessError, setProductFreshnessError] = useState("");
  const [productPriceError, setProductPriceError] = useState("");

  //Variable Regular Expression
  const productNameRegex = /^[a-zA-Z\s]{1,25}$/;
  const imageRegex = /\.(jpg|jpeg|png)$/i;
  const productPriceRegex = /^\d+(\d{1,2})?$/;

  useEffect(() => {
    alert("Welcome");
  }, []);

  //Fungsi untuk menangani perubahan input Product Name
  const handleProductNameChange = (event) => {
    const value = event.target.value;
    setProductName(value);
    setProductNameError("");

    //Validasi terhadap panjang product name
    if (value.trim() === "") {
      setProductNameError("Please enter a valid Product name.");
      setHasError(true);
      if (!productNameRegex.test(value)) {
        setProductNameError("Please enter a valid Product name.");
        setHasError(true);
      } else {
        setProductNameError("");
        setHasError(false);
      }
    } else if (value.length > 25) {
      setProductNameError("Product Name must not exceed 25 characters.");
      setHasError(true);
    } else if (value.length < 10) {
      setProductNameError("Product Name must be at least 10 characters.");
      setHasError(true);
    } else {
      setHasError(false);
    }
  };

  const handleProductCategory = (event) => {
    const category = event.target.value;
    setProductCategory(category);
  };

  const handleImageProduct = (event) => {
    const file = event.target.value;
    setImageProduct(file);
    setImageProductError("");

    if (!imageRegex.test(file)) {
      setImageProductError("Please upload a file jpg, jpeg, or png.");
      setHasError(true);
    } else {
      setImageProductError("");
      setHasError(false);
    }
  };

  const handleProductFreshness = (event) => {
    const freshness = event.target.value;
    setProductFreshness(freshness);
    setProductFreshnessError("");

    if (freshness === "") {
      setProductFreshnessError("Please select a freshness option");
      setHasError(true);
    } else {
      setHasError(false);
    }
  };

  const handleAdditionalDesc = (event) => {
    const additional = event.target.value;
    setAdditionalDesc(additional);
  };

  const handleProductPrice = (event) => {
    const price = event.target.value;
    setProductPrice(price);
    setProductPriceError("");

    if (!productPriceRegex.test(price)) {
      setProductPriceError("Please input valid number!");
      setHasError(true);
    } else {
      setProductPriceError("");
      setHasError(false);
    }
  };

  const handleEditProduct = (updatedProduct) => {
    const { id, name, category, image, freshness, additional, price } =
      updatedProduct;

    // Cari indeks produk yang sesuai berdasarkan ID
    const productIndex = product.findIndex((data) => data.id === id);

    if (productIndex !== -1) {
      // Salin state produk ke array baru
      const updatedProducts = [...product];

      // Perbarui produk dengan data baru
      updatedProducts[productIndex] = {
        ...updatedProducts[productIndex],
        name,
        category,
        image,
        freshness,
        additional,
        price,
      };

      // Perbarui state dengan produk yang sudah diperbarui
      setProduct({ products: updatedProducts });
    }
  };

  const deleteProduct = (id) => {
    // Menapilkan konfirmasi atau alert
    const confirmDelete = window.confirm(
      "Apakah anda yakin ingin menghapus produk ini?"
    );
    if (confirmDelete) {
      const updateProduct = product.filter((product) => product.id !== id);
      setProduct(updateProduct);
    }
  };

  //Fungsi pengiriman form
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!hasError) {
      const newProduct = {
        id: uuid(),
        name: productName,
        category: productCategory,
        image: imageProduct,
        additional: additionalDesc,
        freshness: productFreshness,
        price: productPrice,
      };
      setProduct([...product, newProduct]);
      console.log("product=>", newProduct);
      // Set useState empty
      setProductName("");
      setProductCategory("");
      setImageProduct("");
      setProductFreshness("");
      setAdditionalDesc("");
      setProductPrice("");
      alert("Data Terkirim!");
    } else {
      alert("Data Invalid");
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
              onChange={handleProductCategory}
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
                onChange={handleImageProduct}
              />
            </div>
            {imageProductError && (
              <p lassName="error py-2" style={{ color: "red" }}>
                {imageProductError}
              </p>
            )}
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
                onChange={handleProductFreshness}
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
                onChange={handleProductFreshness}
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
                cheked={productFreshness === "Refurbished"}
                onChange={handleProductFreshness}
              />
              <label
                className="form-check-label text-start"
                htmlFor="flexRadioDefault3"
              >
                Refurbished
              </label>
            </div>
            {productFreshnessError && (
              <p lassName="error py-2" style={{ color: "red" }}>
                {productFreshnessError}
              </p>
            )}
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
              value={additionalDesc}
              onChange={handleAdditionalDesc}
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
                onChange={handleProductPrice}
              />
            </div>
            {productPriceError && (
              <p lassName="error py-2" style={{ color: "red" }}>
                {productPriceError}
              </p>
            )}
          </div>
          {/* End of Product Price */}
          {/* Buttons */}
          <button
            type="button"
            id="btn"
            onClick={handleSubmit}
            className="btn w-100 btn-primary"
          >
            Submit
          </button>
          {/* End of Buttons */}
        </div>
      </form>
      {/* End of Form New */}

      <Table product={product} deleteProduct={deleteProduct} />
      {/* <ProductDetails user={product} /> */}
    </main>
  );
}

export default Main;
