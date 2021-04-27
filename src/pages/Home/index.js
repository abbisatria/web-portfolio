import React from 'react';
import { Container, Nav, Navbar, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Home.scss';

import profile from '../../assets/images/photo.png';
import portfolio1 from '../../assets/images/portfolio-1.png';

export default function Home() {
  return (
    <Container>
      <Navbar expand="lg">
        <Link to="/" className="navbar-brand branding">Abbi Satria</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link className="mr-3 nav-link" to="/">Project</Link>
            <Link className="mr-3 nav-link" to="/">About</Link>
            <Link className="py-0 nav-link" to="/">
              <Button>Contact</Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Row className="py-5">
        <Col lg={6} md={12} sm={12}>
          <img src={profile} alt="profile" className="profile" />
        </Col>
        <Col lg={6} md={12} sm={12} className="d-flex flex-column justify-content-center">
          <p className="title">I’m Abbi Satria. <br/> A Fullstack Developer</p>
          <p className="sub-title">based in Indonesia.</p>
          <p className="desc">I’m probably the most passionate developer you will ever get to work with. If you have a great project that needs some amazing skills, I’m your guy.</p>
        </Col>
      </Row>
      <p className="text-section">MY PROJECTS</p>
      <Row className="mb-5">
        {[...Array(4)].map((index) => {
          return (
            <Col lg={6} md={12} sm={12} key={String(index)} className="mb-4">
              <div>
                <img src={portfolio1} alt="portfolio" className="portfolio" />
                <div className="background-portfolio">
                  <p className="title-portfolio">Tickitz Web</p>
                  <p className="desc-portfolio">Tickitz is an online movie ticket booking application. This application is created using ReactJS as the front-end and ExpressJS as the back-end and uses the Redux library as State Management.</p>
                </div>
              </div>
            </Col>
          )
        })}
        <Col lg={12} md={12} sm={12} className="d-flex justify-content-center align-items-center">
          <div className="btn-view-all">
            VIEW ALL PROJECT
          </div>
        </Col>
      </Row>
    </Container>
  )
}

