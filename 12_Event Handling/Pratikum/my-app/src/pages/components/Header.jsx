import React from 'react'

const Header = () => {
  return (
    <div>
  <header className="shadow-sm p-2">
    {/* navbar */}
    <nav className="navbar navbar-expand-lg bg-body-light">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold" href="#">
          Simple Header
        </a>
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a
                className="nav-link active blue-btn text-light btn btn-primary"
                aria-current="page"
                href="#"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-primary" href="#">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-primary" href="#">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-primary" href="#">
                FAQs
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-primary" href="#">
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
    </div>
  )
}

export default Header