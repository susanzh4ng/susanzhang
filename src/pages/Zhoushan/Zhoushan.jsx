import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css'
import zhoushanBanner from './ZhoushanImages/Zhoushan-Banner.png';
import NavBar from '../../components/NavBar/NavBar'
import BackToTop from '../../components/BackToTop/BackToTop';
import zs1 from './ZhoushanImages/NORMAL00682_Original.JPG';
import zs2 from './ZhoushanImages/NORMAL00685_Original.JPG';
import zs3 from './ZhoushanImages/NORMAL00688_Original.JPG';
import zs4 from './ZhoushanImages/NORMAL00707_Original.JPG';
import zs5 from './ZhoushanImages/NORMAL00734_Original.JPG';
import zs6 from './ZhoushanImages/NORMAL00739_Original.JPG';
import "./Zhoushan.css";

const Zhoushan = () => {
  return (
    <div className='Zhoushan'>
        <NavBar />
        <div className='Zhoushan-Banner' id="zhoushan">
            <img
                src={zhoushanBanner}
                alt="Zhoushan 2024 Banner"
                className="banner-img"
            />
        </div>
        <Container className='Pixy-Container'>
            <div className='intro paragraph-div'>
                <h1 className='Case-study-h1'>Zhoushan 2024</h1>
                <br></br>
                <br></br>
                <p>Tasked with an university Design class project, I present the “Look of the Games” for the hypothetical Zhoushan 2024 Summer Olympics!</p>
                <p>I aimed for my design to resonate with not only the broader global audience, but also the locals who embrace tradition and modernity alike. As a result, I developed a visual design system that manifests both the unifying Olympic Games and bright culture of my hometown Zhoushan, China.</p>
                <br></br>
                <Row className='rowfill'>
                    <Col md={4}>
                        <strong>Role</strong>
                        <p>Designer</p>
                    </Col>
                    <Col md={4}>
                        <strong>Team</strong>
                        <p>Individual</p>
                    </Col>
                    <Col md={4}>
                        <strong>Time</strong>
                        <p>May 2025</p>
                    </Col>
                </Row>
                <Row className='rowfill'>
                    <Col md={6}>
                        <strong>Industry</strong>
                        <p>Sporting events</p>
                    </Col>
                    <Col md={6}>
                        <strong>Deliverables</strong>
                        <p>Branding, Flyer Design, Print Media Design</p>
                    </Col>
                </Row>
            </div>
            <strong className='label Zhoushan-label'>City Introduction</strong>
            <div className='paragraph-div'>
                <br></br>
                <h3><i>About the Honored City</i></h3>
                <p>To introduce the city, Zhoushan is an urbanist archipelago just off of Southeast China that has been inhabited for the past 6,000 years. Zhoushan has persevered and flourished into a modern city that glows with culture and esteem.</p>

                <strong>CITY</strong>
                <ul>
                    <li>Urbanist archipelago consisting of 1,390 islands and 3,306 reefs</li>
                    <li>Historically, a vital commercial port and China's largest fishery</li>
                </ul>

                <strong>CULTURE</strong>
                <ul>
                    <li>Has been shaped by Confucianism, Daoism, and Buddhism</li>
                </ul>

                <strong>PEOPLE</strong>
                <ul>
                    <li>Diverse perspectives ranging from fishermen to farmers to scholars to monks</li>
                </ul>

                <strong>LANDMARKS</strong>
                <ul>
                    <li>Dinghai Ancient City, Putuo Mountain, and many, many more</li>
                </ul>
                <Row>
                    <Col md={4}>
                        <img
                        src={zs1}
                        alt="Zhoushan, China"
                        width="100%"
                        height="auto"
                        />
                    </Col>
                    <Col md={4}>
                        <img
                        src={zs2}
                        alt="Zhoushan, China"
                        width="100%"
                        height="auto"
                        />
                    </Col>
                    <Col md={4}>
                        <img
                        src={zs3}
                        alt="Zhoushan, China"
                        width="100%"
                        height="auto"
                        />
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <img
                        src={zs4}
                        alt="Zhoushan, China"
                        width="100%"
                        height="auto"
                        />
                    </Col>
                    <Col md={4}>
                        <img
                        src={zs5}
                        alt="Zhoushan, China"
                        width="100%"
                        height="auto"
                        />
                    </Col>
                    <Col md={4}>
                        <img
                        src={zs6}
                        alt="Zhoushan, China"
                        width="100%"
                        height="auto"
                        />
                    </Col>
                </Row>
                <br></br>
                <br></br>
             </div>
            <strong className='label Zhoushan-label'>Brand Attributes</strong>
            <div className='paragraph-div'>
                <br></br>
                <Row className='rowfill'>
                    <Col md={6}>
                        <div className='callout-card Zhoushan-callout'>
                            <h4>The Olympic Games</h4>
                            <ul>
                                <li>inclusion</li>
                                <li>peace</li>
                                <li>unity</li>
                                <li>excellence</li>
                                <li>friendship</li>
                            </ul>
                            <p>... through athletic competition</p>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className='callout-card Zhoushan-callout'>
                            <h4>Zhoushan, China</h4>
                            <ul>
                                <li>endurance</li>
                                <li>compassion</li>
                                <li>modernity</li>
                                <li>respect</li>
                                <li>dynamism</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <br></br>
                <br></br>
            </div>
            <strong className='label Wehack-label'>Event Photos</strong>
            <div className='paragraph-div'>
            <br></br>
                <h3><i>Wishes turned to wonders</i></h3>
                <br></br>
                
                <br></br>
                
                <br></br>
                
                <br></br>
                
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

export default Zhoushan