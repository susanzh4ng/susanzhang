import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./AboutPage.css";
import profile from '../../images/profile.jpg';
import NavBar from '../../components/NavBar/NavBar';

const AboutPage = () => {
  return (
    <div>
      <NavBar/>
      <Container className='AboutPage'>
        <Row className="justify-content-center align-items-center imgandtext">
          <Col xs={12} md={6} className="d-flex justify-content-center justify-content-md-end">
            <img src={profile} alt="Susan Zhang" className="img-fluid profileImg"/>
          </Col>
          <Col xs={12} md={6} className="d-flex justify-content-center justify-content-md-start">
            <div className='hiimsusan text-center text-md-start'>
              <h1 className='h1default'>✮ ⋆ ˚｡</h1>
              <h1 className='h1default'>Hi, I'm Susan!</h1>
              <h1 className='h1default'>⋆｡°✩</h1>
            </div>
          </Col>
        </Row>

        <div className='mt-3 AboutText'>
          <p>Thanks for stopping by! As a student at the University of Texas at Dallas, I am pursuing a degree in Computer Science alongside a certificate in Applied Experience Design and Research. I embrace ✧modern✧ and ✩user-oriented✩ applications.</p>
          <p>Currently, I am designing at ACM UTD, helping connect and simplify life for our student body. Previously, I have been a Corporate Relations Assistant for UTDesign — UT Dallas's engineering and computer science senior capstone program — where I designed print media, graphics, and websites for students and C-suite members alike, and a Product Design Intern at Paycom — where I researched and designed solutions for a streamlined onboarding experience — a module used by over 50k clients. </p>
          <p>My story starts with a virtual web development course I took back in high school. Vanilla JavaScript and HTML were enough for me to code a crude website, enough for functionality, but it was CSS that truly enticed me. Web design was the first time I was exposed to the intersection between computer science and art. Due to my varied background, I have been granted opportunities to work closely with and understand the minds of marketing experts, software engineers, and project managers; these experiences have trained me to envision solutions that balance business goals and technical feasibility while keeping users at the forefront.</p>
          <p>Now, the principles of design, from having art as a first love, pour out in an attempt to make a sliver of the Internet my own. User experience design brings me back to the digitization of society, a reminder that advances in artificial intelligence and VR/AR are already a staple in our daily lives; I design to bridge this technology and humanity.</p>
          <p>When I am not designing or tackling a data structures problem set, I can be found either hunched over my sketchbook or a R. F. Kuang novel.</p>
        </div>
      </Container>
    </div>
  )
}

export default AboutPage