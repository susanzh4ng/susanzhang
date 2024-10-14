import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css'
import wehackBanner from './WehackImages/wehack-banner.png';
import shirt from './WehackImages/wehack-shirt.png'
import sticker from './WehackImages/wehack-sticker.png'
import scrunchie from './WehackImages/wehack-scrunchie.png'
import tote from './WehackImages/wehack-tote.png'
import crewneck from './WehackImages/wehack-crewneck.png'
import wehack1 from './WehackImages/DSC07978.JPG'
import wehack2 from './WehackImages/wehack-2.jpg'
import wehack3 from './WehackImages/wehack-3.jpg'
import wehack4 from './WehackImages/wehack-4.jpg'
import wehack5 from './WehackImages/wehack-5.jpg'
import wehack6 from './WehackImages/wehack-6.jpg'
import wehack7 from './WehackImages/wehack-7.jpg'
import wehack8 from './WehackImages/wehack-8.jpg'
import wehack9 from './WehackImages/wehack-9.jpg'
import wehack10 from './WehackImages/wehack-10.jpg'
import wehack11 from './WehackImages/wehack-11.jpg'
import wehack12 from './WehackImages/wehack-12.jpg'
import NavBar from '../../components/NavBar/NavBar'
import BackToTop from '../../components/BackToTop/BackToTop';
import "./Wehack.css";

const Wehack = () => {
  return (
    <div className='Wehack'>
        <NavBar />
        <div className='Wehack-Banner'>
            <img
                src={wehackBanner}
                alt="WEHack Banner"
                className="banner-img"
            />
        </div>
        <Container className='Pixy-Container'>
            <div className='intro paragraph-div'>
                <h1 className='Case-study-h1'>WEHack 2024</h1>
                <br></br>
                <br></br>
                <p>Women in Engineering Hackathon (WEHack) is the University of Texas at Dallas's women and nonbinary uniting 24-hour hackathon; a hackathon is a social coding event and competition that brings together computer programmers in a collaborative environment. It is the largest gender-inclusive hackathon in the DFW metroplex. For the 2024 iteration, the theme was “Enchanted to be Here”.</p>
                <p>As a design organizer, I was tasked with creating our social media campaign, web assets, sponsorship packet design, and merchandise designs used and distributed at the hackathon, including the hack portal website, t-shirt, and tote bag to name a few. </p>
                <br></br>
                <Row>
                    <Col md={6}>
                        <strong>Role</strong>
                        <p>Design Organizer</p>
                    </Col>
                    <Col md={6}>
                        <strong>Time</strong>
                        <p>Fall 2023 - Spring 2024</p>
                    </Col>
                </Row>
            </div>
            <strong className='label Wehack-label'>Impact</strong>
            <div className='paragraph-div'>
                <br></br>
                <h3><i>Enchanted outcomes</i></h3>
                <p>The event turned out to be a heart-warming success! The sponsorship booklet I designed, once given to the Industry Team, garnered $18,000+ in company sponsorships. On the day of the event, the merchandise I designed was exhibited by our 200+ hackers, sponsor representatives, and organizers. Throughout the event, several people even came up to me to specifically thank me for how much they enjoyed the designs!</p>
                <br></br>
                <br></br>
             </div>
            <strong className='label Wehack-label'>Merchandise Mockups</strong>
            <div className='paragraph-div'>
                <br></br>
                <h3><i>Magic in the making</i></h3>
                <br></br>
                <Row>
                    <Col md={4} className='d-flex align-items-center justify-content-center'>
                        <section>
                            <img
                            src={shirt}
                            alt="WEHack 2024 Shirt Design"
                            width="100%"
                            height="auto"
                            />
                            <p style={{textAlign: 'center'}}>Shirt Design</p>
                        </section>
                    </Col>
                    <Col md={4} className='d-flex align-items-center justify-content-center'>
                        <section>
                            <img
                            src={scrunchie}
                            alt="WEHack 2024 Scrunchie Design"
                            width="100%"
                            height="auto"
                            />
                            <p style={{textAlign: 'center'}}>Scrunchie Design</p>
                        </section>
                    </Col>
                    <Col md={4} className='d-flex align-items-center justify-content-center'>
                        <section>
                            <img
                            src={sticker}
                            alt="WEHack 2024 Sticker Design"
                            width="100%"
                            height="auto"
                            />
                            <p style={{textAlign: 'center'}}>Sticker Design</p>
                        </section>
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Col md={4} className='d-flex align-items-center justify-content-center'>
                        <section>
                            <img
                            src={tote}
                            alt="WEHack 2024 Tote Bag Design"
                            width="100%"
                            height="auto"
                            />
                            <p style={{textAlign: 'center'}}>Tote Bag Design</p>
                        </section>
                    </Col>
                    <Col md={4} className='d-flex align-items-center justify-content-center'>
                        <section>
                            <img
                            src={crewneck}
                            alt="WEHack 2024 Crewneck Design"
                            width="100%"
                            height="auto"
                            />
                            <p style={{textAlign: 'center'}}>Crewneck Design</p>
                        </section>
                    </Col>
                </Row>
                <br></br>
                <p><a href='https://drive.google.com/file/d/12MZrM5wE8tYS8BM_6GyMNSgCGLwACl_q/view?usp=sharing' target="_blank" rel="noopener noreferrer">Click here to view WEHack 2024 Sponsorship Booklet 🡭</a></p>
                <br></br>
                <br></br>
            </div>
            <strong className='label Wehack-label'>Event Photos</strong>
            <div className='paragraph-div'>
            <br></br>
                <h3><i>Wishes turned to wonders</i></h3>
                <br></br>
                <Row>
                    <Col md={4}>
                        <img
                        src={wehack1}
                        alt="WEHack 2024 Event"
                        width="100%"
                        height="auto"
                        />
                    </Col>
                    <Col md={4}>
                        <img
                        src={wehack2}
                        alt="WEHack 2024 Event"
                        width="100%"
                        height="auto"
                        />
                    </Col>
                    <Col md={4}>
                        <img
                        src={wehack3}
                        alt="WEHack 2024 Event"
                        width="100%"
                        height="auto"
                        />
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Col md={4}>
                        <img
                        src={wehack4}
                        alt="WEHack 2024 Event"
                        width="100%"
                        height="auto"
                        />
                    </Col>
                    <Col md={4}>
                        <img
                        src={wehack5}
                        alt="WEHack 2024 Event"
                        width="100%"
                        height="auto"
                        />
                    </Col>
                    <Col md={4}>
                        <img
                        src={wehack6}
                        alt="WEHack 2024 Event"
                        width="100%"
                        height="auto"
                        />
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Col md={4}>
                        <img
                        src={wehack7}
                        alt="WEHack 2024 Event"
                        width="100%"
                        height="auto"
                        />
                    </Col>
                    <Col md={4}>
                        <img
                        src={wehack8}
                        alt="WEHack 2024 Event"
                        width="100%"
                        height="auto"
                        />
                    </Col>
                    <Col md={4}>
                        <img
                        src={wehack9}
                        alt="WEHack 2024 Event"
                        width="100%"
                        height="auto"
                        />
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Col md={4}>
                        <img
                        src={wehack10}
                        alt="WEHack 2024 Event"
                        width="100%"
                        height="auto"
                        />
                    </Col>
                    <Col md={4}>
                        <img
                        src={wehack11}
                        alt="WEHack 2024 Event"
                        width="100%"
                        height="auto"
                        />
                    </Col>
                    <Col md={4}>
                        <img
                        src={wehack12}
                        alt="WEHack 2024 Event"
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

export default Wehack