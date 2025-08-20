import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css'
import cometGalaBanner from './CometGalaImages/cometGala-banner.png';
import teaser from './CometGalaImages/CometGala-Teaser.png'
import primary from './CometGalaImages/CometGala-MuralReference.png'
import secondary from './CometGalaImages/CometGalaCollaborators_Digital.png'
import flyer from './CometGalaImages/Frame 4.jpg'
import cometgala1 from './CometGalaImages/cometgala-1.jpeg'
import cometgala2 from './CometGalaImages/cometgala-2.jpeg'
import cometgala3 from './CometGalaImages/cometgala-3.jpeg'
import cometgala4 from './CometGalaImages/cometgala-4.jpg'
import cometgala5 from './CometGalaImages/cometgala-5.jpg'
import cometgala6 from './CometGalaImages/cometgala-6.jpg'
import cometgala7 from './CometGalaImages/cometgala-7.jpg'
import cometgala8 from './CometGalaImages/cometgala-8.jpeg'
import cometgala9 from './CometGalaImages/cometgala-9.jpg'
import NavBar from '../../components/NavBar/NavBar'
import BackToTop from '../../components/BackToTop/BackToTop';
import "./CometGala.css";

const CometGala = () => {
  return (
    <div className='CometGala'>
        <NavBar />
        <div className='CometGala-banner' id='gala'>
            <img
                src={cometGalaBanner}
                alt="Comet Gala Banner"
                className="banner-img"
            />
        </div>
        <Container className='Pixy-Container'>
            <div className='intro paragraph-div'>
                <h1 className='Case-study-h1'>Comet Gala 2024</h1>
                <br></br>
                <br></br>
                <p>AIGA UTD is the University of Texas at Dallas's chapter for the American Institute of Graphic Arts; it is a student group for design and the arts. AIGA UTD's largest event of the school year is Comet Gala, a collaborative event with various campus organizations that brings together the student body for a night of performances, art vendors, food, drinks, and interactive activities. For the 2024 iteration, the theme was “A Night Among the Stars”.</p>
                <p>As the design lead, I was tasked with creating our social media campaign used to promote our gala and boost attendance among the UT Dallas student body.</p>
                <br></br>
                <Row className='rowfill'>
                    <Col md={6}>
                        <strong>Role</strong>
                        <p>Design Lead</p>
                    </Col>
                    <Col md={6}>
                        <strong>Time</strong>
                        <p>March-April 2024</p>
                    </Col>
                </Row>
            </div>
            <strong className='label CometGala-label'>Impact</strong>
            <div className='paragraph-div'>
                <br></br>
                <h3><i>Stellar Success</i></h3>
                <p>The event was a stellar success! The day of the event exhibited</p>
                <ul>
                    <li>5 performances from collaborating student organizations</li>
                    <li>3 interactive activities from collaborating student organizations</li>
                    <li>13 vendors tabling food and art</li>
                    <li>400+ attendees!</li>
                </ul>
                <br></br>
                <p><a href='https://utdmercury.com/comet-gala-a-night-among-the-stars/' target="_blank" rel="noopener noreferrer">Read press coverage on Comet Gala 2024 here 🡭</a></p>
                <br></br>
                <br></br>
             </div>
            <strong className='label CometGala-label'>Key Visuals</strong>
            <div className='paragraph-div'>
                <br></br>
                <h3><i>Written in the stars</i></h3>
                <br></br>
                <Row>
                    <Col md={6} className='d-flex align-items-center justify-content-center'>
                        <section className='text-center d-flex flex-column align-items-center'>
                            <img
                            src={teaser}
                            alt="Comet Gala 2024 Teaser Design"
                            width="80%"
                            height="auto"
                            />
                            <p>Teaser Design</p>
                            <img
                            src={secondary}
                            alt="Comet Gala 2024 Secondary Design"
                            width="80%"
                            height="auto"
                            />
                            <p>Secondary Design</p>
                        </section>
                    </Col>
                    <Col md={6} className='d-flex align-items-center justify-content-center'>
                        <section>
                            <img
                            src={flyer}
                            alt="Comet Gala 2024 Flyer Design"
                            width="100%"
                            height="auto"
                            />
                            <p style={{textAlign: 'center'}}>Flyer Design</p>
                        </section>
                    </Col>
                </Row>
                <section>
                    <br></br>
                    <img
                        src={primary}
                        alt="Comet Gala 2024 Mural Design"
                        className='designPersona'
                        width="100%"
                        height="auto"
                    />
                    <p style={{textAlign: 'center'}}>Mural Design</p>
                </section>
                <br></br>
                <br></br>
            </div>
            <strong className='label CometGala-label'>Event Photos</strong>
            <div className='paragraph-div'>
            <br></br>
                <h3><i>Wishes turned to wonders</i></h3>
                <br></br>
                <Row>
                    <Col md={4}>
                        <img
                        src={cometgala1}
                        alt="Comet Gala 2024 Event"
                        width="100%"
                        height="auto"
                        />
                    </Col>
                    <Col md={4}>
                        <img
                        src={cometgala2}
                        alt="Comet Gala 2024 Event"
                        width="100%"
                        height="auto"
                        />
                    </Col>
                    <Col md={4}>
                        <img
                        src={cometgala3}
                        alt="Comet Gala 2024 Event"
                        width="100%"
                        height="auto"
                        />
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Col md={4}>
                        <img
                        src={cometgala4}
                        alt="Comet Gala 2024 Event"
                        width="100%"
                        height="auto"
                        />
                    </Col>
                    <Col md={4}>
                        <img
                        src={cometgala5}
                        alt="Comet Gala 2024 Event"
                        width="100%"
                        height="auto"
                        />
                    </Col>
                    <Col md={4}>
                        <img
                        src={cometgala6}
                        alt="Comet Gala 2024 Event"
                        width="100%"
                        height="auto"
                        />
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Col md={4}>
                        <img
                        src={cometgala7}
                        alt="Comet Gala 2024 Event"
                        width="100%"
                        height="auto"
                        />
                    </Col>
                    <Col md={4}>
                        <img
                        src={cometgala8}
                        alt="Comet Gala 2024 Event"
                        width="100%"
                        height="auto"
                        />
                    </Col>
                    <Col md={4}>
                        <img
                        src={cometgala9}
                        alt="Comet Gala 2024 Event"
                        width="100%"
                        height="auto"
                        />
                    </Col>
                </Row>
                <br></br>
                <br></br>
            </div>
            <BackToTop />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
      </Container>
    </div>
  )
}

export default CometGala