import React from 'react'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Nav from '@/Components/Nav/Nav';
import LightFooter from '@/Components/Footer/LightFooter';
import mockup from './PaycomImages/paycom-mockup.png';
import BackToTop from '@/Components/BackToTop/BackToTop';
import whatIsOnboarding from "./PaycomImages/whatIsOnboarding.png";
import CurrentStateOnboardingFlow from "./PaycomImages/CurrentStateOnboardingFlow.png";
import Personas from "./PaycomImages/Personas.png";
import PainPointsAndGoals from "./PaycomImages/PainPoints&Goals.png";
import ProductGoalFeatureMapping from "./PaycomImages/ProductGoalFeatureMapping.png"
import workshop from "./PaycomImages/workshop.png"
import GoalsAndFeatures from "./PaycomImages/GoalsAndFeatures.png";
import ErrorsImg from "./PaycomImages/ErrorsImg.png";
import ActionsImg from "./PaycomImages/ActionsImg.png";
import FiltersImg from "./PaycomImages/FiltersImg.png";
import BreakdownTableImg from "./PaycomImages/BreakdownTableImg.png";
import final01 from "./PaycomImages/final01.png";
import final02 from "./PaycomImages/final02.png";
import final03 from "./PaycomImages/final03.png";
import final04 from "./PaycomImages/final04.png";
import final05 from "./PaycomImages/final05.png";
import final06 from "./PaycomImages/final06.png";
import UnabridgedOnbardingVersion from "./PaycomImages/UnabridgedOnbardingVersion.png";
import UnabridgedEPFSDVersion from "./PaycomImages/UnabridgedEPFSDVersion.png";
import UnabridgedSurveyVersion from "./PaycomImages/UnabridgedSurveyVersion.png";
import UnabridgedUsabilityTestVersion from "./PaycomImages/UnabridgedUsabilityTestVersion.png";

