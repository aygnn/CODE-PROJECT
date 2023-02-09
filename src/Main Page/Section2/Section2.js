import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import './Section2.scss';


export default function Section2() {
  return (
    <div className="section2">
  
        <Row>
          <Col sm={4}>
            <div className="card1">
              <img src="https://preview.colorlib.com/theme/fashi/img/banner-1.jpg.webp" />
              {/* <div className='square'></div> */}
              <div className='text'><h4>Men's</h4></div>
            </div>
          </Col>
          <Col sm={4}>
            <div className="card1">
              <img src="https://preview.colorlib.com/theme/fashi/img/banner-2.jpg.webp" />
              <div  className='text'> <h4>Women's</h4></div>
              </div>
          </Col>

          <Col sm={4}>
            <div className="card1">
              <img src="https://preview.colorlib.com/theme/fashi/img/banner-3.jpg.webp" />
              <div  className='text'><h4>Kid's</h4></div>
              </div>
          </Col>
        </Row>
   
    </div>
  );
}
