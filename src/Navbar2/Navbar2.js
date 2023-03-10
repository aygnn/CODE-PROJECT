import React from "react";
import "./Navbar2.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { Container } from "react-bootstrap";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export default function Navbar2() {
  return (
    <div className="navbar2">
      <div className="nav-item">
        <Container>
          <nav className="nav-menu mobile-menu">
            <ul>
              <li className="department">
                <a href="#">
                  <GiHamburgerMenu /> All departments{" "}
                  <MdOutlineKeyboardArrowDown />
                </a>
                <ul className="depart-hover">
                  <li className="active">
                    <a href="#">Women’s Clothing</a>
                  </li>
                  <li>
                    <a href="#">Men’s Clothing</a>
                  </li>
                  <li>
                    <a href="#">Underwear</a>
                  </li>
                  <li>
                    <a href="#">Kid's Clothing</a>
                  </li>
                  <li>
                    <a href="#">Brand Fashion</a>
                  </li>
                  <li>
                    <a href="#">Accessories/Shoes</a>
                  </li>
                  <li>
                    <a href="#">Luxury Brands</a>
                  </li>
                  <li>
                    <a href="#">Brand Outdoor Apparel</a>
                  </li>
                </ul>
              </li>
              <li className="active">
              <Link to={'/'}>Home</Link>
              </li>
              <li>
                {/* <a href="./shop.html">Shop</a> */}
                <Link to={'Shop'}>Shop</Link>
              </li>
              <li>
                <a href="#">Collection</a>
                <ul className="dropdown">
                  <li>
                    <a href="#">Men's</a>
                  </li>
                  <li>
                    <a href="#">Women's</a>
                  </li>
                  <li>
                    <a href="#">Kid's</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="./blog.html">Blog</a>
              </li>
              <li>
                <a href="./contact.html">Contact</a>
              </li>
              <li>
                <a href="#">Pages</a>
                <ul className="dropdown">
                  <li>
                    <a href="./blog-details.html">Blog Details</a>
                  </li>
                  <li>
                    <a href="./shopping-cart.html">Shopping Cart</a>
                  </li>
                  <li>
                    <a href="./check-out.html">Checkout</a>
                  </li>
                  <li>
                    <a href="./faq.html">Faq</a>
                  </li>
                  <li>
                    <a href="./register.html">Register</a>
                  </li>
                  <li>
                  <Link to={'login'}>Login</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </Container>
      </div>
    </div>
  );
}