const Paycom = () => {
    const { hash } = useLocation();
    useEffect(() => {
        if (!hash) return;
        const el = document.getElementById(hash.slice(1));
        if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, [hash]);

  return (
    <div id="paycom" className="Paycom light-mode min-h-screen text-white flex flex-col">
        <Nav/>

        <div className="mt-[6rem] min-h-screen flex w-4/5 flex-col items-start justify-center gap-[24px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                <div>
                    <h1 className="text-[45px] text-[#0B0B23] italic font-normal leading-normal font-['Times_New_Roman']">Paycom Onboarding Dashboard</h1>
                    <b className="italic font-bold text-[20px] text-[#0B0B23] font-['Times_New_Roman']">Redesigning Paycom's new hire onboarding experience</b>
                    <br></br>
                    <br></br>
                    <b className="italic font-bold text-[20px] text-[#0B0B23] font-['Times_New_Roman']">Client</b>
                    <p><a href='https://www.paycom.com/' target="_blank" rel="noopener noreferrer" className='underline'>Paycom⭜</a></p>
                    <br></br>
                    <b className="italic font-bold text-[20px] text-[#0B0B23] font-['Times_New_Roman']">Team</b>
                    <p>3 product managers, 1 senior product designer, 4 product designers</p>
                    <br></br>
                    <b className="italic font-bold text-[20px] text-[#0B0B23] font-['Times_New_Roman']">Role</b>
                    <p>product designer</p>
                    <br></br>
                    <b className="italic font-bold text-[20px] text-[#0B0B23] font-['Times_New_Roman']">Time</b>
                    <p>May '25 ー August '25</p>
                </div>
                <div>
                    <p>Paycom's client-side onboarding journey is disjointed between several modules. As product design interns, my team's objective was to <b className="text-[#0B0B23]"> redesign the new hire onboarding experience by ideating seamless and intuitive workflows and incorporating analytics to enable users to make data-driven decisions</b>.</p>
                    <p>Throughout the duration of my product design internship, I focused on user flows, analyzing user feedback, prototyping, and usability testing.</p>
                    <img src={mockup} alt="Laptop mockup"/>
                </div>
            </div>
            
            <div className="flex flex-col gap-[48px]">
                <div>
                    <b className="italic text-[#858591] font-normal text-[20px] font-['Times_New_Roman']">Project overview</b>
                    <h2 className="text-[36px] italic text-[#0B0B23] font-normal leading-normal font-['Times_New_Roman']">To sum up …</h2>
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="p-6 rounded-[20px] border border-[#9D6A74] text-[#0B0B23]">
                            <h3 className="text-[27px] italic font-bold font-['Times_New_Roman']">☹ Problem</h3>
                            <p>Talent acquisition teams using Paycom's ATS modules waste time on ambiguous and tedious workflows.</p>
                            <div className="p-6 mt-6 rounded-[16px] bg-[#EBE1E3]">
                                <p className='text-[18px]'>"I spend at least an hour per candidate, and 70% of my time in my personal ledger."</p>
                                <p className='w-full text-right text-[12px] mt-3'>— Talent Acquisition Operations Specialist</p>
                            </div>
                        </div>
                        <div className="p-6 rounded-[20px] border border-[#468C70] text-[#0B0B23]">
                            <h3 className="text-[27px] italic font-bold font-['Times_New_Roman']">⋆˚꩜｡ My team's solution</h3>
                            <p>Design and document an all-inclusive dashboard that streamlines the new hire experience and is mindful of</p>
                            <ul className='pl-4 mt-[1rem] list-disc'>
                                <li>Multiple access points for managing candidates</li>
                                <li>Real-time visibility for candidates</li>
                                <li>Talent acquisition analytics</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    <b className="italic text-[#858591] font-normal text-[20px] font-['Times_New_Roman']">Emphathize</b>
                    <h2 className="text-[36px] text-[#0B0B23] italic font-normal leading-normal font-['Times_New_Roman']">Background</h2>
                    <p>Paycom handles new employee onboarding through its proprietary software, spanning across 3 modules before the new hire even arrives on their first day of work.</p>
                    <img src={whatIsOnboarding} alt="What is onboarding?" className='w-3/4 mx-auto mt-[1rem]' />
                </div>
                <div>
                    <b className="italic text-[#858591] font-normal text-[20px] font-['Times_New_Roman']">Emphathize</b>
                    <h2 className="text-[36px] text-[#0B0B23] italic font-normal leading-normal font-['Times_New_Roman']">Current state of onboarding</h2>
                    <p>From a product walkthrough with the product champion of onboarding and 4 user interviews with recruiters, I mapped out the current steps a recruiter takes when onboarding a new hire; friction points became immediately apparent.</p>
                    <img src={CurrentStateOnboardingFlow} alt="Current state of onboarding" className='w-1/2 mx-auto mt-[1rem]' />
                    <Accordion type="single" collapsible className="p-6 mt-6 rounded-[16px] bg-[#E7E7E9]">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>View my complete onboarding user flows</AccordionTrigger>
                        <AccordionContent>
                            <img src={UnabridgedOnbardingVersion} alt="Unabridged Onbarding user flows" className='w-full mx-auto mt-[1rem]' />
                        </AccordionContent>
                    </AccordionItem>
                    </Accordion>
                </div>
                <div>
                    <b className="italic text-[#858591] font-normal text-[20px] font-['Times_New_Roman']">Emphathize</b>
                    <h2 className="text-[36px] text-[#0B0B23] italic font-normal leading-normal font-['Times_New_Roman']">Listening to what clients had to say</h2>
                    <p>Still in the emphasize stage, <b className='text-[#0B0B23]'>I reviewed and affinity mapped 40+ feedback responses from current clients</b> using Paycom for onboarding. Afterwards, my team inferred that users desire …</p>
                    <div className="mt-[1rem] flex flex-col sm:flex-row gap-6">
                        <div className="p-6 rounded-[20px] border-2 border-[#DADADE]">
                            <p className='text-center text-[28px] font-bold mt-1'>Streamlined workflows</p>
                            <p className='text-center mt-1'>as the current modules are segmented • 38%</p>
                        </div>
                        <div className="p-6 rounded-[20px] border-2 border-[#DADADE]">
                            <p className='text-center text-[28px] font-bold mt-1'>Clarity and functionality</p>
                            <p className='text-center mt-1'>to address the ambiguity of where new hires are in the onboarding process • 36%</p>
                        </div>
                        <div className="p-6 rounded-[20px] border-2 border-[#DADADE]">
                            <p className='text-center text-[28px] font-bold mt-1'>Data consistency</p>
                            <p className='text-center mt-1'>to avoid data re-entry and other tedious actions • 14%</p>
                        </div>
                        <div className="p-6 rounded-[20px] border-2 border-[#DADADE]">
                            <p className='text-center text-[28px] font-bold mt-1'>Customization</p>
                            <p className='text-center mt-1'>to accommodate for different onboarding processes at different companies • 12%</p>
                        </div>
                    </div>
                    <Accordion type="single" collapsible className="p-6 mt-6 rounded-[16px] bg-[#E7E7E9]">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>View my complete client feedback affinity map</AccordionTrigger>
                        <AccordionContent>
                            <img src={UnabridgedEPFSDVersion} alt="Unabridged client feedback affinity map" className='w-full mx-auto mt-[1rem]' />
                        </AccordionContent>
                    </AccordionItem>
                    </Accordion>
                </div>
                <div>
                    <b className="italic text-[#858591] font-normal text-[20px] font-['Times_New_Roman']">Emphathize</b>
                    <h2 className="text-[36px] text-[#0B0B23] italic font-normal leading-normal font-['Times_New_Roman']">Insight from external users</h2>
                    <p>To enhance our understanding of the onboarding sphere beyond Paycom-users, the team collaborated with Paycom's user researchers to release a user survey to external users. Based on <b className='text-[#0B0B23]'>75 responses</b>, we round that our users …</p>
                    <div className="my-[1rem] flex flex-col sm:flex-row gap-6">
                        <div className="p-6 rounded-[20px] border-2 border-[#DADADE] bg-[#EBEFEC]">
                            <p className='text-center text-[32px] font-bold mt-1'>40%</p>
                            <p className='text-center mt-1'>believe their biggest challenge in internal coordination is due to multiple teams involved</p>
                        </div>
                        <div className="p-6 rounded-[20px] border-2 border-[#DADADE] bg-[#EBEFEC]">
                            <p className='text-center text-[32px] font-bold mt-1'>40%</p>
                            <p className='text-center mt-1'>primarily worry about candidate's low sense of urgency for required actions</p>
                        </div>
                        <div className="p-6 rounded-[20px] border-2 border-[#DADADE] bg-[#EBEFEC]">
                            <p className='text-center text-[32px] font-bold mt-1'>57%</p>
                            <p className='text-center mt-1'>are concerned about incomplete or missing documents</p>
                        </div>
                    </div>
                    <p>… making it apparent that <b className='text-[#0B0B23]'>internal communication and actionable workflows should be a priority</b>.</p>
                    <Accordion type="single" collapsible className="p-6 mt-6 rounded-[16px] bg-[#E7E7E9]">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>View the team's complete survey results affinity map</AccordionTrigger>
                        <AccordionContent>
                            <img src={UnabridgedSurveyVersion} alt="Unabridged survey results affinity map" className='w-full mx-auto mt-[1rem]' />
                        </AccordionContent>
                    </AccordionItem>
                    </Accordion>
                </div>
                <div>
                    <b className="italic text-[#858591] font-normal text-[20px] font-['Times_New_Roman']">Define</b>
                    <h2 className="text-[36px] text-[#0B0B23] italic font-normal leading-normal font-['Times_New_Roman']">Who were we designing for?</h2>
                    <p>Such a simple question had strong implications for our scope. After meetings with our project managers and product champion, our team was able to proceed designing for <b className='text-[#0B0B23]'>3 segments of interest: end-to-end recruiters, onboarding specialists, and HR supervisors</b>.</p>
                    <img src={Personas} alt="3 user personas" className='w-3/4 mx-auto mt-[1rem]' />
                </div>
                <div>
                    <b className="italic text-[#858591] font-normal text-[20px] font-['Times_New_Roman']">Define</b>
                    <h2 className="text-[36px] text-[#0B0B23] italic font-normal leading-normal font-['Times_New_Roman']">Identifying friction themes and their corresponding user goals</h2>
                    <p>After over a month deep in the user research process, the team began pinning down major themes and how our design could address them:</p>
                    <img src={PainPointsAndGoals} alt="pain points & user goals" className='w-full mx-auto mt-[1rem]' />
                </div>
                <div>
                    <b className="italic text-[#858591] font-normal text-[20px] font-['Times_New_Roman']">Ideate</b>
                    <h2 className="text-[36px] text-[#0B0B23] italic font-normal leading-normal font-['Times_New_Roman']">Goal-feature mapping</h2>
                    <p>With our user goals identified, the team began brainstorming features using goal-feature mapping.</p>
                    <img src={ProductGoalFeatureMapping} alt="product goal-to-feature mapping" className='w-1/2 mx-auto mt-[1rem]' />
                </div>
                <div>
                    <b className="italic text-[#858591] font-normal text-[20px] font-['Times_New_Roman']">Ideate</b>
                    <h2 className="text-[36px] text-[#0B0B23] italic font-normal leading-normal font-['Times_New_Roman']">Design workshops</h2>
                    <p>During the ideation phase, our team conducted two design workshops together <b className='text-[#0B0B23]'> to brainstorm specific features, visuals, and interactions, as well as what features to prioritize and areas where our design was lacking</b>.</p>
                    <img src={workshop} alt="team design workshops" className='w-3/4 mx-auto mt-[1rem]' />
                </div>
                <div>
                    <b className="italic text-[#858591] font-normal text-[20px] font-['Times_New_Roman']">Test</b>
                    <h2 className="text-[36px] text-[#0B0B23] italic font-normal leading-normal font-['Times_New_Roman']">How our designs fared against users</h2>
                    <p>In total, my team and I conducted <b className='text-[#0B0B23]'>3 low-fidelity feedback sessions, 8 mid-fidelity moderated usability tests, and 3 high-fidelity moderated usability tests</b>. Our designs were continuously iterated on as we took our users' feedback into consideration.</p>
                    <Accordion type="single" collapsible className="p-6 mt-6 rounded-[16px] bg-[#E7E7E9]">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>View the team's complete usability test notes</AccordionTrigger>
                        <AccordionContent>
                            <img src={UnabridgedUsabilityTestVersion} alt="Unabridged usability test notes" className='w-1/2 mx-auto mt-[1rem]' />
                        </AccordionContent>
                    </AccordionItem>
                    </Accordion>
                </div>
                <div>
                    <b className="italic text-[#858591] font-normal text-[20px] font-['Times_New_Roman']">Solution</b>
                    <h2 className="text-[36px] text-[#0B0B23] italic font-normal leading-normal font-['Times_New_Roman']">Finalized features</h2>
                    <p>User feedback and scope changes from our stakeholders largely drove the direction our team took with deciding which features to incorporate, while also abiding by our original user research. Especially in the face of scope shifts, looking back to my initial map of Paycom's current onboarding flow was especially helpful as to how the design as a whole would progress.</p>
                    <img src={GoalsAndFeatures} alt="User goals and their corresponding features" className='w-full mx-auto mt-[1rem]' />
                </div>
                                <div>
                                    <b className="italic text-[#858591] font-normal text-[20px] font-['Times_New_Roman']">Solution</b>
                                    <h2 className="text-[36px] text-[#0B0B23] italic font-normal leading-normal font-['Times_New_Roman']">Spotlight on my design contributions</h2>
                                    <p>I took ownership of the candidate errors, advanced filters, stage breakdown tables, and candidate actions. My <b className='text-[#0B0B23]'>decision decisions were rooted in user feedback, the existing Paycom architecture, and guidance from senior product designers</b>.</p>
                                </div>
                                <div className='flex w-2/3 flex-col gap-[12px] mx-auto'>
                                    <h3 className="text-[27px] text-[#0B0B23] italic font-normal leading-normal font-['Times_New_Roman']">Stage Breakdown Table</h3>
                                    <p>From user interviews, I found that different personas prioritized different information for each candidate stage. By having an Onboarding Stage <b className='text-[#0B0B23]'>Breakdown power table specific to each stage, users are able to directly access more tailored information and actions</b>.</p>
                                    <img src={BreakdownTableImg} alt="Stage Breakdown Table Transformation" />
                
                                    <h3 className="mt-[2rem] text-[27px] text-[#0B0B23] italic font-normal leading-normal font-['Times_New_Roman']">Advanced filters</h3>
                                    <p>Advanced filters allow for <b className='text-[#0B0B23]'>customization based on users' differing workflows, enable finding and managing priority candidates</b>, and streamline report generation.</p>
                                    <img src={FiltersImg} alt="Advanced filters transformation" />
                
                                    <h3 className="mt-[2rem] text-[27px] text-[#0B0B23] italic font-normal leading-normal font-['Times_New_Roman']">Candidate actions</h3>
                                    <p>I delved into the prior modules to determine which candidate actions are necessary in the onboarding stages, for more <b className='text-[#0B0B23]'>clarity and streamlined flow for our users</b>. Each candidate's actions are designed to show appropriate options based on where the candidate is in the onboarding process.</p>
                                    <img src={ActionsImg} alt="High-fidelity candidate actions" className='w-1/2 mx-auto' />
                
                                    <h3 className="mt-[2rem] text-[27px] text-[#0B0B23] italic font-normal leading-normal font-['Times_New_Roman']">Candidate errorss</h3>
                                    <p>Before, errors and alerts associated with a candidate were indicated as a dedicated step within an onboarding stage, making it both less apparent that a candidate was in need of service and more ambiguous as to why the candidate was bottle-necked. Alongside my teammate, I ensured the selected <b className='text-[#0B0B23]'>errors were desired by users and complemented the existing system</b>.</p>
                                    <img src={ErrorsImg} alt="High-fidelity candidate actions" className='w-3/4 mx-auto' />
                                </div>
                                <div>
                                    <b className="italic text-[#858591] font-normal text-[20px] font-['Times_New_Roman']">Solution</b>
                                    <h2 className="text-[36px] text-[#0B0B23] italic font-normal leading-normal font-['Times_New_Roman']">Redesigning Paycom's onboarding experience </h2>
                                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                                        <img src={final01} alt="Onboarding dashboard: main" />
                                        <img src={final02} alt="Onboarding dashboard: breakdown page analytics" />
                                        <img src={final03} alt="Onboarding dashboard: breakdown page power table" />
                                    </div>
                                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                                        <img src={final04} alt="Onboarding dashboard: candidate drawer" />
                                        <img src={final05} alt="Onboarding dashboard: candidate progress" />
                                        <img src={final06} alt="Onboarding dashboard: analytics" />
                                    </div>
                                </div>
                {/*<div className='mt-[1rem] p-6 rounded-[20px] border border-[#858591]'>
                    <b className="italic text-[#858591] font-normal text-[20px] font-['Times_New_Roman']">Hold on!</b>
                    <h3 className="text-[27px] text-[#0B0B23] italic font-normal leading-normal font-['Times_New_Roman']">This project is not yet public</h3>
                    <p>Interested in seeing my work for Paycom's Onboarding Dashboard? Please shoot me an <a href="mailto:Susan.Zhang901@gmail.com" className="italic text-[#0B0B23] underline font-bold font-['Times_New_Roman']"> email</a> and I would love to hop on a call◡̈</p>
                </div>*/}
                <div>
                    <b className="italic text-[#858591] font-normal text-[20px] font-['Times_New_Roman']">Feedback</b>
                    <h2 className="text-[36px] italic text-[#0B0B23] font-normal leading-normal font-['Times_New_Roman']">My and my designs' impact</h2>
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="p-6 rounded-[20px] border border-[#858591]">
                            <p className='text-[18px]'>Understanding the different modules put her in a strategic position to provide a lot of support to the others as they worked through solutions and were able to rely on her for some of this information. Susan encompasses the skills needed to be a talented product designer.</p>
                            <p className="w-full text-right mt-3 text-[18px] text-[#0B0B23] italic font-bold font-['Times_New_Roman']">— Product Design Internship Program Manager ✮</p>
                        </div>
                        <div className="p-6 rounded-[20px] border border-[#858591]">
                            <p className='text-[18px]'>This dashboard would help with the reporting I have to manually separate each week.</p>
                            <p className="w-full text-right mt-3 text-[18px] text-[#0B0B23] italic font-bold font-['Times_New_Roman']">— Supervisor of Talent Acquisition ꩜</p>
                        </div>
                        <div className="p-6 rounded-[20px] border border-[#858591]">
                            <p className='text-[18px]'>It's a one-stop-shop for us, instead of having so many other windows open … I'm excited to get this thing going!</p>
                            <p className="w-full text-right mt-3 text-[18px] text-[#0B0B23] italic font-bold font-['Times_New_Roman']">— Pre-Employment Specialist ❀</p>
                        </div>
                    </div>
                </div>
                <div>
                    <b className="italic text-[#858591] font-normal text-[20px] font-['Times_New_Roman']">Reflection</b>
                    <div className='mt-[1rem]'>
                        <h3 className="text-[27px] text-[#0B0B23] italic font-normal leading-normal font-['Times_New_Roman']">User flows and flows and flows</h3>
                        <p>Prior to the Paycom product design internship, I was largely self-taught, and the few design classes I did take failed to emphasize the importance of user flows. In fact, I had only made 1 user flow prior to starting the internship. However, throughout the course of the internship, I took it upon myself to truly understand the current state of the ATS modules, which resulted in many, many, <b>many</b> user flows. Subsequently, I had a more thorough understanding of how users interact with the modules and was able to help my team better understand how ATS currently handles users' data and the feasibility of our solutions while we were ideating.</p>
                    </div>
                    <div className='mt-[1rem]'>
                        <h3 className="text-[27px] text-[#0B0B23] italic font-normal leading-normal font-['Times_New_Roman']">Diversity of thought</h3>
                        <p>My product design team was quite diverse, with me as a computer science major, 1 teammate being a cognitive science major, and 2 teammates being master's students. I was initially worried that my computer science background would hold me back, but it gave me a leg up on understanding and breaking down technical problems.</p>
                    </div>
                    <div className='mt-[1rem]'>
                        <h3 className="text-[27px] text-[#0B0B23] italic font-normal leading-normal font-['Times_New_Roman']">Designing with a design system</h3>
                        <p>Though I had used design systems in my wireframes in the past, they were for personal projects with no real stakes. Daily exposure to Paycom's in-depth design system and frequent feedback from my design systems team mentor gave me a greater appreciation for them and their necessity to not just us product designers but also frontend developers and users.</p>
                    </div>
                </div>
                <BackToTop />
            </div>    
        </div>
      <LightFooter />
    </div>
  )
}

export default Paycom