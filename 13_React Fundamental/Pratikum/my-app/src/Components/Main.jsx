import React from "react";
import logo from "../assets/bootstrap-logo.svg.png"
import "../script/formProduct.js"
const Main = () => {
  return (
    <div>
      <main>
        <div className="text-group p-5">
          <img
            src={logo}
            alt="Logo"
            width={72}
            height={57}
            className="mx-auto d-block"
          />
          <h3 className="text-center mt-4">Create Product</h3>
          <p className="lead text-center w-50 mx-auto">
            Below is an example form built entirely with Bootstrap’s form
            controls. Each required form group has a validation state that can
            be triggered by attempting to submit the form without completing it.
          </p>
          {/* Form New */}
          <form className="mx-auto my-5 w-50">
            <div className="form-header">
              <h1 className="text-center">Detail Product</h1>
            </div>
            <div className="form-body">
              {/* Product Name */}
              <div className="product-name mt-3">
                <p className="text-start">Product Name</p>
                <input
                  type="text"
                  id="productName"
                  minLength={10}
                  maxLength={30}
                  className="form-control"
                />
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
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
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
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
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
        </div>
      </main>
    </div>
  );
};

export default Main;
