import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

const Navbar = () => {
  const state = useSelector(state => state.handleCart);

  return (
    <motion.nav
      className="navbar navbar-expand-lg navbar-dark py-3 sticky-top shadow"
      style={{
        background: "linear-gradient(90deg, #1f4037, #99f2c8)"
      }}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <NavLink className="navbar-brand fw-bold fs-3 text-white px-2" to="/">
          <span style={{ fontFamily: "cursive" }}>React Ecommerce</span>
        </NavLink>

        <button
          className="navbar-toggler mx-2"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto my-2 text-center gap-3">
            {["Home", "Products", "About", "Contact"].map((item, idx) => (
              <li className="nav-item" key={idx}>
                <NavLink
                  className="nav-link text-white position-relative"
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  style={{ transition: "color 0.3s ease" }}
                >
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="buttons text-center d-flex gap-2 justify-content-center flex-wrap">
            <NavLink to="/login" className="btn btn-outline-light">
              <i className="fa fa-sign-in-alt me-1"></i> Login
            </NavLink>
            <NavLink to="/register" className="btn btn-outline-light">
              <i className="fa fa-user-plus me-1"></i> Register
            </NavLink>
            <NavLink to="/cart" className="btn btn-light text-dark">
              <i className="fa fa-cart-shopping me-1"></i> Cart ({state.length})
            </NavLink>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
