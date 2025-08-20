import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css'
import writerightBanner from './WriteRightImages/WriteRight-Banner.png';
import NavBar from '../../components/NavBar/NavBar'
import BackToTop from '../../components/BackToTop/BackToTop';
import "./WriteRight.css";

const WriteRight = () => {
  return (
    <div className='WriteRight'>
        <NavBar />
        <div className='WriteRight-banner' id="writeright">
            <img
                src={writerightBanner}
                alt="WriteRight Banner"
                className="banner-img"
            />
        </div>
        <Container className='Pixy-Container'>
            <div className='intro paragraph-div'>
                <h1 className='Case-study-h1'>WriteRight</h1>
                <br></br>
                <p>WriteRight is a one-stop shop for creative writers at any stage of the writing process. Through the web app, creative writers get access to interactive planning pages, a grammar checker, and stylistic writing tips so they can write beautiful stories that they are proud of!</p>
                <p>As the frontend developer, I designed the wireframes, took the lead on CSS, and coded the user interface in React.</p>
                <br></br>
                <Row className='rowfill'>
                    <Col md={4}>
                        <strong>Team</strong>
                        <p>3 Web Developers, 1 Project Manager</p>
                    </Col>
                    <Col md={4}>
                        <strong>Role</strong>
                        <p>Frontend Developer</p>
                    </Col>
                    <Col md={4}>
                        <strong>Time</strong>
                        <p>Fall 2022</p>
                    </Col>
                </Row>
            </div>
            <strong className='label WriteRight-label'>Functionality</strong>
            <div className='paragraph-div'>
                <br></br>
                <h3><i>What's right about WriteRight</i></h3>
                <p>WriteRight is the one-stop shop for all of your creative writing needs. After you create an account and sign in, you are greeted with your most recent projects. Just getting started? No worries! Easily get started with your new story by selecting one of our templates: blank, plot-building, character-building, or world-building. There’s also a grammar and spelling checker, and - finally - a “Writing Tips” page that pinpoints and aims to solve common creative writing roadblocks.</p>
                <Row>
                    <Col className="d-flex justify-content-center">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/hQuJMPonQpU?si=NyEO8pc5X5f2qPbv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </Col>
                </Row>
                <br></br>
                <p><a href='https://github.com/acm-projects/WriteRight/tree/korbins-branch' target="_blank" rel="noopener noreferrer">Click here to view WriteRight’s complete code 🡭</a></p>
                <br></br>
                <br></br>
             </div>
            <strong className='label WriteRight-label'>Tech stack</strong>
            <div className='paragraph-div'>
                <br></br>
                <h3><i>The building of WriteRight</i></h3>
                <br></br>
                <p>In order to accomplish this, we used React.JS in order to create the user interface. We were able to connect the frontend with our database through API calls written in Node.js. Likewise, we used MongoDB to store all of our user information and save user’s worksheets and projects. For the Grammar Checker tab, we used GrammarBot’s API. Lastly, we used Zustand for state management.</p>
                <br></br>
                <br></br>
            </div>
            <strong className='label WriteRight-label'>Challenges</strong>
            <div className='paragraph-div'>
            <br></br>
                <h3><i>… and the roadblocks we ran into</i></h3>
                <br></br>
                <p>Because the user interface was initially developed by me and our fullstack developer independently, we ran into consistency issues in both our design - CSS classes - and object setup - JavaScript API calls. Thankfully, we were able to remedy that through reconnaissance; we decided that I was to take the lead on the design and the fullstack developer would take the lead on object setup, which was also made easier through increasing familiarity with Git for version control. </p>
                <p>Additionally, our fullstack developer and backend developer had difficulty integrating the backend and getting the API calls to return the accurate corresponding information. To resolve this, our fullstack developer had to implement Zustand for state management. </p>
                <br></br>
                <br></br>
            </div>
            <strong className='label WriteRight-label'>Future Plans</strong>
            <div className='paragraph-div'>
            <br></br>
                <h3><i>What's next for WriteRight</i></h3>
                <br></br>
                <p>The next step is implementing a Community feature: sharing and interactings with writing. We also want to expand our Sheet template variety to better aid creative writers of all genres – not just prose. Lastly, we want to incorporate import and export options, such as from Google Drive, Box, and from your device.</p>
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

export default WriteRight