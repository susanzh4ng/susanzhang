import React from 'react'
import { useNavigate } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import "./CTAButton.css";
import { PiArrowUpRight } from "react-icons/pi";


const CTAButton = (props) => {
    const navigate = useNavigate();
    function handleClick() {
        navigate(`/susanzhang/work/${props.url}`);
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }, 0.5);
    }

  return (
    <div className="CTAButton" onClick={handleClick}>
        <Container className="d-flex justify-content-center align-items-center">
        <span className="d-inline-flex align-items-center top-link">
            
            <h5>{props.text}</h5>
            <PiArrowUpRight size="30" className="me-1" />
        </span>
        </Container>
    </div>
  )
}

export default CTAButton