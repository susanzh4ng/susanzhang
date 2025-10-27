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
import dinghaiancientcity from './ZhoushanImages/IMG_8058-EDIT.jpg';
import pastlogos from './ZhoushanImages/Group 55.png';
import zhoushanbanner from './ZhoushanImages/07.png';
import zs7 from './ZhoushanImages/NORMAL00711_Original.JPG';
import zs8 from './ZhoushanImages/NORMAL00728_Original.JPG';
import zs9 from './ZhoushanImages/img02.png';
import zs10 from './ZhoushanImages/guanyinpusa.jpg'
import zs11 from './ZhoushanImages/image04.png';
import circles from './ZhoushanImages/Group 56.png';
import colors from './ZhoushanImages/Group 57.png';
import sixteen from './ZhoushanImages/Group 58.png';
import eighteen from './ZhoushanImages/Group 59.png';
import seventeen from './ZhoushanImages/17.png';
import twenty from './ZhoushanImages/20.png';
import twentyone from './ZhoushanImages/21.png';
import twentytwo from './ZhoushanImages/22.png';
import twentythree from './ZhoushanImages/23.png';
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
            <strong className='label Zhoushan-label'>Design Inspirations</strong>
            <div className='paragraph-div'>
            <br></br>
                <h3><i>Past Chinese Olympic Logos</i></h3>
                <p>During the “Empathize” phase of my design process, I first looked to the past Olympics Games held in China and in doing so, I found a quote from Min Wang, the design director for the Beijing 2008 Olympic Games, stating to “find design expression in Eastern aesthetics and sensibility”, which I took as continuing the trend of using a Chinese logogram for the Olympics logo design.</p>
                <div className="callout-card Zhoushan-callout">
                    <br></br>
                    <strong className='dark-red'>“In less than ten years, China has quickly added more than a thousand design schools and programs that enroll hundred of thousands of students at the university and college level. But how to teach design in China, how to learn but not to copy the West, and how to find design expression in an Eastern aesthetic sense and sensibility, these have become big questions.”</strong>
                    <br></br>
                    <br></br>
                    <p className='dark-red'>—Min Wang, design director for the Beijing 2008 Olympic Games</p>
                    <br></br>
                </div>
                <br></br>
                <p>When I personally try to recall memories of Zhoushan, I always think of Ancient Dinghai City pictured in the night time. Though its streets and alleyways are centuries-old, it has been rebuilt, reinforced, and modernized with lights to form a cultural and community landmark. </p>
                <img
                    src={dinghaiancientcity}
                    alt="Dinghai Ancient City, Dinghai District, Zhoushan"
                    className="designPersona"
                />
                <br></br>
                <br></br>
                <p>As such, I chose the Chinese character for “light” and “bright” 亮 to base the Zhoushan Olympics brand off of.</p>
                <img
                    src={pastlogos}
                    alt="Past Chinese Olympic logos"
                    className="designPersona"
                />
                <br></br>
                <br></br>
                <p>Furthermore, 亮 is used in the term 闪亮 (shǎn liàng) which means “shine” and contributes to the Olympic pride of winning a medal, which led me to my Olympic motto: “Shine bright together” or “一起闪亮”, demonstrating unity and comadere with the shared goal of becoming better together.</p>
                <img
                    src={zhoushanbanner}
                    alt="一起闪亮"
                    className="designPersona"
                />
                <br></br>
                <br></br>
                <h3><i>Window Lattices</i></h3>
                <p>Pivoting back to my ideation phase: with the logogram chosen, I began sketching ideas, settling on one design in particular that was inspired by window lattices. In Zhoushan, I noticed these window lattice designs in both historical and modern contexts. Chinese window lattices have a rich history, with its first documented style preceding the Han dynasty. In the thousands of years since, traditional window lattices have been added to contemporary buildings as a cultural symbol, which – ironically enough – is not only for aesthetics but also regulates natural light.</p>
                <div className="callout-card Zhoushan-callout">
                    <br></br>
                    <strong className='dark-red'>“Geometric patterns can be applied to window lattice design for architectural spaces, not only as an ornamental feature but also as an environmental control system that modulates daylighting.”</strong>
                    <br></br>
                    <br></br>
                    <p className='dark-red'>—Zhang, Xufeng, et al. "Analyze the Interaction Relationship between Traditional Chinese Architectural Window Lattice Patterns and Daylighting Performance with Different Densities."</p>
                </div>
                <div className="callout-card Zhoushan-callout">
                    <br></br>
                    <strong className='dark-red'>“Borrowing a window lattice [... incorporates] the infinite natural world outside into a limited space.”</strong>
                    <br></br>
                    <br></br>
                    <p className='dark-red'>—Anjing, Zhuo, Veerawat Sirivesmas, and Ruenglada Punyalikit. "The Exploring of Chinese Window Lattice Patterns in Ceramic Decoration: A Case Study in Suzhou Gardens." Journal of Roi Kaensarn Academi 9.7 (2024): 768-784.</p>
                </div>
                <Row>
                    <Col md={4}>
                        <img
                        src={zs7}
                        alt="Window lattice in Ancient Dinghai, Zhoushan, China"
                        width="100%"
                        height="auto"
                        />
                    </Col>
                    <Col md={4}>
                        <img
                        src={zs9}
                        alt="Window lattice in Zhoushan, China"
                        width="100%"
                        height="auto"
                        />
                    </Col>
                    <Col md={4}>
                        <img
                        src={zs8}
                        alt="Garden window lattic in Hangzhou, China"
                        width="100%"
                        height="auto"
                        />
                    </Col>
                </Row>
                <br></br>
                <br></br>
                <h3><i>Guanyin Pusa & Putuo Mountain</i></h3>
                <p>Zhoushan is most prominently known for Putuo Mountain which is the 道場 (dàochǎng), or “seat of awakening”, for Guanyin Pusa. Guanyin Pusa, the goddess of mercy in Chinese mythology and bodhisattva in Chinese Buddhism, has greatly influenced Zhoushan's social and cultural development, namely her depictions in mythology, Chinese folk religion, Chinese Buddhism, Confucianism, Taoism, and popular culture.</p>
                <Row className='rowfill'>
                    <Col md={6}>
                        <img
                        src={zs10}
                        alt="Guanyin Pusa"
                        width="100%"
                        height="auto"
                        />
                    </Col>
                    <Col md={6}>
                        <img
                        src={zs11}
                        alt="佛顶顶佛"
                        width="100%"
                        height="auto"
                        />
                    </Col>
                </Row>
                <p>To commemorate this, I decided to create a 5-circle overlay pattern to incorporate into my lattice design due to its range, which includes</p>
                <ul>
                    <li>A 4-point star, which reinforces our “shine bright” brand</li>
                    <li>Water waves, to symbolize how the sea has shaped Zhoushan's culture</li>
                    <li>A lotus flower, the base which Guanyin Pusa is often depicted standing on</li>
                </ul>
                <img
                    src={circles}
                    alt="ideation"
                    className="designPersona"
                />
                <br></br>
                <br></br>
            </div>
            <strong className='label Zhoushan-label'>Design Ideation</strong>
            <div className='paragraph-div'>
            <br></br>
            <h3><i>Color Palette</i></h3>
            <p>For general designs – such as event tickets and posters – I used various shades and hues from the provided Olympics’ Extended Color Palette. For the Olympic mark specifically, I chose red – representing good fortune and joy –, blue – representing the sea, health, prosperity, and harmony –, and yellow – representing good luck.</p>
            <img
                src={colors}
                alt="Olympic Mark Color Palette"
                className="designPersona"
            />
            <br></br>

            <h3><i>Typography</i></h3>
            <p>As for typography, I chose “RocknRoll One” for all Heading text for its modern and dynamic feel, and I chose “Noto Sans SC” for all paragraph text for its global usage.</p>
            <img
                src={sixteen}
                alt="RocknRoll One, Noto Sans SC"
                className="designPersona"
            />
            <br></br>
            <br></br>
            </div>

            <strong className='label Zhoushan-label'>Design</strong>
            <div className='paragraph-div'>
                <br></br>
                <h3><i>Olympic Mark</i></h3>
                <img
                    src={eighteen}
                    alt="Zhoushan 2024 Olympic Mark"
                    className="designPersona"
                />
                <p>The Olympic mark represents unity in working together to achieve greatness, and the frame represents the Games uniting the athletes. Just as the lattice tiles are mediocre when they standalone, so are countries and their people. It is only when they and their perspectives join together that we can reach excellence. </p>
                <div className="d-flex justify-content-center">
                    <img
                        src={seventeen}
                        alt="Zhoushan 2024 Olympic Mark"
                        width="90%"
                        height="auto"
                    />
                </div>
            </div>
            <div className='paragraph-div'>
                <br></br>
                <h3><i>Posters</i></h3>
                <div className="d-flex justify-content-center">
                    <img
                        src={twenty}
                        alt="Posters featuring the Zhoushan 2024 Olympic Mark"
                        width="90%"
                        height="auto"
                    />
                </div>
                <br></br>
                <br></br>
            </div>
            <div className='paragraph-div'>
                <br></br>
                <h3><i>Name Tags</i></h3>
                <div className="d-flex justify-content-center">
                    <img
                        src={twentyone}
                        alt="Name tags featuring the Zhoushan 2024 Olympic Mark"
                        width="90%"
                        height="auto"
                    />
                </div>
                <br></br>
                <br></br>
            </div>
            <div className='paragraph-div'>
                <br></br>
                <h3><i>Tickets</i></h3>
                <div className="d-flex justify-content-center">
                    <img
                        src={twentytwo}
                        alt="Opening Ceremony Ticket featuring the Zhoushan 2024 Olympic Mark"
                        width="90%"
                        height="auto"
                    />
                </div>
                <div className="d-flex justify-content-center">
                    <br></br>
                    <br></br>
                    <img
                        src={twentythree}
                        alt="Closing Ceremony Ticket featuring the Zhoushan 2024 Olympic Mark"
                        width="90%"
                        height="auto"
                    />
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

export default Zhoushan