import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css'
import "./OrgPortal.css";

const OrgPortal = () => {
  return (
    <div className='OrgPortal'>
        <NavBar />
        <div className='OrgPortal-Banner' id="orgportal">
            <img
                src={orgPortalBanner}
                alt="OrgPortal 2024 Banner"
                className="banner-img"
            />
        </div>
        <Container className='Pixy-Container'>
            <div className='intro paragraph-div'>
            </div>
        </Container>
    </div>
  )
}

export default OrgPortal