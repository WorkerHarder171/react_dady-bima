import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      {/* footer */}
      <footer>
        <div className="row">
          <div className="col-lg-3">
            <div className="arsha">
              <h3 className="fw-bold">ARSHA</h3>
              <p className="alamat w-45 fs-5 lead">
                A108 Adam Street New York, NY 535022 United States
              </p>
              <p className="lead fs-5">
                <b className="fw-bold text-dark">Phone:</b> +1 5589 55488 55
              </p>
              <p className="lead fs-5">
                <b className="fw-bold text-dark">Email:</b> info@example.com
              </p>
            </div>
          </div>
          {/* links */}
          <div className="col-lg-3">
            <ul className="links">
              <li className="nav-item">
                <Link
                  to="/landingPage"
                  className="nav-link mb-3 text-secondary"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/landingPage"
                  className="nav-link mb-3 text-secondary"
                >
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/landingPage"
                  className="nav-link mb-3 text-secondary"
                  href="#"
                >
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/landingPage"
                  className="nav-link mb-3 text-secondary"
                  href="#"
                >
                  Terms of service
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/landingPage"
                  className="nav-link mb-3 text-secondary"
                  href="#"
                >
                  Privacy policy
                </Link>
              </li>
            </ul>
          </div>
          {/* end links */}
          {/* services */}
          <div className="col-lg-3">
            <ul className="services">
              <li className="nav-item">
                <a
                  className="nav-link mb-3 text-secondary"
                  href="https://roadmap.sh/ux-design"
                >
                  Web Design
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link mb-3 text-secondary"
                  href="https://roadmap.sh/frontend"
                >
                  Web Development
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link mb-3 text-secondary"
                  href="https://roadmap.sh/software-architect"
                >
                  Product Management
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link mb-3 text-secondary"
                  href="https://roadmap.sh/postgresql-dba"
                >
                  Marketing
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link mb-3 text-secondary"
                  href="https://roadmap.sh/qa"
                >
                  Graphic Design
                </a>
              </li>
            </ul>
          </div>
          {/* end services */}
          {/* networks */}
          <div className="col-lg-3">
            <div className="networks">
              <h3 className="" text-secondary="fw-bold">
                Our Social Networks
              </h3>
              <p className="lead fs-5">
                Cras fermentum odio eu feugiat lide par naso tierra videa magna
                derita valies
              </p>
              {/* group-circle */}
              <div className="group-circle">
                <span className="circle" />
                <span className="circle" />
                <span className="circle" />
                <span className="circle" />
              </div>
              {/* end group-circle */}
            </div>
          </div>
          {/* end networks */}
        </div>
        {/* copyright */}
        <div className="copyright w-block p-5 align-items-center d-flex justify-content-between">
          <p className="copyright-text text-light m-0">
            © Copyright <b>Arsha</b>. All Rights Reserved
          </p>
          <p className="lead text-light fs-5 m-0">Designed by BootstrapMade</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
