import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Section3.scss";
import { BsHeart } from "react-icons/bs";
import { BsBagDash } from "react-icons/bs";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Section3() {
  const responsive = {
    superLargeDesktop: {
     
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="section3">
      <Container>
        <Row>
          <Col sm={3}>
            <div className="woman">
              <h2>Women’s</h2>
              <a href="#">Discover More</a>
            </div>
          </Col>
          <Col sm={8}>
            <div className="filter-control">
              <ul>
                <li class="active">Clothings</li>
                <li>HandBag</li>
                <li>Shoes</li>
                <li>Accessories</li>
              </ul>
            </div>

            <div className="carusel">
              <Carousel
                autoPlay={true}
                autoPlaySpeed={3000}
                infinite={true}
                responsive={responsive}
              >
                <div>
                  <div className="item">
                    <div className="pic">
                      <img src="https://preview.colorlib.com/theme/fashi/img/products/women-2.jpg.webp" />
                      <div className="icon">
                        <BsHeart />
                      </div>
                      <ul>
                        <li className="active">
                          <a href="#">
                            <BsBagDash />
                          </a>
                        </li>
                        <li className="quick-view">
                          <a href="#">+ Quick View</a>
                        </li>
                      </ul>
                    </div>

                    <div className="text">
                      <div className="catagory-name">Shoes</div>
                      <a href="#">
                        <h5>Guangzhou sweater</h5>
                      </a>
                      <div className="product-price">$13.00</div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="item">
                    <div className="pic">
                      <img src="https://preview.colorlib.com/theme/fashi/img/products/women-2.jpg.webp" />
                      <div className="icon">
                        <BsHeart />
                      </div>
                      <ul>
                        <li className="active">
                          <a href="#">
                            <BsBagDash />
                          </a>
                        </li>
                        <li className="quick-view">
                          <a href="#">+ Quick View</a>
                        </li>
                      </ul>
                    </div>

                    <div className="text">
                      <div className="catagory-name">Shoes</div>
                      <a href="#">
                        <h5>Guangzhou sweater</h5>
                      </a>
                      <div className="product-price">$13.00</div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="item">
                    <div className="pic">
                      <img src="https://preview.colorlib.com/theme/fashi/img/products/women-2.jpg.webp" />
                      <div className="icon">
                        <BsHeart />
                      </div>
                      <ul>
                        <li className="active">
                          <a href="#">
                            <BsBagDash />
                          </a>
                        </li>
                        <li className="quick-view">
                          <a href="#">+ Quick View</a>
                        </li>
                      </ul>
                    </div>

                    <div className="text">
                      <div className="catagory-name">Shoes</div>
                      <a href="#">
                        <h5>Guangzhou sweater</h5>
                      </a>
                      <div className="product-price">$13.00</div>
                    </div>
                  </div>
                </div>
                <div>
                  {" "}
                  <div className="item">
                    <div className="pic">
                      <img src="https://preview.colorlib.com/theme/fashi/img/products/women-2.jpg.webp" />
                      <div className="icon">
                        <BsHeart />
                      </div>
                      <ul>
                        <li className="active">
                          <a href="#">
                            <BsBagDash />
                          </a>
                        </li>
                        <li className="quick-view">
                          <a href="#">+ Quick View</a>
                        </li>
                      </ul>
                    </div>

                    <div className="text">
                      <div className="catagory-name">Shoes</div>
                      <a href="#">
                        <h5>Guangzhou sweater</h5>
                      </a>
                      <div className="product-price">$13.00</div>
                    </div>
                  </div>
                </div>
              </Carousel>

              {/* 
              <div className="items">
               
                
              </div> */}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
