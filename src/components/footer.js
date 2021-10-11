import {Link} from 'react-router-dom';
function Footer() {
    return (
      <div>
        {/* Start Footer */}
        <footer className="bg-dark" id="tempaltemo_footer">
          <div className="container">
            <div className="row">
              <div className="col-md-4 pt-5">
                <h2 className="h2 text-success border-bottom pb-3 border-light logo">
                  Mr.Double Shop
                </h2>
                <ul className="list-unstyled text-light footer-link-list">
                  <li>
                    <i className="fas fa-map-marker-alt fa-fw" />
                    Cao đẳng FPT Polytechnic Hà Nội
                  </li>
                  <li>
                    <i className="fa fa-phone fa-fw" />
                    <a className="text-decoration-none" href="tel:0333103855">
                      0333103855
                    </a>
                  </li>
                  <li>
                    <i className="fa fa-envelope fa-fw" />
                    <a
                      className="text-decoration-none"
                      href="mailto:hailvph13040@fpt.edu.vn">
                      hailvph13040@fpt.edu.vn
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-md-4 pt-5">
                <h2 className="h2 text-light border-bottom pb-3 border-light">
                  Further Info
                </h2>
                <ul className="list-unstyled text-light footer-link-list">
                  <li>
                    <Link className="text-decoration-none" to="/">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link className="text-decoration-none" to="/about">
                      About Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row text-light mb-4">
              <div className="col-12 mb-3">
                <div className="w-100 my-3 border-top border-light" />
              </div>
            </div>
          </div>
          <div className="w-100 bg-black py-3">
            <div className="container">
              <div className="row pt-2">
                <div className="col-12">
                  <p className="text-left text-light">
                    Copyright © 2021 Company Name | Designed by{" "}
                    <a
                      rel="sponsored"
                      href="https://www.facebook.com/mongemhanhchuc"
                      target="_blank">
                      Mr.Hai
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
}

export default Footer;