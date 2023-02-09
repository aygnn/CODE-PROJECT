import React from 'react'
import './Navbar1.scss';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BsSearch } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsBag } from 'react-icons/bs';




export default function Navbar1() {
  return (
    <div className='navbar1'>
      <Container>
        <Row>
          <Col sm={2}>
            <div className="logo">
              <a href="App.js">
                <img src="https://preview.colorlib.com/theme/fashi/img/logo.png.webp" />
              </a>
            </div>
          </Col>
          <Col sm={7}>
            <div className="advanced-search">
              <div className="group">
                <input type="text" placeholder="What do you need?" />
                <button type="button">
                    <div>

                 <BsSearch/>
                    </div>
                </button>
              </div>
            </div>
          </Col>
          <Col sm={3}>
            <div className='icons'>
                <ul>
                    <li><AiOutlineHeart/><sup className='fav'><span>1</span></sup></li>
                    <li><BsBag/><sup className='basket'><span>1</span></sup></li>
                </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
