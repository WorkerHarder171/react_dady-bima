import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header className="shadow-sm p-2">
        {/* navbar */}
        <nav className="navbar navbar-expand-lg bg-body-light">
          <div className="container-fluid">
            <Link to="/LandingPage" className="navbar-brand fw-bold">
              Simple Product
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link
                    to="/LandingPage"
                    className="nav-link active blue-btn text-light btn btn-primary"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/dashboard" className="nav-link text-primary">
                    Create Product
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/dashboard" className="nav-link text-primary">
                    Pricing
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/dashboard" className="nav-link text-primary">
                    FAQs
                  </Link>
                </li>
                <li className="nav-item">
                <Link to="/dashboard" className="nav-link text-primary">
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
