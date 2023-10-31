import React from "react";
// import "../script/formProduct.js"

const Table = () => {
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
              <tr>
                <th scope="row">1</th>
                <td>Coffee</td>
                <td>Baverages</td>
                <td>image.png</td>
                <td>Brand New</td>
                <td>This is of a cup of Coffee</td>
                <td>$1000</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Onigiri</td>
                <td>Foods</td>
                <td>Images.png</td>
                <td>Second Hank</td>
                <td>This is a Onigiri</td>
                <td>$1500</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Cake</td>
                <td>Foods</td>
                <td>Cake.jpg</td>
                <td>Refurbished</td>
                <td>This is a Cake</td>
                <td>$2000</td>
              </tr>
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
            <button type="button" className="btn btn-primary mx-2" id="deleteButton">
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
};

export default Table;
