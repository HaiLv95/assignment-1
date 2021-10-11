import React from 'react';
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
    return (
      <div>
        {/* Header */}
        <nav className="navbar navbar-expand-lg navbar-light shadow">
          <div className="container d-flex justify-content-between align-items-center">
            <NavLink
              className="navbar-brand text-success logo h1 align-self-center"
              to="/">
              Mr.Double
            </NavLink>
            <button
              className="navbar-toggler border-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#templatemo_main_nav"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between"
              id="templatemo_main_nav">
              <div className="flex-fill">
                <ul className="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/">
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/shop">
                      Shop
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/about">
                      About
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="navbar align-self-center d-flex">
                <form className="d-flex">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="id"
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-success" type="submit">
                    Search
                  </button>
                </form>
              </div>
              <div
                className="navbar align-self-center d-flex"
                style={{ marginLeft: 30 }}>
                
                <Link to="/signin"  class="btn btn-outline-primary">
                  Sign-In
                </Link>
              </div>
            </div>
          </div>
        </nav>
        {/* Close Header */}
      </div>
    );
}
