import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css'
import legaleaseBanner from './LegaleaseImages/Legalease-Banner.png';
import NavBar from '../../components/NavBar/NavBar'
import BackToTop from '../../components/BackToTop/BackToTop';
import "./Legalease.css";

const Legalease = () => {
  return (
    <div className='Legalease'>
        <NavBar />
        <div className='Legalease-banner'id="legalease">
            <img
                src={legaleaseBanner}
                alt="Legalease Banner"
                className="banner-img"
            />
        </div>
        <Container className='Pixy-Container'>
            <div className='intro paragraph-div'>
                <h1 className='Case-study-h1'>Legalease</h1>
                <br></br>
                <br></br>
                <p>Legalease is the Chrome extension that lets you enter in a legal term and uses web scraping to return its definition from the United States Courts' Glossary of Legal Terms. Combat any misunderstandings or misinformation with this handy extension!</p>
                <p>As the fullstack developer, I designed the wireframes, coded the user interface, and developed and integrated a REST API with HTTP requests.</p>
                <br></br>
                <Row>
                    <Col md={4}>
                        <strong>Team</strong>
                        <p>Individual</p>
                    </Col>
                    <Col md={4}>
                        <strong>Role</strong>
                        <p>Fullstack Developer</p>
                    </Col>
                    <Col md={4}>
                        <strong>Time</strong>
                        <p>January 2024</p>
                    </Col>
                </Row>
            </div>
            <strong className='label Legalease-label'>Functionality</strong>
            <div className='paragraph-div'>
                <br></br>
                <h3><i>Navigate legal terms with ease!</i></h3>
                <p>Legalease is a Chrome extension that lets you navigate legal jargon with ease! Enter in any legal term from your readings, and Legalease uses web scraping to deliver its definition from the United States Courts' Glossary of Legal Terms. </p>
                <Row>
                    <Col className="d-flex justify-content-center">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/m6btaItzDTQ?si=3BvYsNcC_h2QkAXa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </Col>
                </Row>
                <br></br>
                <p><a href='https://github.com/susanzh4ng/legalease' target="_blank" rel="noopener noreferrer">Click here to view Legalease's complete code 🡭</a></p>
                <br></br>
                <br></br>
             </div>
            <strong className='label Legalease-label'>Tech stack</strong>
            <div className='paragraph-div'>
                <br></br>
                <h3><i>The building of Legalease</i></h3>
                <br></br>
                <p>In order to accomplish this, I used React.JS in order to create the user interface. I connected the frontend with our backend through API calls written in Node.js. In order to web scrape from <a href='https://www.uscourts.gov/glossary' target="_blank" rel="noopener noreferrer">US Courts' Glossary of Legal Terms</a>, I used the Cheerio package. Lastly, I implemented Webpack for hot reload and ease of development.</p>
                <br></br>
                <br></br>
            </div>
            <strong className='label Legalease-label'>Challenges</strong>
            <div className='paragraph-div'>
            <br></br>
                <h3><i>… and the roadblocks I ran into</i></h3>
                <br></br>
                <p>Because the webscrapping was set up so that the HTTP post request would send the user’s term as a string that was concatenated to the end of a US Courts' Glossary of Legal Terms's url, the chrome extension was unusable after one term was defined - since any additional terms were further concatenated to the url. To remedy this, after each subsequent post request, I reset the url to a base url so that it could be sustained.</p>
                <p>Likewise, a similar issue occurred with legal terms that consisted of multiple words, since the US Courts' Glossary of Legal Terms’s url would not have included spaces. To resolve this, I used JavaScript to find and convert each “ ” to a “-”, following the url standards.</p>
                <br></br>
                <br></br>
            </div>
            <strong className='label Legalease-label'>Future Plans</strong>
            <div className='paragraph-div'>
            <br></br>
                <h3><i>What's next for Legalease</i></h3>
                <br></br>
                <p>The next step is implementing a Saved Terms tab so that the user can go back and review legal terms and view Legalease as a learning experience. Likewise, I also wish to set up user authorization and authentication so that the terms would be saved to a database and can then be revisited.</p>
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

export default Legalease