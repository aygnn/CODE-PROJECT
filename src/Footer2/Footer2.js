import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import './Footer2.scss';
import { GrFacebookOption } from "react-icons/gr";
import { AiOutlineInstagram,AiOutlineTwitter } from "react-icons/ai";
import { IoLogoPinterest } from "react-icons/io";





export default function Footer2() {
  return (
    <div className="footer2">
      <Container>
        <Row>
          <Col sm={3}>
            <div className="ul1">
              <div className="logo">
                <img src="https://preview.colorlib.com/theme/fashi/img/footer-logo.png.webp" />
              </div>
              <ul>
                <li>Address: 60-49 Road 11378 New York</li>
                <li>Phone: +65 11.188.888</li>
                <li>Email: hello.colorlib@gmail.com</li>
              </ul>

              <div className="social">
                <a href="#">
                  <GrFacebookOption />
                </a>
                <a href="#">
                  <AiOutlineInstagram />
                </a>
                <a href="#">
                  <AiOutlineTwitter />
                </a>
                <a href="#">
                  <IoLogoPinterest />
                </a>
              </div>
            </div>
          </Col>
          <Col sm={2}>
            <div className="ul2">
              <h5>Information</h5>
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Checkout</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">Serivius</a>
                </li>
              </ul>
            </div>
          </Col>
          <Col sm={2}>
            <div className="ul2">
              <h5>My Account</h5>
              <ul>
                <li>
                  <a href="#">My Account</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">Shopping Cart</a>
                </li>
                <li>
                  <a href="#">Shop</a>
                </li>
              </ul>
            </div>
          </Col>
          <Col sm={4}>
            <div className="ul2">
              <h5>Join Our Newsletter Now</h5>
              <p>
                Get E-mail updates about our latest shop and special offers.
              </p>
              <form>
                <input type="text" placeholder="Enter Your Mail" />
                <button>Subscribe</button>
              </form>
            </div>
          </Col>
        </Row>
      </Container>

   
    </div>
  );
}
