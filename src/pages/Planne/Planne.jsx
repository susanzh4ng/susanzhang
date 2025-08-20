import React from 'react'
//import { Button, Alert, Breadcrumb, Card, Container, Row, Col} from 'react-bootstrap'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css'
import designPersona from './PlanneImages/DesignPersona.png'
import empathyMap from './PlanneImages/EmpathyMap.png'
import journeyMap1 from './PlanneImages/UserJourney1.png'
import journeyMap2 from './PlanneImages/UserJourney2.png'
import lowfi from './PlanneImages/Low-Fi Wireframes.png'
import infoarch from './PlanneImages/Information Architecture.png'
import dailyViewIPad from './PlanneImages/DailyView-iPad.png'
import sessions from './PlanneImages/Sessions.gif'
import views from './PlanneImages/Views.gif'
import generate from './PlanneImages/Generative.gif'
import designSystem from './PlanneImages/Design System.png'
import planneBanner from './PlanneImages/Planne-Banner.png';
import NavBar from '../../components/NavBar/NavBar'
import BackToTop from '../../components/BackToTop/BackToTop';
import "./Planne.css";

const Planne = () => {
  return (
    <div className='Planne'>
        <NavBar />
        <div className='Planne-Banner'id="planne">
            <img
                src={planneBanner}
                alt="Planne Banner"
                className="banner-img"
                /*width="80%"
                height="auto"*/
            />
        </div>
        <Container className='Pixy-Container'>
            <div className='intro paragraph-div'>
                <h1 className='Case-study-h1'>Planne</h1>
                <br></br>
                <br></br>
                <p>Students - especially in the higher education sphere - are increasingly struggling against procrastination impeding on both their social and academic lives. Tasked with designing an application that helps college students combat just that, my team and I envisioned Planne: the mobile and web application that allows you to plan the steps towards success, one day at a time!</p>
                <p>As the Overall Designer, I directed the completion of Planne, conducted user research, and created and implemented the visual design system.</p>
                <br></br>
                <Row className='rowfill'>
                    <Col md={4}>
                        <strong>Team</strong>
                        <p>4 UX Designers, 1 Marketing Associate</p>
                    </Col>
                    <Col md={4}>
                        <strong>Role</strong>
                        <p>Overall Designer</p>
                    </Col>
                    <Col md={4}>
                        <strong>Time</strong>
                        <p>Spring - Summer 2024</p>
                    </Col>
                </Row>
                <br></br>
                <img
                    src={dailyViewIPad}
                    alt="Planne's web view for Categoric View"
                    className='designPersona'
                />
            </div>
            <strong className='label Planne-label'>Statement of the Problem</strong>
            <div className='paragraph-div'>
                <br></br>
                <br></br>
                <h3><i>The universal problem</i></h3>
                <p>Procrastination affects college students by creating stressful environments and situations. Based on a combination of user interviews, secondary research, netnography, and a focus group interview, I found out that procrastination led to greater feelings of burden, overwhelment, and dread; participant P02 described the sensation as tasks “piling up, like a snowball effect.” Participant P03 said that their procrastination got so dire that it contributed to them failing two classes during the past semester. </p>
                <p>Thus, <strong>when students have pressing tasks, they want to handle it efficiently, so that they can altogether avoid procrastination and complete tasks in a stress-free, timely manner</strong>. Though students are aware of the effectiveness of planning, they lack motivation to follow through with their plans; our application aims to streamline the process and engage users to stay motivated.</p>
                <br></br>
                <br></br>
             </div>
            <strong className='label Planne-label'>User research & Insights</strong>
            <div className='paragraph-div'>
                <br></br>
                <h3><i>A vicious cycle</i></h3>
                <p>Despite the bleakness of procrastination, prior research has confirmed that procrastination is a universal experience among college students, with some students even admitting that procrastination is a vital aspect of their work process. Many of my interview participants had voiced that they only found motivation to do a task if there was a close deadline; they viewed procrastination as, otherwise, a logical decision. Most notably, participants have also expressed that their issues with procrastination have greatly lessened upon planning out their tasks.</p>
                <p>As such, I identified these chief issues that college students face …</p>
                <div className='callout-card Planne-callout'>
                    <h4>Lack of time</h4>
                    <p>Due to students’ busy schedules, it is normalized to push assignments - especially larger, more strenuous ones - off till the last minute. This is even done subconsciously as they are prioritizing and working on the “easier” tasks first. Additionally, students sometimes feel as though they have to push off an assignment because they feel as though they physically cannot do it yet.</p>
                </div>
                <div className='callout-card Planne-callout'>
                    <h4>Attention deficit</h4>
                    <p>Students view assignments themselves as undesirable. Participant P03 verbalized this with “there are other more fun, more interesting things to do instead” and how distractions - especially social media and cell phones - are increasingly common. This is further exacerbated by how, for students that live on campus, college is a walkable community where friends and activities are easily accessible.</p>
                </div>
                <div className='callout-card Planne-callout'>
                    <h4>Deterrence of planning</h4>
                    <p>Despite how planning is a known deterrent of procrastination, students view planning itself as a lot of work. Three of the user interviewees even expressed that they feel as though that there was so much to do that they felt that even the act of planning was overwhelming. On the other hand, Participant P01 stated that they unconsciously procrastinate by not writing down their tasks to begin with - making it so that they cannot even start the planning process.</p>
                </div>
                <p>… all of which leads to chronic procrastination.</p>
                <br></br>
                <br></br>
            </div>
            <strong className='label Planne-label'>Design Persona & UX Mapping</strong>
            <div className='paragraph-div'>
                <br></br>
                <p>Thus, this led me to create my primary design persona and subsequent empathy map and future state journey map:</p>
                <img
                    src={designPersona}
                    alt="Planne's primary design persona"
                    className='designPersona'
                />
                <br></br>
                <img
                    src={empathyMap}
                    alt="Planne's primary empathy map"
                />
                <br></br>
                <img
                    src={journeyMap1}
                    alt="Part 1 of Planne's primary journey map"
                />
                <br></br>
                <img
                    src={journeyMap2}
                    alt="Part 2 of Planne's primary journey map"
                />
                <br></br>
                <p><a href='https://drive.google.com/file/d/1-fj-X8hCWfccB9Ig_ruPjPHe0aGd6p-L/view?usp=sharing' target="_blank" rel="noopener noreferrer">Click here to view Planne's full generative research report 🡭</a></p>
                <br></br>
                <br></br>
            </div>
            <strong className='label Planne-label'>Solution Ideation</strong>
            <div className='paragraph-div'>
                <br></br>
                <h3><i>Breaking the cycle</i></h3>
                <p>After each team member shared their generative research reports, we compiled a list of the top 7 application features that addresses the aforementioned pain points. We listed each of the features alongside a description in a user survey. Based on the feature’s popularity from the 28 user survey responses and reviewing our secondary research, my team and I decided on these following features:</p>
                <div className='callout-card Planne-callout'>
                    <h4>Customizable views</h4>
                    <p>Users are able to create both long-term and short-term to-do lists in addition to creating lists for personal, academic, social, extracurricular, etc. commitments.</p>      
                    <p>Popular task management applications use calendar views so that users receive a big picture overview. Additionally, all user interviewees stated that a to-do list can be more helpful when keeping track of tasks. This goes hand-in-hand with planning as a procrastination deterrent. By allowing users to plan goals for various time frames and to organize their goals between categories, this feature <strong>would address lack of time and deterrence of planning</strong>.</p>
                </div>
                <div className='callout-card Planne-callout'>
                    <h4>Generative task plan</h4>
                    <p>Users are able to input all of their commitments, deadlines, and expected time dedicated, and the app uses artificial intelligence to create a plan revolving around all the tasks.</p>
                    <p><a href='https://doi.org/10.1016/j.rlp.2017.03.001' target="_blank" rel="noopener noreferrer">Prior research</a> heavily acknowledges preparedness and goal setting for reducing procrastination and impulsivity. Several self-wellness apps already incorporate to-do list features, but by implementing a generative task plan, the app is more user-centric by placing the plan creation - which, referencing participants P01 and P02, can be burdensome in itself - on the app. The user can then plan their days objectively and efficiently, and this feature <strong>would address lack of time and deterrence of planning</strong>.</p>
                </div>
                <div className='callout-card Planne-callout'>
                    <h4>Pomodoro timer</h4>
                    <p>Users are able to manage their work by alternating between work sessions followed by a short break until the task is complete.</p>
                    <p>This feature was specifically requested by a handful of users as late as the user survey stage. The Pomodoro method is a popular time management method that has been proven to prevent mental fatigue and, in turn, allow for sustained concentration. Likewise, it would alleviate students' stress by physically breaking the work into small and manageable steps. This feature <strong>would address attention deficit</strong>.</p>
                </div>
                <br></br>
                <br></br>
            </div>
            <strong className='label Planne-label'>Information Hierarchy & Low-Fi Wireframes</strong>
            <div className='paragraph-div'>
                <br></br>
                <h3><i>Introducing Planne</i></h3>
                <p>Using what I learned from user research, I constructed an architecture where the user starts at a layout that they can see and adjust their goals for a time frame. From that view, the application expands to additional features.</p>
                <img
                    src={infoarch}
                    alt="Planne's information architecture"
                    className='designPersona'
                />
                <br></br>
                <img
                    src={lowfi}
                    alt="Planne's low fidelity wireframes"
                />
                <br></br>
                <br></br>
            </div>
            <strong className='label Planne-label'>Usability Testing</strong>
            <div className='paragraph-div'>
                <br></br>
                <h3><i>How could Planne be improved?</i></h3>
                <p>After conducting moderated user testing with a fellow classmate, the largest takeaways were…</p>
                <div className='callout-card Planne-callout'>
                    <p>Needed more <b>intuitiveness</b>, which we incorporated through labels on buttons, a current location indicator, and a local search bar for finding items on each view</p>
                </div>
                <div className='callout-card Planne-callout'>
                    <p>“Pomodoro doesn't work for me <b>since I have ADHD</b>.”</p>
                    <p>This was a notable remark that caused our team to conduct more discovery research. We have since incorporated a Default Session option and a Flowtime Session option, which allows you to reach your flow state and fully immerse yourself in a task but still take breaks at a natural stopping point.</p>
                </div>
                <br></br>
                <br></br>
            </div>
            <strong className='label Planne-label'>Solution & High-Fi Prototype</strong>
            <div className='paragraph-div'>
                <br></br>
                <Row>
                    <Col md={6} className='d-flex align-items-center justify-content-center'>
                        <section>
                            <h3><i>View your goals for every time frame</i></h3>
                            <p>Using the navigation drawer, quickly maneuver between Planne’s various views: Daily, Weekly, Monthly, and Categoric. From each view, you are able to search for and pinpoint items.</p>
                        </section>
                    </Col>
                    <Col md={6} className='col d-flex align-items-center justify-content-center'>
                    <img
                        src={views}
                        alt="Views"
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
                        src={generate}
                        alt="Generative task plan"
                        width="50%"
                        height="auto"
                        />
                    </Col>
                    <Col md={6} className='d-flex align-items-center justify-content-center'>
                        <section>
                            <h3><i>Generate your future!</i></h3>
                            <p>The generative task plan is an AI tool that grows with the user. The app uses algorithms to help break down lengthy tasks and organize your schedule based on the best available time slots, helping you focus on what's important. </p>
                        </section>
                    </Col>
                </Row> 
                <br></br>
                <br></br>
                <Row>
                    <Col md={6} className='d-flex align-items-center justify-content-center'>
                        <section>
                            <h3><i>Productive sessions</i></h3>
                            <p>Once it is time for a designated work session, Planne will send you a reminder, allowing you to join a session. Planne currently supports 3 session modes - Pomodoro, Flowtime, and Default - all with the goal of sustaining concentration!</p>
                        </section>
                    </Col>
                    <Col md={6} className='col d-flex align-items-center justify-content-center'>
                        <img
                        src={sessions}
                        alt="Work sessions"
                        width="50%"
                        height="auto"
                        />
                    </Col>
                </Row>
                <br></br>
                <br></br>
                <p><a href='https://www.figma.com/proto/9me0SvpAAWLSW9YtytnEsg/Planne-(Community)?node-id=1370-7771&node-type=CANVAS&t=WJniIcVCncmGKHNF-1&scaling=scale-down&content-scaling=fixed&page-id=1301%3A413&starting-point-node-id=1370%3A7771' target="_blank" rel="noopener noreferrer">Click here to view Planne's complete prototype 🡭</a></p>
                <br></br>
                <br></br>
            </div>
            <strong className='label Planne-label'>Design System</strong>
            <div className='paragraph-div'>
                <br></br>
                <h3><i>The design choices behind Planne</i></h3>
                <p>We wanted our design to be comfortable and approachable. We went with Earthy shades of familiar colors. Additionally, we chose the font Montserrat and icons from the Phosphor Icons library due to their comfortable curves. We also have consistent margins and border radii of 10 pixels to enhance organization. </p>
                <p>From there, Planne turned into …</p>
                <img
                    src={designSystem}
                    alt="Planne's design system"
                    className='designPersona'
                />
                <br></br>
                <br></br>
            </div>
            <strong className='label Planne-label'>Reflection</strong>
            <div className='paragraph-div'>
                <br></br>
                <div className='callout-card Planne-callout'>
                    <h4>Every user is unique</h4>
                    <p>even when they all face the same pain points. It is especially essential to create a versatile and customizable app so that your user can personalize the application and fit it to their own needs. One user's happy path is not always another user's happy path!</p>
                </div>
                <div className='callout-card Planne-callout'>
                    <h4>A leader has to grow, too</h4>
                    <p>Interestingly enough, this was my first time leading a team of purely designers - as opposed to various roles - and it was my most difficult leadership position. I had to learn how to be assertive in both organizational and design domains, which I hope to develop as I grow.</p>
                </div>
                <div className='callout-card Planne-callout'>
                    <h4>Don't be ashamed to iterate</h4>
                    <p>As this case study was a final project for my Design Research Methods class, there were clear deadlines and stopping points. By the end of the semester, I was proud of our application's UX but still felt that the UI design needed work. Upon the project's “conclusion”, I took it upon myself to tweak the UI to be more friendly and modern, much more fitting for Planne!</p>
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

export default Planne