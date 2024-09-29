import React from 'react'
import Container from 'react-bootstrap/Container';
import "./BackToTop.css";
import { PiArrowBendLeftUp } from "react-icons/pi";


const BackToTop = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

  return (
    <div className="BackToTop">
        <Container className="d-flex justify-content-center align-items-center">
        <span className="d-inline-flex align-items-center top-link" onClick={scrollToTop}>
            <PiArrowBendLeftUp size="25" className="me-1" />
            <h4 className="mb-0">Back to top</h4>
        </span>
        </Container>
    </div>
  )
}

export default BackToTop