import React, { Component } from 'react';

class CreateProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: '',
      productNameError: '', // State untuk pesan error
      isLanguageEnglish: true, // State untuk bahasa, defaultnya adalah Inggris
    };
  }

  // Fungsi untuk menangani perubahan input Product Name
  handleProductNameChange = (event) => {
    const value = event.target.value;
    this.setState({
      productName: value,
      productNameError: '', // Menghapus pesan error jika ada perubahan
    });

    // Validasi panjang Product Name
    if (value.length > 25) {
      this.setState({
        productNameError: 'Product Name must not exceed 25 characters.',
      });
    } else if (value.length === 0) {
      this.setState({
        productNameError: 'Please enter a valid product name.',
      });
    } else if (value.length > 10) {
      this.setState({
        productNameError: 'Product Name must not exceed 10 characters.',
      });
    }
  };

  // Fungsi untuk mengganti bahasa
  toggleLanguage = () => {
    this.setState((prevState) => ({
      isLanguageEnglish: !prevState.isLanguageEnglish,
    }));
  };

  render() {
    const { productNameError, isLanguageEnglish } = this.state;
    const language = isLanguageEnglish ? 'en' : 'id';
    const article = {
      title: {
        id: 'Buat Akun',
        en: 'Create Account',
      },
      description: {
        id:
          'Di bawah ini adalah contoh formulir yang dibuat seluruhnya dengan kontrol formulir Bootstrap. Setiap grup formulir yang diperlukan memiliki status validasi yang dapat dipicu dengan mencoba mengirimkan formulir tanpa menyelesaikannya.',
        en:
          'Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.',
      },
    };

    return (
      <div>
        <h1>{article.title[language]}</h1>
        <p>{article.description[language]}</p>
        <form>
          <div>
            <label htmlFor="productName">Product Name:</label>
            <input
              type="text"
              id="productName"
              name="productName"
              value={this.state.productName}
              onChange={this.handleProductNameChange} // Event handling onChange
              style={{
                border: productNameError ? '2px solid red' : '1px solid #ccc',
              }}
            />
            {/* Menampilkan pesan error jika ada */}
            {productNameError && (
              <div className="error">{productNameError}</div>
            )}
          </div>
          <div>
            <button type="submit">Create Product</button>
          </div>
        </form>
        <button onClick={this.toggleLanguage}>
          Toggle Language ({isLanguageEnglish ? 'English' : 'Bahasa'})
        </button>
      </div>
    );
  }
}

export default CreateProduct;
