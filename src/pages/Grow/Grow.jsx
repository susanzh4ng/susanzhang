import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css'
import designPersona1 from './GrowImages/ATCM3337-A5-PrimaryPersona.png'
import designPersona2 from './GrowImages/ATCM3337-A5-SecondaryPersonaA.png'
import designPersona3 from './GrowImages/ATCM3337-A5-SecondaryPersonaB.png'
import journeyMap1 from './GrowImages/UserJourney1.png'
import journeyMap2 from './GrowImages/UserJourney2.png'
import lowfisketch from './GrowImages/lofisketch.jpg'
import lowfi from './GrowImages/lofi.png'
import linkedin from './GrowImages/LinkedIn.png'
import glassdoor from './GrowImages/Glassdoor.png'
import handshake from './GrowImages/Handshake.png'
import loremipsum from './GrowImages/loremipsum.png'
import proofofconcept from './GrowImages/proofofconcept.png'
import reviseHome from './GrowImages/HomeScreenIteration.png'
import reviseCategory from './GrowImages/CategoryIteration.png'
import reviseStarred from './GrowImages/StarredIteration.png'
import infoarch from './GrowImages/InformationArchitecture.png'
import onboard from './GrowImages/OnboardingQuiz.png'
import home from './GrowImages/Home.png'
import search from './GrowImages/Search.png'
import events from './GrowImages/Events.png'
import vrar from './GrowImages/AR & VR.png'
import skills from './GrowImages/Skills.png'
import starred from './GrowImages/Starred.png'

import designSystem from './GrowImages/DesignSystem.png'
import growBanner from './GrowImages/Grow-Banner.png';
import NavBar from '../../components/NavBar/NavBar'
import BackToTop from '../../components/BackToTop/BackToTop';
import "./Grow.css";

