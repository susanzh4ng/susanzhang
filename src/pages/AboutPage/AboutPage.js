import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./AboutPage.css";
import profile from '../../images/profile.png';

const AboutPage = () => {
  return (
    <div>
      <Container className='AboutPage'>
        <Row>
          <Col md={6}>
            <img src={profile} alt="Susan Zhang" className="img-fluid profileImg"/>
          </Col>
          <Col md={6}>
            <h1 className='AboutText'>Hi, I'm Susan Zhang.</h1>
            <p>I am a Computer Science and Experience Design student based in Dallas-Fort Worth, TX. Currently, I am a Designer and Corporate Relations Assistant for UTDesign — UT Dallas's engineering and computer science senior capstone program — where I design print media, graphics, and websites for students and C-suite members alike.</p>
            <p>My story starts with a virtual web development course I took back in high school. Vanilla JavaScript and HTML were enough for me to code a crude website, enough for functionality, but it was CSS that truly enticed me. Web design was the first time I was exposed to the intersection between computer science and art. Now, the principles of design, from having art as a first love, pour out in the form of code. I space out elements with Bootstrap components and margins by the pixel, choose color palettes that pass contrast checkers, and orient texts and images through display settings and padding. I do this in an attempt to make a sliver of the Internet my own.</p>
            <p>User experience design brings me back to the digitization of society, a reminder that advances in artificial intelligence and VR/AR are already a staple in our daily lives. I design to bridge technology and humanity.</p>
            <p>In my free time, I can be found either hunched over my sketchbook or a R. F. Kuang novel.</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default AboutPage