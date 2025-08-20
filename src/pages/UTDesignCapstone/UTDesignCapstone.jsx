import React from 'react'
//import { Button, Alert, Breadcrumb, Card, Container, Row, Col} from 'react-bootstrap'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css'
import propose from './UTDesignCapstoneImages/utdesign-1.png'
import news from './UTDesignCapstoneImages/utdesign-2.png'
import videos from './UTDesignCapstoneImages/utdesign-3.png'
import guidelines from './UTDesignCapstoneImages/utdesign-4.png'
import docs from './UTDesignCapstoneImages/docs.png'
import utdesignBanner from './UTDesignCapstoneImages/UTDesignCapstone-Banner.png';
import NavBar from '../../components/NavBar/NavBar'
import BackToTop from '../../components/BackToTop/BackToTop';
import "./UTDesignCapstone.css";

const UTDesignCapstone = () => {
  return (
    <div className='UTDesignCapstone'>
        <NavBar />
        <div className='UTDesignCapstone-banner'id="utdesign">
            <img
                src={utdesignBanner}
                alt="UTDesign Capstone Banner"
                className="banner-img"
            />
        </div>
        <Container className='Pixy-Container'>
            <div className='intro paragraph-div'>
                <h1 className='Case-study-h1'>UTDesign® Capstone</h1>
                <br></br>

                <br></br>
                <p>UTDesign is the engineering and computer science capstone program for the University of Texas at Dallas. It is one of the top undergraduate capstone programs in the country, with 20 national accolades, in counting.</p>
                <p>As the sole web designer on the project, I was tasked to redesign their websites to improve the user experience and visual design of several pages. I also facilitated communication between the UTDesign corporate relations team - the product owner - and the UT Dallas web services team - the product developer. </p>
                <br></br>
                <Row className='rowfill'>
                    <Col md={6}>
                        <strong>Company</strong>
                        <p>UTDesign, UT Dallas</p>
                    </Col>
                    <Col md={6}>
                        <strong>Links</strong>
                        <p><a href='https://utdesign.utdallas.edu/' target="_blank" rel="noopener noreferrer">utdesign.com</a></p>
                        <p><a href='https://utdesignstudents.utdallas.edu/' target="_blank" rel="noopener noreferrer">utdesignstudents.utdallas.edu</a></p>
                    </Col>
                </Row>
                <Row className='rowfill'>
                    <Col md={4}>
                        <strong>Team</strong>
                        <p>5 Corporate Relations Associates, 7 Web Developers</p>
                    </Col>
                    <Col md={4}>
                        <strong>Role</strong>
                        <p>Web Designer</p>
                    </Col>
                    <Col md={4}>
                        <strong>Time</strong>
                        <p>Spring - Summer 2024</p>
                    </Col>
                </Row>
            </div>
            <strong className='label UTDesignCapstone-label'>Project Details</strong>
            <div className='paragraph-div'>
                <br></br>
                <h3><i>Designing for UTDesign®</i></h3>
                <p>I was tasked with redesigning two UTDesign® Capstone websites: the main company-side website, and the student/advisor-side website.</p>
                <p>I was brought on in the middle of the project cycle, replacing their previous designer. Their previous web designer had already created the initial high-fidelity wireframes, but he sadly had to transfer positions before the project's completion. As such, I got brought in just in time for the first website review between the UTDesign corporate relations team - the product owner - and the UT Dallas web services team - the product developer. </p>
                <p>Additionally, by the time I got brought on, there were clear goals and definitions for what each webpage was and was intended to do; my role  was to ideate and create wireframes to further enforce each webpage's purpose and correct any visual inconsistencies.</p>
                <br></br>
                <h4>UTDesign® Capstone Project Details</h4>
                <div className='callout-card UTDesignCapstone-callout'>
                    <h4>Goals</h4>
                    <p>Improve the user experience of the video library and news & events pages, correct any visual design inconsistencies, and attract company leaders to propose a UTDesign® Capstone Project.</p>
                </div>
                <div className='callout-card UTDesignCapstone-callout'>
                    <h4>Target Users</h4>
                    <ul>
                        <li>30 to 60 years old</li>
                        <li>C-suite and other high ranking members of companies with offices located in DFW, TX</li>
                    </ul>
                </div>
                <div className='callout-card UTDesignCapstone-callout'>
                    <h4>Design Criteria</h4>
                    <p>Prioritizing flow: all important information should be correlated and easily accessible for a clear understanding of UTDesign's impact in order to induce project proposals.</p>
                </div>
                <br></br>
                <br></br>
                <h4>UTDesign Students & Advisors Project Details</h4>
                <div className='callout-card UTDesignCapstone-callout'>
                    <h4>Goals</h4>
                    <p>Improve the user experience of the guidelines and student resources pages and correct any visual design inconsistencies.</p>
                </div>
                <div className='callout-card UTDesignCapstone-callout'>
                    <h4>Target Users</h4>
                    <ul>
                        <li>20 to 60 years old</li>
                        <li>UT Dallas senior-level engineering and computer science students</li>
                        <li>UT Dallas engineering and computer science professors</li>
                        <li>Technical employees of companies with offices located in DFW, TX</li>
                    </ul>
                </div>
                <div className='callout-card UTDesignCapstone-callout'>
                    <h4>Design Criteria</h4>
                    <p>Prioritizing flow: all important information should be correlated and easily accessible so that students and advisors alike have a clear course to necessary documents and resources vital for a successful UTDesign® Capstone project.</p>
                </div>
                <br></br>
                <br></br>
            </div>
            <strong className='label UTDesignCapstone-label'>Statement of the Problem</strong>
            <div className='paragraph-div'>
                <br></br>
                <h3><i>Outdated and obsolete</i></h3>
                <p>The original UTDesign site served many students and CEO's alike for 10+ years. However, it had many user experience issues:</p>
                <ul>
                    <li>Website's primary goal no longer aligned with UTDesign's primary goal</li>
                    <li>Provided inconvenient features (i.e. company leader could schedule a meeting that would not align with the UTDesign associate's schedule)</li>
                    <li>Stagnant navigation</li>
                    <li>Did not prioritize primary audience</li>
                    <li>Search & filter functionality of the Past Projects Page was broken</li>
                    <li>Content in the News & Events Page was unsorted</li>
                    <li>Content in the Video Library Page was unsorted</li>
                </ul>
                <p>Additionally, we felt that the old website's visual design was too busy and even overwhelming. We wanted to consolidate and simplify it, especially so that it would fit the brand and style guidelines of a proper UT Dallas website.</p>
                <br></br>
                <br></br>
            </div>
            <strong className='label UTDesignCapstone-label'>Solution</strong>
            <div className='paragraph-div'>
                <br></br>
                <h3><i>Presenting the new UTDesign</i></h3>
                <p>After familiarizing myself with the design dilemmas, I began creating design solutions for each of the target pages. After extensive meetings and communication with both the UTDesign team and the UT Dallas Web Services team, we were able to launch our finished product just in time for the new school semester: company leaders could browse our site for inspiration for an upcoming project and students could access much-needed resources.</p>
                <p>I wanted to highlight my top 4 proudest contributions here:</p>
                <br></br>
                <Row>
                    <Col md={6} className='d-flex align-items-center justify-content-center'>
                        <section>
                            <h3><i>Propose a project with ease!</i></h3>
                            <p>Proposing a project is now easily accessible to a company leader - as opposed to having to meticulously contact a UTDesign staff member first. Additionally based on Click-Map Analysis, these buttons are the most popular feature on our website, successfully accomplishing our goal of generating more projects!</p>
                        </section>
                    </Col>
                    <Col md={6} className='col d-flex align-items-center justify-content-center'>
                        <img
                        src={propose}
                        alt="Propose a Project"
                        width="100%"
                        height="auto"
                        />
                    </Col>
                </Row>
                <br></br>
                <br></br>
                <Row>
                    <Col md={6} className='col d-flex align-items-center justify-content-center'>
                        <img
                        src={news}
                        alt="News & Events"
                        width="100%"
                        height="auto"
                        />
                    </Col>
                    <Col md={6} className='d-flex align-items-center justify-content-center'>
                        <section>
                            <h3><i>Catch up on our news and events!</i></h3>
                            <p>Now, you can look through UTDesign's latest news, events, achievements, and more! For this page, I took it upon myself to learn WordPress to sort posts and create categories and their respective pages. </p>
                        </section>
                    </Col>
                </Row> 
                <br></br>
                <br></br>
                <Row>
                    <Col md={6} className='d-flex align-items-center justify-content-center'>
                        <section>
                            <h3><i>Explore our video library!</i></h3>
                            <p>Now, you can look through UTDesign's testimonial, overview, and project showcase videos with ease! Additionally, I proposed for ellipsis truncation on video descriptions that exceeded a line limit to make the design more consistent.</p>
                        </section>
                    </Col>
                    <Col md={6} className='col d-flex align-items-center justify-content-center'>
                        <img
                        src={videos}
                        alt="Video Library"
                        width="100%"
                        height="auto"
                        />
                    </Col>
                </Row>
                <br></br>
                <br></br>
                <Row>
                    <Col md={6} className='col d-flex align-items-center justify-content-center'>
                        <img
                        src={guidelines}
                        alt="Student Guidelines"
                        width="100%"
                        height="auto"
                        />
                    </Col>
                    <Col md={6} className='d-flex align-items-center justify-content-center'>
                        <section>
                            <h3><i>View guidelines here!</i></h3>
                            <p>Over the course of this project, I proposed to convert PDF files that were externally linked on the website to be displayed on the website itself, making the viewing process more seamless for users!</p>
                        </section>
                    </Col>
                </Row> 
                <br></br>
                <br></br>
                <p><a href='https://utdesign.utdallas.edu/' target="_blank" rel="noopener noreferrer">Click here to view the launched UTDesign® Capstone Website 🡭</a></p>
                <p><a href='https://utdesignstudents.utdallas.edu/' target="_blank" rel="noopener noreferrer">Click here to view the launched UTDesign Students & Advisors Website 🡭</a></p>
                <br></br>
                <br></br>
            </div>
            <strong className='label UTDesignCapstone-label'>Design System & Documentation</strong>
            <div className='paragraph-div'>
                <br></br>
                <h3><i>Consistency is key</i></h3>
                <p>As my team was working directly with UT Dallas's Web Services team, I was designing with the double edge sword of CampusPress - a web content management system specifically for universities -'s pre-made design blocks. In fact, some of my initial designs were rejected solely because there did not exist a CampusPress block that would accomplish it. I soon learned to design faithfully to the UTDesign web style guidelines. As such, there was no need for me to personally create a design system - color palette, typography, asset design, etc. - as it already existed within the web team's workflow. </p>
                <p>That also freed me from having to create the standard documentation that product designers typically convey to software developers. Instead, my documentation consisted of annotated screenshots of the website compared to my own wireframes with corresponding comments of what we wanted to be improved on. Before I was brought on, the Web Services team was only given the base wireframes without context; I was complimented by a web lead that my new initiative was helpful to their team's workflow!</p>
                <img
                    src={docs}
                    alt="UTDesign Capstone Documentation"
                    className="designPersona"
                />
                <br></br>
                <br></br>
            </div>
            <strong className='label UTDesignCapstone-label'>Reflection</strong>
            <div className='paragraph-div'>
                <br></br>
                <div className='callout-card UTDesignCapstone-callout'>
                    <h4>Designing for a CMS </h4>
                    <p>As this was my first time designing for a company, I was surprised with the learning curve, especially when designing for a web content management system (CMS). I quickly learned to grow comfortable and adapt my designs to be within hard constraints - of not only what was acceptable within brand guidelines - but also for a CMS itself. </p>
                </div>
                <div className='callout-card UTDesignCapstone-callout'>
                    <h4>Importance of speaking up</h4>
                    <p>I was the newest and the youngest member on the team, and I was initially too hesitant to bring up any concerns, thinking that if a senior member had not pointed it out, then it was not my place. Later, when I finally did mention our outstanding design problems, I was thanked and acknowledged for pointing them out!</p>
                </div>
                <div className='callout-card UTDesignCapstone-callout'>
                    <h4>A corporate workflow</h4>
                    <p>Though my position was much more relaxed that a traditional corporate role, I was still able to experience what it was like to work in an actual corporate environment: namely, juggling multiple projects at once. I was constantly in a cycle of designing, asking immediate peers for approval, scheduling and meeting with external parties to gain their approval, and iterating my ideas based on their feedback - for several projects. That entire time, I had to judge and balance the most important tasks at hand not only based on my workload, but for my coworkers' too.</p>
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

export default UTDesignCapstone