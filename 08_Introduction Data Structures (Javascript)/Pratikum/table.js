document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("listProduct");
    const tbody = document.querySelector("#ListProduct tbody");
    const deleteButton = document.getElementById("deleteButton");
    const searchButton = document.getElementById("searchButton");
    const searchInput = document.getElementById("tableSearch");

    let productList = [];

    form.addEventListener("click", function (event) {
      event.preventDefault();
      const productName =
        document.getElementById("productName").value;
      const productCategory =
        document.getElementById("floatingSelectGrid").value;
      const imageOfProduct =
        document.getElementById("inputGroupFile02").value;
      const productFreshnessRadio = document.querySelector(
        "input[name='flexRadioDefault']:checked"
      );
      const additionalDescription =
        document.getElementById("add-desc").value;
      const productPrice =
        document.getElementById("productPrice").value;

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
          image: imageOfProduct || "Default Image",
          freshness: productFreshness,
          additional: additionalDescription,
          price: `$${productPrice}`,
        };

        productList.push(product);
        displayProducts();
      }
    });

    function displayProducts() {
      tbody.innerHTML = "";
      productList.forEach((product, index) => {
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
      if (productList.length > 0) {
        productList.pop();
        displayProducts();
      }
    });

    searchButton.addEventListener("click", function () {
      const searchTerm = searchInput.value.toLowerCase();
      const foundProducts = productList.filter((product) =>
        product.name.toLowerCase().includes(searchTerm)
      );

      if (foundProducts.length > 0) {
        alert(
          "Found Products:\n" +
            foundProducts.map((p) => p.name).join("\n")
        );
      } else {
        alert("No matching products found.");
      }
    });
  });