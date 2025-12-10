import React from 'react'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Nav from '@/Components/Nav/Nav';
import LightFooter from '@/Components/Footer/LightFooter';
import mockup from './CapitalOneImages/capitalone-mockup.png';
import deskresearch from './CapitalOneImages/User Flow Buying a car.png';
import competitorfeatures from './CapitalOneImages/CompetitorsFeatures.png';
import persona from './CapitalOneImages/DesignPersona.png'
import brainstorming from './CapitalOneImages/Feature Brainstorming - Blue Sky List.png';
import userflows from './CapitalOneImages/First Draft User Flows.png';
import midfis from './CapitalOneImages/Midfidelitywireframes.png';
import visualdesignsystem from './CapitalOneImages/VisualDesignSystem.png';
import usabilitytests from './CapitalOneImages/usabilitytests.png';
import ontrack1 from './CapitalOneImages/mockup-1.png';
import ontrack2 from './CapitalOneImages/mockup-2.png';
import ontrack3 from './CapitalOneImages/mockup-3.png';
import ontrack4 from './CapitalOneImages/mockup-4.png';
import validation from './CapitalOneImages/UX Validation.png';
import team from './CapitalOneImages//group.jpg';
import BackToTop from '@/Components/BackToTop/BackToTop';

const CapitalOne = () => {
    const { hash } = useLocation();
    useEffect(() => {
        if (!hash) return;
        const el = document.getElementById(hash.slice(1));
        if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, [hash]);

  return (
    <div id="ontrack" className="light-mode min-h-screen text-white flex flex-col">
        <Nav/>

        <div className="mt-[6rem] min-h-screen flex w-4/5 flex-col items-start justify-center gap-[24px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                <div>
                    <h1 className="text-[45px] text-[#0B0B23] italic font-normal leading-normal font-['Times_New_Roman']">Capital One OnTrack</h1>
                    <b className="italic font-bold text-[20px] text-[#0B0B23] font-['Times_New_Roman']">Enabling Gen Z to understand the car buying journey and cost of ownership, tasked by Capital One's Auto Finance Team</b>
                    <br></br>
                    <br></br>
                    <b className="italic font-bold text-[20px] text-[#0B0B23] font-['Times_New_Roman']">Team</b>
                    <p>5 product designers</p>
                    <br></br>
                    <b className="italic font-bold text-[20px] text-[#0B0B23] font-['Times_New_Roman']">Role</b>
                    <p>product designer</p>
                    <br></br>
                    <b className="italic font-bold text-[20px] text-[#0B0B23] font-['Times_New_Roman']">Time</b>
                    <p>August '25 ー December '25</p>
                </div>
                <div>
                    <p><a href='https://www.capitalone.com/cars/auto-financing' target="_blank" rel="noopener noreferrer" className='underline'>Capital One's Auto Finance Team⭜</a> tasked UTD's Applied Experience Design Program to explore avenues to empower Gen Z to buy a car, one of the largest financial purchases one in their age group could make. Heavily drawing inspiration from Capital One's suite of auto financing tools, my team took it upon ourselves to <b className='text-[#0B0B23]'>understand and aid the journey of a first time car buyer</b>.</p>
                    <p>My team and I broke this project down into five phases: secondary research, primary research, ideation, design, and iteration.</p>
                    <img src={mockup} alt="Laptop mockup of Capital One OnTrack"/>
                </div>
            </div>

            <div className="flex flex-col gap-[48px]">
                <div>
                    <b className="italic text-[#858591] font-normal text-[20px] font-['Times_New_Roman']">Project overview</b>
                    <h2 className="text-[36px] italic text-[#0B0B23] font-normal leading-normal font-['Times_New_Roman']">To sum up …</h2>
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="p-6 rounded-[20px] border border-[#9D6A74] text-[#0B0B23]">
                            <h3 className="text-[27px] italic font-bold font-['Times_New_Roman']">☹ Problem</h3>
                            <p>Gen Z faces overwhelment and uncertainty when buying a car for the first time, leading to financial oversight and deceit.</p>
                            <div className="p-6 mt-6 rounded-[16px] bg-[#EBE1E3]">
                                <p className='text-[18px]'>“My first time buying a car was stressful because I didn't know what questions to ask, I didn't understand all of the costs.”</p>
                                <p className='w-full text-right text-[12px] mt-3'>— first-time car buyer</p>
                            </div>
                        </div>
                        <div className="p-6 rounded-[20px] border border-[#468C70] text-[#0B0B23]">
                            <h3 className="text-[27px] italic font-bold font-['Times_New_Roman']">⋆˚꩜｡ My team's solution</h3>
                            <p>Design a web product to empower Gen Z to start the car buying process with a <b className='text-[#0B0B23]'>clear vision and learn about car ownership</b>.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <b className="italic text-[#858591] font-normal text-[20px] font-['Times_New_Roman']">Secondary research</b>
                    <h2 className="text-[36px] text-[#0B0B23] italic font-normal leading-normal font-['Times_New_Roman']">Target users</h2>
                    <p>Car buying is oftentimes regarded as confusing and daunting, especially for young, first-time car buyers. As such, we focused on a segment of Gen Z who are:</p>
                    <ul className='mt-[1rem] list-disc'>
                        <li>18-25 years old</li>
                        <li>Looking to buy their first car</li>
                        <li>Has begun saving and/or receiving financial help from guardians</li>
                    </ul>
                </div>
                <div>
                    <b className="italic text-[#858591] font-normal text-[20px] font-['Times_New_Roman']">Secondary research</b>
                    <h2 className="text-[36px] text-[#0B0B23] italic font-normal leading-normal font-['Times_New_Roman']">Desk research</h2>
                    <p>I kicked off the project by looking into the car-buying process. I mapped out the process as recommended by both the Federal Trade Commission and social media, making note of <b className='text-[#0B0B23]'>tips and common pitfalls</b>, to <b className='text-[#0B0B23]'>get into the mindset of our users</b>.</p>
                    <img src={deskresearch} alt="Car buying process user flow" className='w-full mx-auto mt-[1rem]' />
                </div>
                <div>
                    <b className="italic text-[#858591] font-normal text-[20px] font-['Times_New_Roman']">Secondary research</b>
                    <h2 className="text-[36px] text-[#0B0B23] italic font-normal leading-normal font-['Times_New_Roman']">Competitive analysis</h2>
                    <p>To understand similar products our users would turn to, I conducted a competitive analysis of 5 products used to aid the car buying process, including Capital One Auto Navigator.</p>
                    <img src={competitorfeatures} alt="Chart displaying which car-buying competitors had which features" className='w-full lg:w-1/2 mx-auto my-[1rem]' />
                    <p>I found that, while all products had similar features and are in-line with each other, each product's features were either confusing to use or misinterpreted by young first-time car buyers, who are oftentimes financially-illiterate. <b className='text-[#0B0B23]'>Directed navigation and explicit guidance would set our product apart from other market competitors</b>.</p>
                </div>
                <div>
                    <b className="italic text-[#858591] font-normal text-[20px] font-['Times_New_Roman']">Primary research</b>
                    <h2 className="text-[36px] text-[#0B0B23] italic font-normal leading-normal font-['Times_New_Roman']">User interviews</h2>
                    <p>My team and I listened to what 5 Gen Z car buyers had to say about their experience researching and buying their first car.</p>
                    <p>We found that first-time Gen Z car buyers…</p>
                    <div className="flex flex-col md:flex-row mt-3 gap-6">
                        <div className="p-6 rounded-[20px] border border-[#858591]">
                            <p>Tend to <b className='text-[#0B0B23]'>mistrust dealers</b> and have bad car dealership experiences, and <b className='text-[#0B0B23]'>do not feel comfortable or confident</b> negotiating with dealers</p>
                        </div>
                        <div className="p-6 rounded-[20px] border border-[#858591]">
                            <p>Are drawn to eco-friendly cars, especially <b className='text-[#0B0B23]'>hybrid cars</b>, for the financial benefits of saved fuel costs</p>
                        </div>
                        <div className="p-6 rounded-[20px] border border-[#858591]">
                            <p>Emphasize <b className='text-[#0B0B23]'>quality</b>, expecting the car to last several years</p>
                        </div>
                    </div>
                    <div className="mt-[1rem] flex flex-col md:flex-row gap-6">
                        <div className="p-6 rounded-[20px] border border-[#858591]">
                            <p>“Spend <b className='text-[#0B0B23]'>90% of your time doing research</b>, and the other 10% actually buying your car to cut down on the negotiating time.”</p>
                            <p className='w-full text-right text-[12px] mt-3'>— Participant 02</p>
                        </div>
                        <div className="p-6 rounded-[20px] border border-[#858591]">
                            <p>Emphasize the importance of <b className='text-[#0B0B23]'>understanding car financing</b> and setting a realistic budget</p>
                        </div>
                        <div className="p-6 rounded-[20px] border border-[#858591]">
                            <p>Found <b className='text-[#0B0B23]'>low cost of ownership to be important</b>, especially after the purchase</p>
                        </div>
                    </div>
                </div>
                <div>
                    <b className="italic text-[#858591] font-normal text-[20px] font-['Times_New_Roman']">Primary research</b>
                    <h2 className="text-[36px] text-[#0B0B23] italic font-normal leading-normal font-['Times_New_Roman']">User survey</h2>
                    <p>My teammates created and released a user survey to Gen Z participants who have either bought their car or are interested in buying their first car. Based on <b className='text-[#0B0B23]'>110 responses</b>, we found that first-time Gen Z car buyers…</p>
                    <div className="mt-[1rem] flex flex-col sm:flex-row gap-6">
                        <div className="p-6 rounded-[20px] border-2 border-[#DADADE] bg-[#ECF4F5]">
                            <p className='text-center text-[32px] mt-1'>78.2%</p>
                            <p className='text-center mt-1'>don't understand car financing or only understand the basics</p>
                        </div>
                        <div className="p-6 rounded-[20px] border-2 border-[#DADADE] bg-[#ECF4F5]">
                            <p className='text-center text-[32px] mt-1'>89.9%</p>
                            <p className='text-center mt-1'>are at least somewhat anxious on taking a car loan</p>
                        </div>
                        <div className="p-6 rounded-[20px] border-2 border-[#DADADE] bg-[#ECF4F5]">
                            <p className='text-center text-[32px] mt-1'>75.5%</p>
                            <p className='text-center mt-1'>thought about how the type of vehicle you want might affect costs like insurance or financing</p>
                        </div>
                    </div>
                    <div className="my-[1rem] flex flex-col sm:flex-row gap-6">
                        <div className="p-6 rounded-[20px] border-2 border-[#DADADE] bg-[#ECF4F5]">
                            <p className='text-center text-[32px] mt-1'>94.5%</p>
                            <p className='text-center mt-1'>will use the car primarily for daily commuting and running errands</p>
                        </div>
                        <div className="p-6 rounded-[20px] border-2 border-[#DADADE] bg-[#ECF4F5]">
                            <p className='text-center text-[32px] mt-1'>0%</p>
                            <p className='text-center mt-1'>are highly likely to take advice from an AI assistant</p>
                        </div>
                        <div className="p-6 rounded-[20px] border-2 border-[#DADADE] bg-[#ECF4F5]">
                            <p className='text-center text-[32px] mt-1'>85.4%</p>
                            <p className='text-center mt-1'>would like to simulate the car purchase online</p>
                        </div>
                    </div>
                    <p>Full analysis of the survey results reveal that users are <b className='text-[#0B0B23]'>aware of the complexity of the car-buying process and understand its basics, but are not confident in their ability to learn or execute the process themselves</b>. Additionally, it further corroborated our hypothesis that <b className='text-[#0B0B23]'>learning the financing process increases their confidence in negotiating with car dealers</b>.</p>
                </div>
                <div>
                    <b className="italic text-[#858591] font-normal text-[20px] font-['Times_New_Roman']">Ideation</b>
                    <h2 className="text-[36px] text-[#0B0B23] italic font-normal leading-normal font-['Times_New_Roman']">Problem & goal statement</h2>
                    <p>Based on the user research my team and I had done so far, we synthesized our findings into a statement and goals:</p>
                    <div className="mt-[1rem] p-6 rounded-[20px] border border-[#858591]">
                        <b className="italic font-normal text-[24px] text-[#0B0B23] font-['Times_New_Roman']">Problem statement</b>
                        <p>When Gen Z is in the process of buying their first car, they want <b className='text-[#0B0B23]'>all the information about financing, ownership costs, and maintenance in one place</b> so they can feel confident they're getting a smooth, <b className='text-[#0B0B23]'>fair price</b> at the dealership.</p>
                        <br></br>
                        <b className="italic font-normal text-[24px] text-[#0B0B23] font-['Times_New_Roman']">Goals</b>
                        <p>Find a car that <b className='text-[#0B0B23]'>fits their needs</b>, <b className='text-[#0B0B23]'>explore car options efficiently</b>, and confidently <b className='text-[#0B0B23]'>learn about car buying and ownership</b>.</p>
                    </div>
                </div>
                <div>
                    <b className="italic text-[#858591] font-normal text-[20px] font-['Times_New_Roman']">Ideation</b>
                    <h2 className="text-[36px] text-[#0B0B23] italic font-normal leading-normal font-['Times_New_Roman']">User persona</h2>
                    <img src={persona} alt="Design persona" className='w-full mx-auto mt-[1rem]' />
                </div>
                <div>
                    <b className="italic text-[#858591] font-normal text-[20px] font-['Times_New_Roman']">Ideation</b>
                    <h2 className="text-[36px] text-[#0B0B23] italic font-normal leading-normal font-['Times_New_Roman']">Feature brainstoring</h2>
                    <p>With our problem statement and goals established, my team and I began exploring solutions. We shaped our initial thought processes using <b className='text-[#0B0B23]'>goal-feature mapping</b> and further fleshed our key features out with first-draft <b className='text-[#0B0B23]'>user flows</b>.</p>
                    <img src={brainstorming} alt="Feature Brainstorming - Blue Sky List" className='w-full mx-auto mt-[1rem]' />
                    <img src={userflows} alt="First Draft User Flows" className='w-full mx-auto mt-[1rem]' />
                </div>
                <div>
                    <b className="italic text-[#858591] font-normal text-[20px] font-['Times_New_Roman']">Design</b>
                    <h2 className="text-[36px] text-[#0B0B23] italic font-normal font-['Times_New_Roman']">Mid-fidelity wireframes</h2>
                    <p>The aforementioned user flows, classic pen-and-paper wireframing, and low-fidelity wireframes evolved into the following mid-fidelity wireframes:</p>
                    <img src={midfis} alt="Mid-fidelity wireframes" className='w-full mx-auto mt-[1rem]' />
                </div>
                <div>
                    <b className="italic text-[#858591] font-normal text-[20px] font-['Times_New_Roman']">Design</b>
                    <h2 className="text-[36px] text-[#0B0B23] italic font-normal font-['Times_New_Roman']">Establishing Capital One OnTrack's visual design</h2>
                    <p>My team and I decided to name our product “<b className='text-[#0B0B23]'>Capital One OnTrack</b>.” We accordingly designed and identified essential design elements to be included in the product, emphasizing <b className='text-[#0B0B23]'>trust</b> and <b className='text-[#0B0B23]'>emulating Capital One's visuals</b>.</p>
                    <img src={visualdesignsystem} alt="Visual design system" className='w-full mx-auto mt-[1rem]' />
                </div>
                <div>
                    <b className="italic text-[#858591] font-normal text-[20px] font-['Times_New_Roman']">Iteration</b>
                    <h2 className="text-[36px] text-[#0B0B23] italic font-normal leading-normal font-['Times_New_Roman']">Usability testing</h2>
                    <p>In total, my team and I conducted <b className='text-[#0B0B23]'>4 mid-fidelity moderated usability tests</b> and <b className='text-[#0B0B23]'>5 high-fidelity moderated usability tests</b>. User feedback was largely positive, with the most drastic changes addressing the clarity of our features and access points when transitioning between features.</p>
                    <img src={usabilitytests} alt="Notes from usability tests" className='w-full mx-auto mt-[1rem]' />
                </div>
                <div>
                    <b className="italic text-[#858591] font-normal text-[20px] font-['Times_New_Roman']">Iteration</b>
                    <h2 className="text-[36px] text-[#0B0B23] italic font-normal leading-normal font-['Times_New_Roman']">Solution spotlight</h2>
                    <p>The team's final happy path prototype consists of <b className='text-[#0B0B23]'>20+ screens spotlighting 8 features</b>. I want to highlight our top features and design decisions:</p>
                </div>
                <div className='flex w-2/3 flex-col gap-[12px] mx-auto'>
                    <h3 className="text-[27px] text-[#0B0B23] italic font-normal leading-normal font-['Times_New_Roman']">Car Builder</h3>
                    <p>Enabling our user to simulate building their ideal car gives insight on what <b className='text-[#0B0B23]'>factors affect car choice</b> and matches them with car models, <b className='text-[#0B0B23]'>reducing their choice paralysis</b>.</p>
                    <img src={ontrack1} alt="Mockup of Capital One OnTrack's Car Builder" />
                
                    <h3 className="mt-[2rem] text-[27px] text-[#0B0B23] italic font-normal leading-normal font-['Times_New_Roman']">Car Hub</h3>
                    <p>This page <b className='text-[#0B0B23]'>centralizes and streamlines the experience of our user: direct access</b> to saved external car listings scraped by OnTrack's web extension, saved cars, recently viewed cars, and car comparisons.</p>
                    <img src={ontrack2} alt="Mockup of Capital One OnTrack's Car Hub" />
                
                    <h3 className="mt-[2rem] text-[27px] text-[#0B0B23] italic font-normal leading-normal font-['Times_New_Roman']">Tip sonners</h3>
                    <p>Inspired by competitor analysis and user interviewees' desire for directed guidance, tip sonners provide opportune <b className='text-[#0B0B23]'>recommended actions and educational advice</b>.</p>
                    <img src={ontrack3} alt="Mockup of Capital One OnTrack's car Tip Sonner" />
                
                    <h3 className="mt-[2rem] text-[27px] text-[#0B0B23] italic font-normal leading-normal font-['Times_New_Roman']">How this car compliments your budget</h3>
                    <p>Heavily emphasized by our user interviewees and survey responses, <b className='text-[#0B0B23]'>awareness on the financing process and cost of ownership relieves their anxiousness and improves their confidence</b> in their ability to undertake buying a car.</p>
                    <img src={ontrack4} alt="Mockup of Capital One OnTrack's Car Page" />
                </div>
                <div>
                    <b className="italic text-[#858591] font-normal text-[20px] font-['Times_New_Roman']">Iteration</b>
                    <h2 className="text-[36px] text-[#0B0B23] italic font-normal leading-normal font-['Times_New_Roman']">Final prototype</h2>
                    <iframe className='w-3/4 aspect-[8/5] rounded-lg mx-auto mt-[1rem]' src="https://embed.figma.com/proto/vBFWSGpHD9buWAmoUhHFqx/C1-Wireframes-%E3%83%BC-Microsoft-Fluent-2-Web?node-id=12170-28594&scaling=scale-down&content-scaling=fixed&page-id=12042%3A15302&starting-point-node-id=12170%3A28594&show-proto-sidebar=1&embed-host=share"></iframe>
                </div>
                <div>
                    <b className="italic text-[#858591] font-normal text-[20px] font-['Times_New_Roman']">Iteration</b>
                    <h2 className="text-[36px] text-[#0B0B23] italic font-normal leading-normal font-['Times_New_Roman']">UX validation</h2>
                    <p>Based on our 9 usability tests, here is a summary of our UX validation:</p>
                    <img src={validation} alt="8/9 understand the how to use and navigate the product with no problem; 9/9 found the product's features to be useful and insightful; 9/9 found the product helpful in the car buying process" className='lg:w-2/3 md:w-full mx-auto mt-[1rem]' />
                </div>
                <div>
                    <b className="italic text-[#858591] font-normal text-[20px] font-['Times_New_Roman']">Reflection</b>
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className='mt-[1rem] p-6 rounded-[20px] border border-[#858591]'>
                            <h3 className="text-[27px] text-[#0B0B23] italic font-normal leading-normal font-['Times_New_Roman'] mb-[0.5rem]">Prototyping interactions✧.*</h3>
                            <p>As the lead prototype developer of my team, I took it upon myself to experiment and learn new prototyping capabilities with Figma. My work ultimately made our final product more immersive and interactive to our users.</p>
                        </div>
                        <div className='mt-[1rem] p-6 rounded-[20px] border border-[#858591]'>
                            <h3 className="text-[27px] text-[#0B0B23] italic font-normal leading-normal font-['Times_New_Roman'] mb-[0.5rem]">Converging and diverging solutions⋆.*･</h3>
                            <p>Capital One's Auto Finance Team tasked this design challenge to 5 teams within UTD’s Applied Experience Design Program. It was refreshing to see each team's approach to it in our biweekly sprint presentations!</p>
                        </div>
                        <div className='mt-[1rem] p-6 rounded-[20px] border border-[#858591]'>
                            <h3 className="text-[27px] text-[#0B0B23] italic font-normal leading-normal font-['Times_New_Roman'] mb-[0.5rem]">Leadership & organization˙⋆✮</h3>
                            <p>I led the team through 2 rounds of usability tests, in addition to exercises (i.e. goal-feature mapping, happy path. etc.) to move along our user research process. I found that staying organized through FigJam models helped us the most.</p>
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-col lg:flex-row gap-8 lg:gap-8">
                    <div className='w-full lg:w-1/2 shrink-0'>
                        <h2 className="text-[36px] text-[#0B0B23] italic font-normal leading-normal font-['Times_New_Roman']">Tools & team</h2>
                        <b className="italic font-bold text-[20px] text-[#0B0B23] font-['Times_New_Roman']">Tools used:</b>
                        <ul className='list-disc'>
                            <li>Figma</li>
                            <li>FigJam</li>
                            <li>Google Suite</li>
                            <li>Trello</li>
                            <li>pen & paper</li>
                        </ul>
                        <img src={team} alt="Top: Chip, Elise; bottom: Susan, Charlize, Kayla" className='w-full mx-auto mt-[1rem]' />
                    </div>
                    <div className='w-full lg:w-1/2'>
                        
                        
                          <div className="space-y-4">
                            <div className='mt-[3.3rem]'>
                                <b className="italic font-bold text-[20px] text-[#0B0B23] font-['Times_New_Roman']">Team members:</b>
                            </div>
                            <div>
                                <b className="italic font-bold text-[18px] font-['Times_New_Roman']">Charlize Chan</b>
                                <p>Project Management, Research, Interviews, User Flow, Brand Identity, Wireframe, Prototype</p>
                            </div>
                            <div>
                                <b className="italic font-bold text-[18px] font-['Times_New_Roman']">Kayla Chu</b>
                                <p>Research, Interviews, User Flow, Brand Identity, Wireframe, Prototype</p>
                            </div>
                            <div>
                                <b className="italic font-bold text-[18px] font-['Times_New_Roman']">Chip McKenna</b>
                                <p>Project Management, Research, Interviews, User Flow, Brand Identity, Wireframe, Prototype</p>
                            </div>
                            <div>
                                <b className="italic font-bold text-[18px] font-['Times_New_Roman']">Elise Hart</b>
                                <p>Research, Survey, Interviews, User Flow, Brand Identity, Wireframe, Prototype</p>
                            </div>
                            <div>
                                <b className="italic font-bold text-[18px] font-['Times_New_Roman']">Susan Zhang</b>
                                <p>Project Management, Research, Interviews, User Flow, Brand Identity, Wireframe, Prototype</p>
                            </div>
                        </div>
                    </div>
                </div>

                <BackToTop />
            </div>
        </div>
      <LightFooter />
    </div>
  )
}

export default CapitalOne