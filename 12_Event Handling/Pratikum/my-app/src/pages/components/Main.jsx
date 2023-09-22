import { Component } from "react";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: "",
      productNameError: "", // State untuk pesan error
    };
  }

  //Fungsi untuk menangani perubahan input Product Name
  handleProductNameChange = (event) => {
    const value = event.target.value;
    this.setState({
      productName: value,
      productNameError: "", //menghapus pesan errorjikad ada perubahan
    });

    //Validasi terhadap panjang product name
    if (value.trim() === "") {
      this.setState({
        productNameError: "Please enter a valid Product name.",
      });
    } else if (value.length > 25) {
      this.setState({
        productNameError: "Product Name must no exceed 25 characters.",
      });
    } else if (value.length < 10) {
      this.setState({
        productNameError: "Product Name minimal 10 characters.",
      });
    }
  };

  //Fungsi pengiriman form
  handleSubmit = (event) => {
    event.preventDefault();

    //Validasi jika Product Name kosong saat tombol submit di tekan
    if (this.state.productName.trim() === "") {
      this.setState({
        productNameError: "Please enter a valid Product name.",
      });
      // alert("Please enter a valid Product name.");
      return;
    }
  };
  render() {
    return (
      <main>
        {/* Form New */}
        <form className="mx-auto my-5 w-50" onSubmit={this.handleSubmit}>
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
                value={this.state.productName}
                onChange={this.handleProductNameChange} //event handle onChange
                className="form-control"
                style={{
                  border: this.state.productNameError
                    ? "2px solid red"
                    : "1px solid #ccc", // deepscan-disable-line // deepscan-disable-line INSUFFICIENT_NULL_CHECK
                }}
              />
              {/* Menampilkan pesan error */}
              {this.state.productNameError && (
                <div className="error" style={{ color: "red" }}>
                  {this.state.productNameError}
                </div>
              )}
            </div>
            {/* End of Product Name */}
            {/* Product Category */}
            <div className="product-category mt-3">
              <p className="text-start">Product Category</p>
              <select className="form-select" id="floatingSelectGrid">
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
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Second Hank
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
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
                defaultValue={""}
              />
              {/* End of Additional Description */}
            </div>
            {/* Product Price */}
            <div className="product-price mt-3">
              <p className="text-start">Product Price</p>
              <div className="input-group mb-3">
                <span className="input-group-text">$</span>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Amount (to the nearest dollar)"
                  id="productPrice"
                />
              </div>
            </div>
            {/* End of Product Price */}
            {/* Buttons */}
            <button type="button" id="btn" className="btn w-100 btn-primary">
              Submit
            </button>
            {/* End of Buttons */}
          </div>
        </form>
        {/* End of Form New */}
      </main>
    );
  }
}

export default Main;
