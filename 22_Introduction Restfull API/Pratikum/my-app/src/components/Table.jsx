import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "../redux/productSlice";


function Table() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.list.products);

  return (
    <div>
      <div className="tabel-section mt-5">
        <div className="px-5">
          <h1 className="display-5 fw-bold text-center">List Product</h1>
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
              {products?.map((data, index) => (
                <tr key={data.id}>
                  <td>{index + 1}</td>
                  <td>{data.name}</td>
                  <td>{data.category}</td>
                  <td>
                    {
                      <img
                        className="border p-1"
                        src={data.image}
                        alt={data.image}
                        width={150}
                        height={150}
                      />
                    }
                  </td>
                  <td>{data.freshness}</td>
                  <td className="w-25">{data.additional}</td>
                  <td>${data.price}</td>
                  <td>
                    <Link
                      className="btn btn-success m-1"
                      to={`/product/${data.id}`}
                    >
                      Details
                    </Link>

                    <Link
                      to={`/edit-product/${data.id}`}
                      className="btn btn-primary m-1"
                    >
                      Edit
                    </Link>

                    <button
                      onClick={() => dispatch(deleteProduct(data.id))}
                      className="btn btn-outline-primary m-1"
                    >
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

export default Table;
