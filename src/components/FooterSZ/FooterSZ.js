import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import logoWhite from '../../images/susanzhang-white.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import { PiLinkedinLogoFill } from "react-icons/pi";
import { PiEnvelopeFill } from "react-icons/pi";
import "./FooterSZ.css";

const FooterSZ = () => {
  const navigate = useNavigate();
  const [bounce, setBounce] = useState(false);

  const handleClick =()=>{
    setBounce(true);
    setTimeout(()=> {
      setBounce(false);
    }, 500);
    navigate("/susanzhang/");
  }

  return (
    <footer className="text-white mt-5 p-4">
        <Container>
        <Row className="align-items-center">
          <Col md="8" className="mb-3">
            <div className="links d-flex flex-column flex-md-row align-items-start align-items-md-center">
                <Link to="https://www.linkedin.com/in/susan-zh4ng/" className="text-white" target="_blank">
                    <span className="d-inline-flex align-items-center external-link">
                    <PiLinkedinLogoFill size="25" className="me-1" />
                    linkedin.com/in/susan-zh4ng
                    </span>
                </Link>
                <Link to="mailto:Susan.Zhang901@gmail.com" className="text-white me-3">
                    <span className="d-inline-flex align-items-center external-link ">
                    <PiEnvelopeFill size="25" className="me-1" />
                    Susan.Zhang901@gmail.com
                    </span>
                </Link>
            </div>
          </Col>
          <Col md="4" className="text-md-end mb-3">
            <img
              src={logoWhite}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Susan Zhang logo"
              id={`${bounce ? 'bounce' : 'bounceoff'}`}
              onClick={handleClick}
            />
          </Col>
        </Row>
      </Container>
      </footer>
  )
}

export default FooterSZ