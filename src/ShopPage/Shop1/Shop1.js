import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Shop1.scss";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Shop1() {
  return (
    <div className="shopping">
      <div className="top">
        <Container>
          <div class="text">
            <Link to={"/"}>
              <FaHome /> Home
            </Link>
            <span>Shop</span>
          </div>
        </Container>
      </div>

      <div className="products-section">
        <Container>
          <Row>
            <Col sm={3}>
              <div className="filter">
                <h4>Categories</h4>
                <ul >
                  <li>
                    <a href="#">Men</a>
                  </li>
                  <li>
                    <a href="#">Women</a>
                  </li>
                  <li>
                    <a href="#">Kids</a>
                  </li>
                </ul>
              </div>

              <div class="filter">
                <h4>Brand</h4>
                <div class="brand-check">
                  <div class="bc-item">
                    <label for="bc-alvin">
                      Calvin Klein
                      <input type="checkbox" id="bc-calvin" />
                    </label>
                  </div>
                  <div class="bc-item">
                    <label for="bc-diesel">
                      Diesel
                      <input type="checkbox" id="bc-diesel" />
                    </label>
                  </div>
                  <div class="bc-item">
                    <label for="bc-polo">
                      Polo
                      <input type="checkbox" id="bc-polo" />
                    </label>
                  </div>
                  <div class="bc-item">
                    <label for="bc-tommy">
                      Tommy Hilfiger
                      <input type="checkbox" id="bc-tommy" />
                    </label>
                  </div>
                </div>
              </div>

              <div class="filter">
                <h4>Color</h4>
                <div class="color-choose">
                  <div class="cs-item">
                    <input type="radio" id="cs-black" />
                    <label class="cs-black" for="cs-black">
                      Black
                    </label>
                  </div>
                  <div class="cs-item">
                    <input type="radio" id="cs-violet" />
                    <label class="cs-violet" for="cs-violet">
                      Violet
                    </label>
                  </div>
                  <div class="cs-item">
                    <input type="radio" id="cs-blue" />
                    <label class="cs-blue" for="cs-blue">
                      Blue
                    </label>
                  </div>
                  <div class="cs-item">
                    <input type="radio" id="cs-yellow" />
                    <label class="cs-yellow" for="cs-yellow">
                      Yellow
                    </label>
                  </div>
                  <div class="cs-item">
                    <input type="radio" id="cs-red" />
                    <label class="cs-red" for="cs-red">
                      Red
                    </label>
                  </div>
                  <div class="cs-item">
                    <input type="radio" id="cs-green" />
                    <label class="cs-green" for="cs-green">
                      Green
                    </label>
                  </div>
                </div>
              </div>

              <div class="filter">
                <h4 class="fw-title">Size</h4>
                <div class="fw-size-choose">
                  <div class="sc-item">
                    <input type="checkbox" id="s-size" />
                    <label for="s-size">s</label>
                  </div>
                  <div class="sc-item">
                    <input type="checkbox" id="m-size" />
                    <label for="m-size">m</label>
                  </div>
                  <div class="sc-item">
                    <input type="checkbox" id="l-size" />
                    <label for="l-size">l</label>
                  </div>
                  <div class="sc-item">
                    <input type="checkbox" id="xs-size" />
                    <label for="xs-size">xs</label>
                  </div>
                </div>
              </div>
            </Col>

            <Col sm={9}></Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
