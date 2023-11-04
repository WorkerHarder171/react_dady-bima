import React from "react";
import "./stylesheets.css";
import hero from "../assets/hero-img.png.png";
import Header from "../components/Header";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <>
      <Header />


      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            {/* jumbotron */}
            <div className="jumbotron">
              <div className="d-flex align-items-center justify-content-evenly">
                {/* text-group */}
                <div className="text-group">
                  <h1 className="text-light fw-bold title-text w-75">
                    Better Solutions For Your Business
                  </h1>
                  <p className="lead w-80">
                    We are team of talented designers making websites with
                    Bootstrap
                  </p>
                  {/* button wrapper */}
                  <div className="button-wrapper">
                    <button type="button" className="btn btn-primary me-3">
                      Get Started
                    </button>
                    <a href="https://www.youtube.com/" className="text-decoration-none text-light">
                      Watch Video
                    </a>
                  </div>
                  {/* end button wrapper */}
                </div>
                {/* end text-group */}
                <img src={hero} alt="hero-jpg" />
              </div>
            </div>
            {/* end jumbotron */}
          </div>
          <div className="carousel-item">
            {/* jumbotron */}
            <div className="jumbotron">
              <div className="d-flex align-items-center justify-content-evenly">
                {/* text-group */}
                <div className="text-group">
                  <h1 className="text-light fw-bold title-text w-75">
                    Better Solutions For Your Business
                  </h1>
                  <p className="lead w-80">
                    We are team of talented designers making websites with
                    Bootstrap
                  </p>
                  {/* button wrapper */}
                  <div className="button-wrapper">
                    <button type="button" className="btn btn-primary me-3">
                      Get Started
                    </button>
                    <a href="youtube.com" className="text-decoration-none text-light">
                      Watch Video
                    </a>
                  </div>
                  {/* end button wrapper */}
                </div>
                {/* end text-group */}
                <img src={hero} alt="hero-jpg" />
              </div>
            </div>
            {/* end jumbotron */}
          </div>
        </div>
      </div>

      {/* wrapper */}
      <div className="wrapper p-5">
        {/* text-group */}
        <div className="text-group">
          <h3 className="text-center fs-2 fw-bold">Join Our Newsletter</h3>
          <p className="lead text-center">
            Tamen quem nulla quae legam multos aute sint culpa legam noster
            magna
          </p>
        </div>
        {/* end-text-group */}
        {/* wrapper search */}
        <div className="wrapper-search w-50 mx-auto bg-white rounded-pill">
          <div className="d-flex justify-content-between">
            <input
              type="search"
              name="search"
              id="search"
              className="w-80 rounded-pill"
            />
            <input
              type="submit"
              className="btn rounded-pill p-3 text-light"
              defaultValue="Subscribe"
              id="submit"
            />
          </div>
        </div>
        {/* end wrapper-search */}
      </div>
      {/* wrapper */}

      <Footer />
    </>
  );
};

export default LandingPage;
