import React from 'react'
//import { Button, Alert, Breadcrumb, Card, Container, Row, Col} from 'react-bootstrap'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css'
import gif from './UTDCapstoneImages/UTD Capstone Programs.gif'
import utdcapstonesBanner from './UTDCapstoneImages/UTD-Banner.png';
import NavBar from '../../components/NavBar/NavBar'
import BackToTop from '../../components/BackToTop/BackToTop';
import "./UTDCapstone.css";

const UTDCapstone = () => {
  return (
    <div className='UTDCapstone'>
        <NavBar />
        <div className='UTDCapstone-banner' id="capstones">
            <img
                src={utdcapstonesBanner}
                alt="UTD Capstone Programs Banner"
                className="banner-img"
            />
        </div>
        <Container className='Pixy-Container'>
            <div className='intro paragraph-div'>
                <h1 className='Case-study-h1'>UT Dallas Capstone Programs</h1>
                <br></br>

                <br></br>
                <p>UT Dallas is a rising public research university located just outside of Dallas, Texas. UT Dallas offers more than 140 academic programs, across its 8 schools - 3 of which offer corporate-sponsored undergraduate capstone programs. The Erik Jonsson School of Engineering & Computer Science provides the UTDesign® Capstone program, the Jonsson School and the School of Natural Sciences & Mathematics jointly offer the UTDiscovery capstone program, and Naveen Jindal School of Management offer the UTDsolv capstone program.</p>
                <p>As the sole web designer on the project, I was tasked to design a landing page unifying and co-marketing the 3 UT Dallas corporate-sponsored capstones. I also facilitated communication within the UTD senior capstone programs' marketing team - the product owner - and between the UT Dallas web services team - the product developer. </p>
                <br></br>
                <Row>
                    <Col md={6}>
                        <strong>Company</strong>
                        <p>UT Dallas</p>
                    </Col>
                    <Col md={6}>
                        <strong>Link</strong>
                        <p><a href='https://capstone.utdallas.edu/' target="_blank" rel="noopener noreferrer">capstone.utdallas.edu</a></p>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <strong>Team</strong>
                        <p>7 Marketing Associates, 7 Web Developers</p>
                    </Col>
                    <Col md={4}>
                        <strong>Role</strong>
                        <p>Web Designer</p>
                    </Col>
                    <Col md={4}>
                        <strong>Time</strong>
                        <p>Summer 2024</p>
                    </Col>
                </Row>
            </div>
            <strong className='label UTDCapstone-label'>Project Details</strong>
            <div className='paragraph-div'>
                <br></br>
                <h3><i>Beyond Brochures</i></h3>
                <p>I was tasked with designing a landing page meant to cross-promote the 3 UT Dallas corporate-sponsored capstones: UTDesign, UTDiscovery, and UTDsolv. I was brought on to corroborate and create web wireframes based on the marketing research already done by a team of 4 marketing associates on this joint capstone venture. </p>
                <br></br>
                <div className='callout-card UTDCapstone-callout'>
                    <h4>Design Goal</h4>
                    <p>Introduce users to UT Dallas's corporate-sponsored capstones, demonstrate their acclaim and approval, and entice company leaders to their individual pages so that they can propose a capstone project.</p>
                </div>
                <div className='callout-card UTDCapstone-callout'>
                    <h4>Target Users</h4>
                    <ul>
                        <li>30 to 60 years old</li>
                        <li>C-suite and other high ranking members of companies with offices located in DFW, TX</li>
                    </ul>
                </div>
                <div className='callout-card UTDCapstone-callout'>
                    <h4>Design Criteria</h4>
                    <p>Breadth and depth: UTDesign, UTDiscovery, and UTDsolv all greatly benefit DFW companies in a variety of industries and methodologies, but we also wanted to discern them and clarify to local leaders which capstone program best fit their business needs.</p>
                </div>
                <br></br>
                <br></br>
            </div>
            <strong className='label UTDCapstone-label'>Statement of the Problem</strong>
            <div className='paragraph-div'>
                <br></br>
                <h3><i>Distinguished yet discreet</i></h3>
                <p>UT Dallas corporate-sponsored capstones have aided their local community and strengthed bonds between academia and corporations for the past decade. Companies greatly benefit from student teams' work, and several students obtain post-graduate positions within their sponsoring company afterwards. However, this powerful tool is not known to many DFW-based companies, especially smaller companies and companies that have recently relocated. Likewise, a company might be aware of one capstone program but not the other that is relevant to their business needs.</p>
                <p>The UT Dallas's senior capstone programs' landing page is intended to <strong>raise awareness of their services, distinguish between their programs, and attract company leaders to propose a capstone project</strong>.</p>
                <br></br>
                <br></br>
            </div>
            <strong className='label UTDCapstone-label'>Solution</strong>
            <div className='paragraph-div'>
                <br></br>
                <h3><i>Uncovering UT Dallas Capstone Programs</i></h3>
                <p>Based on the marketing research already done by a prior marketing team and consistent collaboration with the UTD capstone programs' marketing team, we came up with these following landing page elements:</p>
                <ul>
                    <li>Hero section, shouting out UTD capstone programs' main goal</li>
                    <li>Overview, highlighting who we are and what we do</li>
                    <li>UTDesign® Capstone section, describing what UTDesign does and providing access to its landing page</li>
                    <li>UTDiscovery Capstone section, describing what UTDiscovery does and providing access to its landing page</li>
                    <li>UTDsolv Capstone section, describing what UTDsolv does and providing access to its landing page</li>
                    <li>Benefits, of choosing a UTD capstone program</li>
                    <li>Testimonials, from local company leaders</li>
                    <li>Company sponsors, to display our range</li>
                    <li>Email form, for prospective sponsors to directly contact corporate relations representatives</li>
                    <li>Footer, to consolidate relevant contact information and links</li>
                </ul>
                <br></br>
                <img
                    src={gif}
                    alt="UT Dallas Capstone Programs"
                    className='designPersona'
                    />
                <br></br>
                <br></br>
                <p><a href='https://www.figma.com/proto/0lccYKglpsmeW9aS6f51xW/UTD-Capstone-Programs?node-id=2-336&node-type=frame&t=kBxpmUW3COYz7p2o-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1' target="_blank" rel="noopener noreferrer">Click here to view UT Dallas Capstone Programs's complete prototype 🡭</a></p>
                <p><a href='https://capstone.utdallas.edu/' target="_blank" rel="noopener noreferrer">Click here to view the launched UT Dallas Capstone Programs Landing Page 🡭</a></p>
                <p><a href='https://drive.google.com/file/d/15yVJ2r2BzB8zL8qAnDm6UyTuzu3ZhH_w/view?usp=sharing' target="_blank" rel="noopener noreferrer">Click here to view UT Dallas Capstone Programs's digital flyer, which I also created 🡭</a></p>
                <br></br>
                <br></br>
            </div>
            <strong className='label UTDCapstone-label'>Design System & Documentation</strong>
            <div className='paragraph-div'>
                <br></br>
                <h3><i>Consistency is key</i></h3>
                <p>As my team was working directly with UT Dallas's Web Services team, I was designing with the double edge sword of CampusPress - a web content management system specifically for universities -'s pre-made design blocks. In fact, some of my designs were not feasible with our given blocks, so I worked with the Web Services team to understand what shortcomings were present and how to best address them in a way that was accessible to the user but was still technically possible. On the other hand, there was no need for me to personally create a design system - color palette, typography, asset design, etc. - as it already existed within the web team's workflow. </p>
                <p>CampusPress also freed me from having to create the standard documentation that product designers typically convey to software developers. Instead, my documentation consisted of annotated screenshots of the website compared to my own wireframes with corresponding comments of what we wanted to be improved on. Before I was brought on the UTDesign team, the Web Services team was only given the base wireframes without context; I was complimented by a web lead that my new initiative was helpful to their team's workflow!</p>
                <br></br>
                <br></br>
            </div>
            <strong className='label UTDCapstone-label'>Reflection</strong>
            <div className='paragraph-div'>
                <br></br>
                <div className='callout-card UTDCapstone-callout'>
                    <h4>All ideas are good ideas</h4>
                    <p>This project required me to facilitate meetings with not only my UTDesign team, but also with staff members from other UT Dallas colleges. During our meetings to decide on our website’s text, I found that their conversations garnered insight on how to make a better promotional website in addition to learning more about my team's thinking and problem-solving approaches.</p>
                </div>
                <div className='callout-card UTDCapstone-callout'>
                    <h4>Good things take time</h4>
                    <p>We had several meetings with the UT Dallas Web Services team to assess the progress of our website. During one of our latter meetings, I asked why they decided to display content differently than what was originally on the wireframes, and I found it was because the Web Services team was currently in the works of custom coding that functionality for a different project that would also be applicable here. Good things take time!</p>
                </div>
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

export default UTDCapstone