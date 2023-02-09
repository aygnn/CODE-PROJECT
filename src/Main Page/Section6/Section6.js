import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Section6.scss";
import { FaRegCalendarAlt ,FaRegComment} from 'react-icons/fa';
import { BsCreditCard2Back } from "react-icons/bs";


export default function Section6() {
  return (
    <div className="section6">
      <Container>
        <div className="section-title">
          <h2>Our Popular Customers</h2>
        </div>
        <div className="blogs">
          <Row>
            <Col sm={4}>
              <div className="blog">
                <img
                  src="https://preview.colorlib.com/theme/fashi/img/latest-1.jpg.webp"
                  alt=""
                />
                <div className="latest-text">
                  <div className="tag-list">
                    <div className="tag-item">
                      <div className="icon">
                        <FaRegCalendarAlt />
                      </div>
                      May 4,2019
                    </div>
                    <div className="tag-item">
                      <div className="icon">
                        <FaRegComment />
                      </div>
                      5
                    </div>
                  </div>
                  <a href="#">
                    <h4>The Best Street Style From London Fashion Week</h4>
                  </a>
                  <p>
                    Sed quia non numquam modi tempora indunt ut labore et dolore
                    magnam aliquam quaerat
                  </p>
                </div>
              </div>
            </Col>

            <Col sm={4}>
              <div className="blog">
                <img
                  src="https://preview.colorlib.com/theme/fashi/img/latest-2.jpg.webp"
                  alt=""
                />
                <div className="latest-text">
                  <div className="tag-list">
                    <div className="tag-item">
                      <div className="icon">
                        <FaRegCalendarAlt />
                      </div>
                      May 4,2019
                    </div>
                    <div className="tag-item">
                      <div className="icon">
                        <FaRegComment />
                      </div>
                      5
                    </div>
                  </div>
                  <a href="#">
                    <h4>Vogue's Ultimate Guide To Autumn/Winter 2019 Shoes</h4>
                  </a>
                  <p>
                    Sed quia non numquam modi tempora indunt ut labore et dolore
                    magnam aliquam quaerat
                  </p>
                </div>
              </div>
            </Col>

            <Col sm={4}>
              <div className="blog">
                <img
                  src="https://preview.colorlib.com/theme/fashi/img/latest-3.jpg.webp"
                  alt=""
                />
                <div className="latest-text">
                  <div className="tag-list">
                    <div className="tag-item">
                      <div className="icon">
                        <FaRegCalendarAlt />
                      </div>
                      May 4,2019
                    </div>
                    <div className="tag-item">
                      <div className="icon">
                        <FaRegComment />
                      </div>
                      5
                    </div>
                  </div>
                  <a href="#">
                    <h4>How To Brighten Your Wardrobe With A Dash Of Lime</h4>
                  </a>
                  <p>
                    Sed quia non numquam modi tempora indunt ut labore et dolore
                    magnam aliquam quaerat
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>

        <div className="deliveries">
          <Row>
            <Col sm={4}>
                <div className="delivery">

              <div className="icon-delivery">
             <img src="https://preview.colorlib.com/theme/fashi/img/icon-1.png.webp"/>
              </div>
              <div className="text-delivery">
                <h6>Free Shipping</h6>
                <p>For all order over 99$</p>
              </div>
                </div>
            </Col>

            <Col sm={4}>
            <div className="delivery">

<div className="icon-delivery">
<img src="https://preview.colorlib.com/theme/fashi/img/icon-2.png.webp"/>
</div>
<div className="text-delivery">
  <h6>DELIVERY ON TIME</h6>
  <p>If good have prolems

</p>
</div>
  </div>
            </Col>

            <Col sm={4}>
            <div className="delivery">

<div className="icon-delivery">
    <BsCreditCard2Back/>
{/* <img src="https://preview.colorlib.com/theme/fashi/img/icon-1.png.webp"/> */}
</div>
<div className="text-delivery">
  <h6>SECURE PAYMENT</h6>
  <p>100% secure payment</p>
</div>
  </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
