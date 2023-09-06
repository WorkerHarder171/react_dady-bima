const FormProduct = document.getElementById("FormProduct");

FormProduct.addEventListener("submit", (event) => {
  const ProductName = document.getElementById("pName").value;
  const ProductPrice = document.getElementById("pPrice").value;

  if (ProductName.length > 25) {
    alert("Last Name must not exceed 25 characters.");
    event.preventDefault();
    return;
  }
  if (ProductName.length < 10) {
    alert("Product Name must exceed 10 characters.");
    event.preventDefault();
    return;
  }

  if (ProductName.trim() === "" || ProductPrice.trim() === "") {
    alert("Please enter a valid Product name and Product Price.");
    event.preventDefault();
    return;
  }

  const Symbols = /[@#{}]/;
  if (Symbols.test(ProductName)) {
    alert("Name must not contain symbols.");
    event.preventDefault();
    return;
  }
});
