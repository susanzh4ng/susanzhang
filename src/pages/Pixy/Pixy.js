import React from 'react'
//import { Button, Alert, Breadcrumb, Card, Container, Row, Col} from 'react-bootstrap'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css'
/*import filter1 from './PixyImages/SearchAndFilter1.png'
import filter2 from './PixyImages/SearchAndFilter2.png' */
import designPersona from './PixyImages/DesignPersona.png'
import empathyMap from './PixyImages/Empathy Map.png'
import journeyMap from './PixyImages/FutureStateJourneyMap.png'
import lowfi from './PixyImages/Low-Fi Wireframes.png'
import infoarch from './PixyImages/Pixy_InformationArchitecture.png'
import filter4 from './PixyImages/filter4.gif'
import interactions from './PixyImages/interactions.gif'
import add from './PixyImages/Add.gif'
import profile from './PixyImages/profile.gif'
import designSystem from './PixyImages/Design System.png'
import pixyBanner from './PixyImages/Pixy-Banner.png';
import NavBar from '../../components/NavBar/NavBar'
import BackToTop from '../../components/BackToTop/BackToTop';
import "./Pixy.css";

const Pixy = () => {
  return (
    <div className='Pixy'>
        <NavBar />
        <div className='banner'>
            <img
                src={pixyBanner}
                alt="Pixy Banner"
                className="banner-img"
                /*width="80%"
                height="auto"*/
            />
        </div>
        <Container className='Pixy-Container'>
            <div className='intro paragraph-div'>
                <h1 className='Case-study-h1'>Pixy</h1>
                <br></br>

                <br></br>
                <p>Pixy is a reference image lookup app — made for and designed by artists. The reference search process is an integral yet bothersome aspect of artists’ workflow. After discussing my frustrations with my peers – especially the concerning influx of AI-generated content – I decided to create a UX case study to alleviate and enhance utilizing references as an artist.</p>
                <br></br>
                <Row>
                    <Col md={4}>
                        <strong>Team</strong>
                        <p>Individual</p>
                    </Col>
                    <Col md={4}>
                        <strong>Role</strong>
                        <p>Researcher & Designer</p>
                    </Col>
                    <Col md={4}>
                        <strong>Time</strong>
                        <p>Summer 2024</p>
                    </Col>
                </Row>
            </div>
            <strong className='label Pixy-label'>Summary</strong>
            <div className='paragraph-div'>
                <br></br>
                <Row>
                    <Col md={6} className='d-flex align-items-center justify-content-center'>
                        <section>
                            <h3><i>The largest obstacle to the creative process</i></h3>
                            <p>The reference search process hinders artists by wasting time and impeding their workflow. Based on a combination of netnography and user interviews, reference searching is tedious and frustrating; participant P02 even described it as their largest obstacle to the creative process. The search is further exacerbated by running into non-royalty-free and AI-generated images that they see as personally and morally wrong.</p>
                            <p>Thus, <strong>when prolific artists are in need of a specific reference, they want to locate and save it efficiently and ethically, so that they can move forward to illustrating.</strong> As such, I designed a dedicated, centralized, and flexible tool to aid them.</p>   
                        </section>
                    </Col>
                    <Col md={6} className='col d-flex align-items-center justify-content-center'>
                        <img
                        src={filter4}
                        alt="Search & Filter"
                        width="50%"
                        height="auto"
                        />
                    </Col>
                </Row>
                {/* <h3><i>The largest obstacle to the creative process</i></h3>
                <p>The reference search process hinders artists by wasting time and impeding their workflow. Based on a combination of netnography and user interviews, reference searching is tedious and frustrating; participant P02 even described it as their largest obstacle to the creative process. The search is further exacerbated by running into non-royalty-free and AI-generated images that they see as personally and morally wrong.</p>
                <p>Thus, <strong>when prolific artists are in need of a specific reference, they want to locate and save it efficiently and ethically, so that they can move forward to illustrating.</strong> As such, I designed a dedicated, centralized, and flexible tool to aid them.</p>   
                <Row>
                    <Col md={6}>
                        <img
                        src={filter1}
                        alt="Search & Filter"
                        width="100%"
                        height="auto"
                        />
                        <br></br>
                        <br></br>
                    </Col>
                    <Col md={6}>
                        <img
                        src={filter2}
                        alt="Search & Filter"
                        width="100%"
                        height="auto"
                        />
                    </Col>
                </Row>*/}
                <br></br>
                <br></br>
             </div>
            <strong className='label Pixy-label'>Segment of Interest & Pain Points</strong>
            <div className='paragraph-div'>
                <br></br>
                <h3><i>Designing for artists, by an artist</i></h3>
                <p>From drawing my entire life, I am grateful for yet frustrated with photography sharing apps, especially since catering to multiple target audiences often understates artists. Therefore, <strong>I wanted Pixy to be inclusive and considerate of all artists</strong>.</p>
                <p>The app will be designed for prolific artists that struggle with finding suitable reference images in a timely manner. They are illustration students, hobby illustrators, and/or professional illustrators, and they seek out image references for their personal, academic, and/or professional work.</p>
                <p>From netnography and user interviews, I found that artists get references from stock photography websites, reference books, their own cameras, and/or live models. I also found out that artists view using references as an integral part of their creative process and frequently utilize multiple references for each artwork.</p>
                <br></br>
                <p>Additionally, I dived deeper and discovered these chief issues that my segment of interest faces …</p>
                <div className='callout-card Pixy-callout'>
                    <h4>Specificity</h4>
                    <p>Artists often draw with a specific composition in mind but without the visual library to do so. References bridge that gap, yet references are not often tagged with the specific colors, lighting, camera angle, etc. that the artist has in mind.</p>
                </div>
                <div className='callout-card Pixy-callout'>
                    <h4>Lack of diversity</h4>
                    <p>All user interviews stated that references were easier to find the more “common” the intended subject was, and vice versa, but this poses a problem for inclusivity, especially at the concept art phase and in the commercial art sphere.</p>
                </div>
                <div className='callout-card Pixy-callout'>
                    <h4>Unsuitable references</h4>
                    <p>Artists are professionals and would not want to infringe on another artist’s original work  – despite the different mediums. To circumvent this, many artists prefer from working from a pool of royalty free images to begin with. On the other hand, artists foremost want to work with authentic references, making AI-generated images an undesirable option.</p>
                </div>
                <p>… all of which leads to a lengthy search process.</p>
                <br></br>
                <br></br>
            </div>
            <strong className='label Pixy-label'>Design Persona & UX Mapping</strong>
            <div className='paragraph-div'>
                <br></br>
                <p>Thus, this led me to create my primary design persona and subsequent empathy map and future state journey map:</p>
                <img
                    src={designPersona}
                    alt="Pixy's primary design persona"
                    className='designPersona'
                />
                <br></br>
                <img
                    src={empathyMap}
                    alt="Pixy's primary empathy map"
                />
                <br></br>
                <img
                    src={journeyMap}
                    alt="Pixy's primary journey map"
                />
                <br></br>
                <br></br>
            </div>
            <strong className='label Pixy-label'>Solutions & Central Functionalities</strong>
            <div className='paragraph-div'>
                <br></br>
                <h3><i>Designing for artists, transparently</i></h3>
                <p>Good design is invisible. Good design also takes advantage of technology in innovative ways.</p>
                <div className='callout-card Pixy-callout'>
                    <h4>Natural language search & filter</h4>
                    <p>Utilizing natural language processing (NLP), users can type everyday language into the search bar. Additionally, for longer, more tedious searches, users have the option to filter through the results, with the filter categories made relevant through NLP; NLP filter was not part of my original design, but more on that in the Iteration phase!</p>
                    <p>User interviews and netnography heavily acknowledges how artists are often in need of specific references — references that often require heavy filtering and manual searching, which would be omitted when using natural language. Natural language search, additionally, is already a standard in stock photo web apps and user-generated content apps alike. The user can find their preferred reference in a familiar and reliable method, and this feature <strong>would address specificity and lack of diversity</strong>.</p>
                </div>
                <div className='callout-card Pixy-callout'>
                    <h4>Savable art boards</h4>
                    <p>Users are able to select References and save it to Art Boards of their choosing. There, the References will be grouped together, and the user can revisit and edit the Board.</p>
                    <p>User interviews, netnography, and competitive analysis have heavily stressed how artists use multiple references for a singular, original artwork. The latter two, in particular, suggest using digital art boards, for which the user can easily view through the references they have gathered. Our feature could enhance on a standard art board by allowing the user to focus in on one particular reference via zooming in/out and notes.</p>
                </div>
                <div className='callout-card Pixy-callout'>
                    <h4>Open source content</h4>
                    <p>References uploaded to Pixy should be free and available for users under Creative Commons Zero (CC0) license.</p>
                    <p>User interviews and netnography states that a point of contention around using references is how it can be viewed as “stealing” another artist’s work. In order to circumvent this, all initial content uploaded to Pixy and trained by Pixy’s machine learning algorithm should be royalty free, open-source, and should be screened by an AI-generation detector. Likewise, any additional user-generated content should be warranted under the Creative Commons Zero (CC0) license. These guidelines would further enforce artists as the target demographic for Pixy, as opposed to photographers or marketing associates. This feature <strong>would address unsuitable references</strong>.</p>
                </div>
                <br></br>
                <p><a href='https://drive.google.com/file/d/1ahftEz_ZLescLVelkawXRwcHK0TFq7E3/view?usp=sharing' target="_blank" rel="noopener noreferrer">Click here to view Pixy's generative research report 🡭</a></p>
                <br></br>
                <br></br>
            </div>
            <strong className='label Pixy-label'>Information Hierarchy & Low-Fi Wireframes</strong>
            <div className='paragraph-div'>
                <br></br>
                <h3><i>Introducing Pixy</i></h3>
                <p>Using what I learned from user research, I constructed an architecture that prioritizes finding, saving, and revisiting references.</p>
                <img
                    src={infoarch}
                    alt="Pixy's information architecture"
                    className='designPersona'
                />
                <br></br>
                <img
                    src={lowfi}
                    alt="Pixy's low fidelity wireframes"
                />
                <br></br>
                <br></br>
            </div>
            <strong className='label Pixy-label'>User Testing & Iteration</strong>
            <div className='paragraph-div'>
                <br></br>
                <h3><i>How could Pixy be improved?</i></h3>
                <p>After conducting user testing with a fellow freelance illustrator, the largest takeaways were…</p>
                <div className='callout-card Pixy-callout'>
                    <p>Needed more <b>search flexibility</b>, that being the ability to search for creators’ pages and boards</p>
                </div>
                <div className='callout-card Pixy-callout'>
                    <p>Requested a <b>mass upload feature</b> to make board uploads easier</p>
                </div>
                <div className='callout-card Pixy-callout'>
                    <p>“The search bar is kind of a <b>hassle for longer descriptions</b>.”</p>
                    <p>This feedback had the least direct solution. As such, I conducted more user research and came across a blog post that encourages <b>filter form fields</b> for lengthy queries – perfect for my design challenge!</p>
                </div>
                <br></br>
                <br></br>
            </div>
            <strong className='label Pixy-label'>Revision & High-Fi Prototype</strong>
            <div className='paragraph-div'>
                <br></br>
                <Row>
                    <Col md={6} className='d-flex align-items-center justify-content-center'>
                        <section>
                            <h3><i>Search, filter, and get inspired</i></h3>
                            <p>From the Home Screen’s search bar, you can use text or filters – both methods utilizing natural language processing – to find exactly what you are searching for! You can also switch between discovering new references, creators, and inspirations: reference images and boards that are adjacent to your search criteria!</p>
                        </section>
                    </Col>
                    <Col md={6} className='col d-flex align-items-center justify-content-center'>
                        <img
                        src={filter4}
                        alt="Search & Filter"
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
                        src={interactions}
                        alt="Interactions"
                        width="50%"
                        height="auto"
                        />
                    </Col>
                    <Col md={6} className='d-flex align-items-center justify-content-center'>
                        <section>
                            <h3><i>Interact – all in one place</i></h3>
                            <p>Once you open a Reference, you can find similar References or further interact: like, save, share, and open tags. There you can also add tags of your own or report existing tags to help build Pixy’s algorithm! Next up, save your Reference to a board!</p>
                        </section>
                    </Col>
                </Row> 
                <br></br>
                <br></br>
                <Row>
                    <Col md={6} className='d-flex align-items-center justify-content-center'>
                        <section>
                            <h3><i>Upload with ease</i></h3>
                            <p>Whether you want to showcase a new Reference or an entire Board, Pixy lets you post with flexibility!</p>
                        </section>
                    </Col>
                    <Col md={6} className='col d-flex align-items-center justify-content-center'>
                        <img
                        src={add}
                        alt="Add reference or board"
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
                        src={profile}
                        alt="Profile screens"
                        width="50%"
                        height="auto"
                        />
                    </Col>
                    <Col md={6} className='d-flex align-items-center justify-content-center'>
                        <section>
                            <h3><i>Streamlined for artists</i></h3>
                            <p>Easily navigate between your References and Boards! Our enhanced Board allows users to single out References via Reference Mode and custom captions.</p>
                        </section>
                    </Col>
                </Row> 
                <br></br>
                <br></br>
                <p><a href='https://www.figma.com/proto/pqfla9GZLhOFJ0Ys9Tkwai/Pixy?node-id=303-3439&t=GsQcDIUa6DXQFHIL-1&scaling=scale-down&content-scaling=fixed&page-id=303%3A3438&starting-point-node-id=303%3A3439' target="_blank" rel="noopener noreferrer">Click here to view Pixy's complete prototype 🡭</a></p>
                <br></br>
                <br></br>
            </div>
            <strong className='label Pixy-label'>Design System</strong>
            <div className='paragraph-div'>
                <br></br>
                <h3><i>The design choices behind Pixy</i></h3>
                <p>I knew I wanted Pixy to be warm and inviting, and I veered towards orange shades for its strong associativty to creativity. From there, Pixy turned into …</p>
                <img
                    src={designSystem}
                    alt="Pixy's design system"
                    className='designPersona'
                />
                <br></br>
                <br></br>
            </div>
            <strong className='label Pixy-label'>Reflection</strong>
            <div className='paragraph-div'>
                <br></br>
                <div className='callout-card Pixy-callout'>
                    <h4>Your needs are not the user's needs</h4>
                    <p>, even when you are included in the segment of interest. There were a few features – filtering results and searching for adjacent results – that I purposefully omitted from my initial conceptualization because I naively thought them to be irrelevant to Pixy’s goal. It was only through user testing and further user research that I realized how – not only helpful bit also – essential those features really were.</p>
                </div>
                <div className='callout-card Pixy-callout'>
                    <h4>Design for change</h4>
                    <p>Features will always be added or even taken away; iteration is a natural part of the design process, even after launch! It is important to design with flexible components in mind so that the feature will fit to the preexisting app.</p>
                </div>
                <div className='callout-card Pixy-callout'>
                    <h4>Begin with limitations</h4>
                    <p>Creating an entire concept from scratch is overwhelming. Moreover, it is impossible for an app to truly be all-encompassing. To begin, one must define a strict segment of interest and pain points to address before they can even start conceptualizing an app!</p>
                </div>
            </div>
            <BackToTop />

            {/*<strong className='label Pixy-label'>Lorem Ipsum</strong>
            <div className='paragraph-div'>
                <br></br>
                <h3><i>Lorem ipsum.</i></h3>
                <p>Lorem ipsum.</p>
                <br></br>
                <br></br>
            </div>*/}
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

export default Pixy