const Grow = () => {
  return (
    <div className='Grow'>
        <NavBar />
        <div className='Grow-Banner' id='grow'>
            <img
                src={growBanner}
                alt="Grow Banner"
                className="banner-img"
                /*width="80%"
                height="auto"*/
            />
        </div>
        <Container className='Pixy-Container'>
            <div className='intro paragraph-div'>
                <h1 className='Case-study-h1'>Grow with Google</h1>
                <br></br>
                <br></br>
                <p>Company layoffs, increasing concerns over the job market, and the fluctuating value of a college degree all point to one thing: a career - especially career discovery - is scary. Tasked with a semester-long Interaction Design class project and fueled by the horror stories of being a computer science major amidst the era of tech layoffs, Grow with Google was born!</p>
                <p>Grow is a fictional Google product that allows users to discover and find resources for new career paths. Users can discover employer events, partake in AR & VR discovery activities, and earn highly-sought after credentials! Grow is an addendum to <a href='https://grow.google/' target="_blank" rel="noopener noreferrer">Google's current effort to nurture careers</a> and aims to provide equal career opportunities while taking advantage of the increasingly technological world.</p>
                <br></br>
                <Row className='rowfill'>
                    <Col md={3}>
                        <strong>Team</strong>
                        <p>Individual</p>
                    </Col>
                    <Col md={3}>
                        <strong>Role</strong>
                        <p>UX Researcher & Designer</p>
                    </Col>
                    <Col md={3}>
                        <strong>Time</strong>
                        <p>Fall 2024</p>
                    </Col>
                    <Col md={3}>
                        <strong>Link</strong>
                        <p><a href='https://www.figma.com/proto/3XlZrEToglI8bioY8Shz0j/Google-Grow?node-id=86-737&t=aAGtGdilBdHjFSc2-1' target="_blank" rel="noopener noreferrer">Grow with Google's Prototype</a></p>
                    </Col>
                </Row>
                <br></br>
            </div>
            <strong className='label Grow-label'>Establish Requirements</strong>
            <div className='paragraph-div'>
                <br></br>
                <br></br>
                <h3><i>The story behind Grow</i></h3>
                <p>I decided to tackle career discovery due to my and my peers' struggles in job-searching. In recent years, post-COVID layoff spillover and market re-correction has aggravated the job search process. An unintended consequence is job seekers pursuing new and pivoting from current career paths.</p>
                <img
                    src={loremipsum}
                    alt="Two women in a job interview"
                    className='designPersona'
                />
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h3><i>Professionally stranded</i></h3>
                <p>My target Segment of Interest is young adults who are currently enrolled in or completed an undergraduate degree program. They have little to no professional experience, especially in their preferred career. Their goal is to explore and seek out new career opportunities.</p>
                <p>From literature reviews and user interviews, I found that a major contributor to career pivoting is unawareness of better options, whether that is as a college undergraduate or a veteran in one's career; they stuck with what was familiar and supposedly safe career paths and did not pinpoint their discontent until it appeared to be too late. Another notable contributor disclosed from user interviews and netnography is the user's own lacking — whether it is of motivation or physical access to career opportunities. This lack is a more prominent concern that should be addressed as it roots itself in society's own socioeconomic inequalities.</p>
                <p>As such, the chief issues that my segment of interest faces are</p>
                <div className='callout-card Grow-callout'>
                    <h4>Unfamiliarity towards career insights</h4>
                    <p>Whether it is unfamiliarity towards physical job opportunities themselves, or application insights and preferences, the main source of regret I see from my target users is their own unawareness of the opportunities already out there.</p>
                </div>
                <div className='callout-card Grow-callout'>
                    <h4>Lacking purposeful human interaction</h4>
                    <p>Especially post-COVID-19, the job application process is more and more automated and impersonal, directly prompting my target users to prioritize genuine human interactions: company recruiters, employees willing to give referrals, and building one's network.</p>
                </div>
                <div className='callout-card Grow-callout'>
                    <h4>Diffidence in career</h4>
                    <p>Especially as a result of unfamiliarity towards career insights, many of my user interviewees expressed feeling imposter syndrome or otherwise low self-esteem towards their competency in their preferred career path. This is coupled with repeated employment opportunity rejections as a result of a flooded job market.</p>
                </div>
                <p>Thus, <strong>when career seekers are exploring opportunities, they want to do so comfortably and meaningfully, so that they can grow alongside their career journey</strong>.</p>
                <br></br>
                <br></br>
             </div>
            <strong className='label Grow-label'>New Use Scenarios</strong>
            <div className='paragraph-div'>
                <br></br>
                <h3><i>Spotlighting our users</i></h3>
                <p>Thus, this led me to create my primary and secondary design personas and subsequent future state journey map for my primary persona:</p>
               <div className="d-flex justify-content-center">
                    <img
                        src={designPersona1}
                        alt="Grow's primary design persona"
                        width="80%"
                        height="auto"
                    />
               </div>
                <br></br>
                <div className="d-flex justify-content-center">
                    <img
                    src={designPersona2}
                    alt="Grow's secondary design persona"
                    width="80%"
                    height="auto"
                    />
               </div>
                <br></br>
                <div className="d-flex justify-content-center">
                    <img
                    src={designPersona3}
                    alt="Grow's secondary design persona"
                    width="80%"
                    height="auto"
                    />
               </div>
                <br></br>
                <div className="d-flex justify-content-center">
                <img
                    src={journeyMap1}
                    alt="Part 1 of Grow's primary journey map"
                    width="90%"
                    height="auto"
                />
                </div>
                <br></br>
                <div className="d-flex justify-content-center">
                <img
                    src={journeyMap2}
                    alt="Part 2 of Grow's primary journey map"
                    width="90%"
                    height="auto"
                />
                </div>
                <br></br>
                <br></br>
            </div>
            <strong className='label Grow-label'>Market Research</strong>
            <div className='paragraph-div'>
                <br></br>
                <h3><i>What are our users already using?</i></h3>
                <Row>
                    <Col md={6} className='d-flex align-items-center justify-content-center'>
                        <section>
                            <h3><i>Main Competitor: LinkedIn</i></h3>
                            <p>LinkedIn is a social media platform that focuses on building one's professional network for career insights and opportunities.</p>
                            <ul>
                                <li><strong>Pros:</strong> industry standard, resulting in a wide variety of insights, resources, and opportunities</li>
                                <li><strong>Cons:</strong> intimidating for beginners</li>
                            </ul>
                        </section>
                    </Col>
                    <Col md={6} className='col d-flex align-items-center justify-content-center'>
                    <img
                        src={linkedin}
                        alt="LinkedIn Home Screen"
                        width="50%"
                        height="auto"
                        />
                    </Col>
                </Row>
                <br></br>
                <br></br>
                <Row>
                    <Col md={6} className='col d-flex align-items-center justify-content-center'>
                        <img
                        src={handshake}
                        alt="Handshake Events Screen"
                        width="50%"
                        height="auto"
                        />
                    </Col>
                    <Col md={6} className='d-flex align-items-center justify-content-center'>
                        <section>
                        <h3><i>Handshake</i></h3>
                            <p>Handshake is a student-specific job platform that presents personalized career content, jobs, opportunities, and events.</p>
                            <ul>
                                <li><strong>Pros:</strong> academic standard, resulting in a wide variety of personalized events and opportunities, in addition to ability to message school-specific recruiters and university alumni</li>
                                <li><strong>Cons:</strong> limited reach; only university students have full access to features, and university alumni have limited access</li>
                            </ul>
                        </section>
                    </Col>
                </Row> 
                <br></br>
                <br></br>
                <Row>
                    <Col md={6} className='d-flex align-items-center justify-content-center'>
                        <section>
                        <h3><i>Glassdoor</i></h3>
                            <p>Glassdoor is a job platform that allows current and former employees to anonymously provide company reviews.</p>
                            <ul>
                                <li><strong>Pros:</strong> industry standard, resulting in a wide variety of reputable insights towards an employment role</li>
                                <li><strong>Cons:</strong> company and role-specific insights; may be too narrow for beginners</li>
                            </ul>
                        </section>
                    </Col>
                    <Col md={6} className='col d-flex align-items-center justify-content-center'>
                        <img
                        src={glassdoor}
                        alt="Glassdoor Screen"
                        width="50%"
                        height="auto"
                        />
                    </Col>
                </Row>
                <br></br>
                <br></br>
            </div>
            <strong className='label Grow-label'>Design Parameters</strong>
            <div className='paragraph-div'>
                <br></br>
                <h3><i>Exploring functional activity paths</i></h3>
                <p>After several sheets of graph paper, I decided on the following information architecture and low-fidelity wireframes to best fit and prioritize the needs of my users:</p>
                <div className="d-flex justify-content-center">
                    <img
                    src={infoarch}
                    alt="Grow's information architecture"
                    width="80%"
                    height="auto"
                    />
               </div>
                <br></br>
                <br></br>
                <div className="d-flex justify-content-center">
                <img
                    src={lowfisketch}
                    alt="Grow's low-fidelity sketches"
                    width="90%"
                    height="auto"
                />
                </div>
                <br></br>
                <br></br>
            </div>
            <strong className='label Grow-label'>Design Exploration</strong>
            <div className='paragraph-div'>
                <br></br>
                <h3><i>Further app refinement …</i></h3>
                <p>Taking the low-fidelity wireframes, I then digitally rebuilt them. I iterated as I saw fit, especially when I realized my sketches would not align with Google's style guidelines.</p>
                <div className="d-flex justify-content-center">
                <img
                    src={lowfi}
                    alt="Grow's refined low-fidelity sketches"
                    width="90%"
                    height="auto"
                />
                </div>
                <br></br>
                <br></br>
            </div>
            <strong className='label Grow-label'>Proof of Concept</strong>
            <div className='paragraph-div'>
                <br></br>
                <h3><i>… And even further app refinement</i></h3>
                <p>It was at this stage of the Interaction Design Process that I determined my Visual Design System, heavily based off of the current <a href='https://grow.google/' target="_blank" rel="noopener noreferrer">grow.google website</a> and my observations from Google's Material UI Design Kit. For the logo, I created a vector watering can to symbolize how this app allows you to grow in your career.</p>
                <div className='d-flex align-items-center justify-content-center'>
                    <img
                        src={designSystem}
                        alt="Grow's Visual Design System"
                        width="80%"
                        height="auto"
                    />
                </div>
                <br></br>
                <p>From that, I began implementing Google's Material UI Design Kit and style guidelines into my wireframes.</p>
                <div className="d-flex justify-content-center">
                <img
                    src={proofofconcept}
                    alt="Grow's first iteration of high-fidelity wireframes"
                    width="80%"
                    height="auto"
                />
                </div>
                <br></br>
                <br></br>
            </div>
            <strong className='label Grow-label'>UI/UX Validation</strong>
            <div className='paragraph-div'>
                <br></br>
                <h3><i>What do others think of Grow?</i></h3>
                <p>After creating my first draft of high-fidelity wireframes and its prototype, I began testing my product. After 2 rounds of moderated usability testing followed by a group usability test, I iterated my designs, starting with the …</p>
                <div className='callout-card Grow-callout'>
                    <h4>Home Screen</h4>
                    <p>The Home Screen is the face of Grow. It greatly influenced Grow's visual design and enforced Grow's MVPs. Users could directly access their History from the Home Screen, and, likewise, users can view their Starred Items through the Header Bar. Obscure terminology was rewritten, and the redundant School Resources Card was omitted altogether.</p>
                    <div className="d-flex justify-content-center">
                    <img
                        src={reviseHome}
                        alt="Home Screen's iteration"
                        width="80%"
                    height="auto"
                    />
               </div>
               <br></br>
                </div>
                <div className='callout-card Grow-callout'>
                    <h4>Category Filter</h4>
                    <p>Filtering through items is increasingly popular, especially for a discovery app as the user would not know their item by name. As such, it was a priority to make such a functionality more intuitive. Users can also filter utilizing History and Starred tags, as suggested by both usability testers.</p>
                    <div className="d-flex justify-content-center">
                    <img
                        src={reviseCategory}
                        alt="Category Dropdown's iteration"
                        width="50%"
                    height="auto"
                    />
               </div>
               <br></br>
                </div>
                <div className='callout-card Grow-callout'>
                    <h4>Starred Screen</h4>
                    <p>I intended for the original Starred Screen to be content-driven and match the style of the Search Screen. However, I soon discovered that it appeared too convoluted and inappropriate; content-driven layout is suitable for discovery, but a more detailed view is preferred for finding important items to return to. I also incorporated search and filter functionality for straightforwardness.</p>
                    <div className="d-flex justify-content-center">
                    <img
                        src={reviseStarred}
                        alt="Starred Screen's iteration"
                        width="80%"
                        height="auto"
                    />
               </div>
               <br></br>
                </div>
                <br></br>
                <br></br>
            </div>
            <strong className='label Grow-label'>Solution & High-Fi Prototype</strong>
            <div className='paragraph-div'>
                <br></br>
                <Row>
                    <Col md={6} className='d-flex align-items-center justify-content-center'>
                        <section>
                            <h3><i>Let Grow help you grow</i></h3>
                            <p>Upon <strong>signing in</strong> for the first time, the user is then greeted with an <strong>Onboarding Quiz</strong>, where they answer questions on their skills, demographics, and career preferences - so that Grow can provide them a personalized experience.</p>
                        </section>
                    </Col>
                    <Col md={6} className='col d-flex align-items-center justify-content-center'>
                    <img
                        src={onboard}
                        alt="Onboarding quiz screen"
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
                        src={home}
                        alt="Home screen"
                        width="50%"
                        height="auto"
                        />
                    </Col>
                    <Col md={6} className='d-flex align-items-center justify-content-center'>
                        <section>
                            <h3><i>Career discovery at your fingertips</i></h3>
                            <p>Afterwards, you are greeted with your <strong>Home Screen</strong>, where you can view your <strong>Upcoming Events</strong>; view your <strong>History</strong> of past content; and <strong>discover trending content</strong> personalized for you</p>
                        </section>
                    </Col>
                </Row> 
                <br></br>
                <br></br>
                <Row>
                    <Col md={6} className='d-flex align-items-center justify-content-center'>
                        <section>
                            <h3><i>Search and explore</i></h3>
                            <p>On the <strong>Search Screen</strong>, the user is able to <strong>discover globally trending content</strong> and <strong>search for content</strong> by name. The Search Screen also allows the user another avenue to view their History and Starred content</p>
                        </section>
                    </Col>
                    <Col md={6} className='col d-flex align-items-center justify-content-center'>
                    <img
                        src={search}
                        alt="Search screens"
                        width="80%"
                        height="auto"
                        />
                    </Col>
                </Row>
                <br></br>
                <br></br>
                <Row>
                    <Col md={6} className='col d-flex align-items-center justify-content-center'>
                        <img
                        src={events}
                        alt="Events screens"
                        width="90%"
                        height="auto"
                        />
                    </Col>
                    <Col md={6} className='d-flex align-items-center justify-content-center'>
                        <section>
                            <h3><i>Event discovery and registration</i></h3>
                            <p>On the <strong>Events Screen</strong>, the user is able to <strong>search and filter for events</strong>. Once an event looks intriguing, the user can click on it for a detailed view of the event and <strong>externally register</strong> for it on the company's website.</p>
                        </section>
                    </Col>
                </Row> 
                <br></br>
                <br></br>
                <Row>
                    <Col md={6} className='d-flex align-items-center justify-content-center'>
                        <section>
                            <h3><i>Tap to transform</i></h3>
                            <p>If you are looking to explore a new location or try a new activity, check out the <strong>AR & VR Screen</strong>. Here, you can <strong>search and filter for activities</strong> and further click on a card if you want to try out Google's <strong>Immersive VR View</strong> or their <strong>View in AR</strong> functionality.</p>
                        </section>
                    </Col>
                    <Col md={6} className='col d-flex align-items-center justify-content-center'>
                    <img
                        src={vrar}
                        alt="AR & VR screens"
                        width="90%"
                        height="auto"
                        />
                    </Col>
                </Row>
                <br></br>
                <br></br>
                <Row>
                    <Col md={6} className='col d-flex align-items-center justify-content-center'>
                        <img
                        src={skills}
                        alt="Skills screens"
                        width="90%"
                        height="auto"
                        />
                    </Col>
                    <Col md={6} className='d-flex align-items-center justify-content-center'>
                        <section>
                            <h3><i>Let your skills sprout</i></h3>
                            <p>If you are looking to learn a new skill or obtain a new credential, see Grow's <strong>Skills Screen</strong>. Here, you can <strong>search and filter for skills and certifications</strong> and further click on a card when you want to <strong>enroll in a course</strong> through either the posting company's website or an online course provider.</p>
                        </section>
                    </Col>
                </Row> 
                <br></br>
                <br></br>
                <Row>
                    <Col md={6} className='d-flex align-items-center justify-content-center'>
                        <section>
                            <h3><i>Effortless access</i></h3>
                            <p>After exploring Grow, the user can navigate to the <strong>Starred Screen</strong>, where they are able to search, filter, and <strong>view their previously Starred content</strong>.</p>
                        </section>
                    </Col>
                    <Col md={6} className='col d-flex align-items-center justify-content-center'>
                    <img
                        src={starred}
                        alt="Starred screen"
                        width="50%"
                        height="auto"
                        />
                    </Col>
                </Row>
                <br></br>
                <br></br>
            </div>
            <strong className='label Grow-label'>Reflection</strong>
            <div className='paragraph-div'>
                <br></br>
                <div className='callout-card Grow-callout'>
                    <h4>Enhance, not follow</h4>
                    <p>This was my first project utilizing a professional design system: Google's Material Design. When I first started out, I spent - and wasted - a lot of time trying to conform my vision into Material Design's prebuilt components. What I should have been doing was using the components as references to enhance my own designs to fit Google's style guidelines.</p>
                </div>
                <div className='callout-card Grow-callout'>
                    <h4>20+ heads are better than 1</h4>
                    <p>In the past, I have only conducted UX validation through single-user usability tests. This project was my first chance at conducting a group usability test, where multiple users were able to bounce ideas off of eachother and provide me with multiple perspectives at once. It was an enriching experience, and I would love to conduct more for my future projects!</p>
                </div>
                <div className='callout-card Grow-callout'>
                    <h4>Research, research, research</h4>
                    <p>Grow with Google was also my first attempt at creating an addendum to a current line of products. Much research was required to ensure that the app resembled a Google product; no UI decision was made without referencing either Material Design or a Google product. Research on Google's current technology was also essential as many of my initial ideas failed because I didn't do enough reviewing; I had to omit Google Cardboard integration because it was discontinued back in 2021!</p>
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

export default Grow