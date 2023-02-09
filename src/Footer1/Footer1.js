import React from 'react'
import { Col, Row } from 'react-bootstrap';
import "./Footer1.scss";

export default function Footer1() {
  return (
    <div className='footer1'>
        <Row>

        <Col sm={2}>
            <img src='https://preview.colorlib.com/theme/fashi/img/logo-carousel/logo-1.png.webp '/>
        </Col >
        <Col  sm={2}>
            <img src='https://preview.colorlib.com/theme/fashi/img/logo-carousel/logo-2.png.webp'/>
        </Col>
        <Col sm={2}>
            <img src='https://preview.colorlib.com/theme/fashi/img/logo-carousel/logo-3.png.webp'/>

        </Col>
        <Col sm={2}>
            <img src='https://preview.colorlib.com/theme/fashi/img/logo-carousel/logo-4.png.webp'/>
        </Col>
        <Col sm={2}>
            <a href='https://www.armani.com/countries/index'>

            <img  src='https://preview.colorlib.com/theme/fashi/img/logo-carousel/logo-5.png.webp' />
            </a>

        </Col>
        </Row>
    </div>
  )
}
