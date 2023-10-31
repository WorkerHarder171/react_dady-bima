document.addEventListener("DOMContentLoaded", function () {
  const formProduct = document.getElementById("FormProduct");
  const tbody = document.querySelector("#ListProduct tbody");
  const deleteButton = document.getElementById("deleteButton");
  const searchButton = document.getElementById("searchButton");;

  // Array
  let listOfProducts = [];

  // FormProduct script
  // formProduct.addEventListener("input", (event) => {
  //   const ProductName = document.getElementById("productName").value;

  // });

  formProduct.addEventListener("submit", function (event) {
    event.preventDefault();
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

    // Untuk memberikan peringatann jika field tidak boleh kosong
    const Symbols = /[@#{}]/;
    if (Symbols.test(ProductName)) {
      alert("Name must not contain symbols.");
      event.preventDefault();
      return;
    }
    if (ProductName === "" || ProductPrice === "") {
      alert("Please enter a valid Product name and Product Price.");
      event.preventDefault();
      return;
    }
    else{
      ListProduct();
    }
    // Untuk membetikan sebuah peringatan bahwa tidak boleh  ada inputan berupa simbol yang ada
  });
  // ListProduct Table script
  function ListProduct() {
    console.log("berhasil di submit");
    const productName = document.getElementById("productName").value;
    const productCategory = document.getElementById("floatingSelectGrid").value;
    const imageOfProduct = document.getElementById("inputGroupFile02").value;
    let productFreshnessRadio = "document.getElementsByName(flexRadioDefault);";
    let freshness = "";
    for (const radio of productFreshnessRadio) {
      if (radio.checked) {
        freshness = radio.value;
      }
    }
    const additionalDescription = document.getElementById("add-desc").value;
    const productPrice = document.getElementById("productPrice").value;

    console.log(
      productName,
      productCategory,
      imageOfProduct,
      productFreshnessRadio,
      additionalDescription,
      productPrice
    );

    const product = {
      name: productName,
      category: productCategory,
      image: imageOfProduct,
      freshness: productFreshnessRadio,
      additional: additionalDescription,
      price: productPrice,
    };

    listOfProducts.push(product);
    console.log(product);
    console.log("Data berhasil dikirim: ", listOfProducts);
    showProduct();
    console.log(showProduct());
  }
  // Show Product
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
  // Untuk melakukan delete pada table dimana kita disinni
  // menggunakann pop sehingga akan terhapus mulai dari belakang
  deleteButton.addEventListener("click", function () {
    if (listOfProducts.length > 0) {
      listOfProducts.pop();
      showProduct();
    }
  });

  searchButton.addEventListener("click", function () {
    const foundProducts = listOfProducts.filter((product) =>
      product.name.toLowerCase()
    );

    if (foundProducts.length > 0) {
      alert("Found Products:\n" + foundProducts.map((p) => p.name).join("\n"));
    } else {
      alert("No matching products found.");
    }
  });
});
