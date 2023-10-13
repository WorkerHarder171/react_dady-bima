import Header from "../components/Header";
import Main from "../components/CraeteProduct";
import logo from "../assets/bootstrap-logo.svg.png";
import { Component } from "react";

const article = {
  title: {
    id: "Buat Akun",
    en: "Create Account",
  },
  description: {
    id: "Di bawah ini adalah contoh formulir yang dibuat seluruhnya dengan kontrol formulir Bootstrap. Setiap grup formulir yang diperlukan memiliki status validasi yang dapat dipicu dengan mencoba mengirimkan formulir tanpa menyelesaikannya.",
    en: "Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.",
  },
};

class CreateProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: "en",
      randomNumber: null,
    };
  }
  // Fungsi untuk mengubah bahasa
  toggleLanguage = () => {
    const newLanguage = this.state.language === "en" ? "id" : "en";
    this.setState({
      language: newLanguage,
    });
  };

  // Fungsi untuk menampilkan random number di console
  generateRandomNumber = () => {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    console.log(`Random Number: ${randomNum}`);
    this.setState({
      randomNumber: randomNum,
    });
  };

  render() {
    const { language, randomNumber } = this.state;
    const title = article.title[language];
    const description = article.description[language];

    return (
      <>
        <Header />
        <div className="text-group p-5">
          <img
            src={logo}
            alt="Logo"
            width={72}
            height={57}
            className="mx-auto d-block"
          />
          <h3 className="text-center mt-4">{title}</h3>
          <p className="lead text-center w-50 mx-auto">{description}</p>
          <p>{randomNumber && `Random Number: ${randomNumber}`}</p>
          <div className="button-group d-flex gap-5 justify-content-center p-3">
            <button
              className="btn btn-primary"
              onClick={this.generateRandomNumber}
            >
              Generate Random Number
            </button>

            <button className="btn btn-primary" onClick={this.toggleLanguage}>
              Change Language
            </button>
          </div>
        </div>
        <Main />
      </>
    );
  }
}

export default CreateProduct;