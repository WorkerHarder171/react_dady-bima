document.addEventListener("DOMContentLoaded", function () {
  const formProduct = document.getElementById("FormProduct");
  const listProduct = document.getElementById("Listroduct");
  const tbody = document.querySelector("#ListProduct tbody");
  const deleteButton = document.getElementById("deleteButton");
  const searchButton = document.getElementById("searchButton");
  const searchInput = document.getElementById("tableSearch");

  let listOfProducts = [];

  // FormProduct script
  formProduct.addEventListener("submit", (event) => {
    const ProductName = document.getElementById("productName").value;
    const ProductPrice = document.getElementById("productPrice").value;

    if (ProductName.length > 25) {
      alert("Last Name must not exceed 25 characters.");
      event.preventDefault();
      return;
    }
    // untuk membatasi minimal length pada input form sebanyak 10 huruf
    if (ProductName.length < 10) {
      alert("Product Name must exceed 10 characters.");
      event.preventDefault();
      return;
    }

    if (ProductName === " " || ProductPrice === " ") {
      alert("Please enter a valid Product name and Product Price.");
      event.preventDefault();
      return;
    }
    // Untuk membetikan sebuah peringatan bahwa tidak boleh  ada inputan berupa simbol yang ada
    const Symbols = /[@#{}]/;
    if (Symbols.test(ProductName)) {
      alert("Name must not contain symbols.");
      event.preventDefault();
      return;
    }

    // ListProduct Table script
    listProduct.addEventListener("submit", function (event) {
      event.preventDefault();
      const productName = document.getElementById("productName").value;
      const productCategory =
        document.getElementById("floatingSelectGrid").value;
      const imageOfProduct = document.getElementById("inputGroupFile02").value;
      const productFreshnessRadio = document.querySelector(
        "input[name='flexRadioDefault']:checked"
      );
      const additionalDescription = document.getElementById("add-desc").value;
      const productPrice = document.getElementById("productPrice").value;

      if (
        productName &&
        productCategory &&
        additionalDescription &&
        productPrice
      ) {
        const productFreshness = productFreshnessRadio
          ? productFreshnessRadio.value
          : "";

        const product = {
          name: productName,
          category: productCategory,
          image: imageOfProduct,
          freshness: productFreshness,
          additional: additionalDescription,
          price: productPrice,
        };

        listOfProducts.push(product);
        showProduct();
      }
    });

    function showProduct() {
      tbody.innerHTML = "";
      listOfProducts.forEach((product, index) => {
        const row = tbody.insertRow();
        const cellIndex = row.insertCell(0);
        const cellName = row.insertCell(1);
        const cellCategory = row.insertCell(2);
        const cellImage = row.insertCell(3);
        const cellFreshness = row.insertCell(4);
        const cellDescription = row.insertCell(5);
        const cellPrice = row.insertCell(6);

        cellIndex.textContent = index + 1;
        cellName.textContent = product.name;
        cellCategory.textContent = product.category;
        cellImage.textContent = product.image;
        cellFreshness.textContent = product.freshness;
        cellDescription.textContent = product.additional;
        cellPrice.textContent = product.price;
      });
    }
    deleteButton.addEventListener("click", function () {
      if (listOfProducts.length > 0) {
        listOfProducts.pop();
        displayProducts();
      }
    });

    searchButton.addEventListener("click", function () {
      const searchTerm = searchInput.value.toLowerCase();
      const foundProducts = listOfProducts.filter((product) =>
        product.name.toLowerCase().includes(searchTerm)
      );

      if (foundProducts.length > 0) {
        alert(
          "Found Products:\n" + foundProducts.map((p) => p.name).join("\n")
        );
      } else {
        alert("No matching products found.");
      }
    });
  });
});