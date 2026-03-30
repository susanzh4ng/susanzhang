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
import mockup from './OrgPortalImages/orgportal-mockup.png';
import competitor01 from './OrgPortalImages/competition01.png';
import competitor02 from './OrgPortalImages/competition02.png';
import competitor03 from './OrgPortalImages/competition03.png';
import competitor04 from './OrgPortalImages/competition04.png';
import UnabridgedUserInterviews from './OrgPortalImages/UnabridgedUserInterviews.png';
import personagoals from './OrgPortalImages/PersonaGoals.png';
import prestonpersona from './OrgPortalImages/PrestonthePresidentofaStudentOrganization.png';
import nunapersona from './OrgPortalImages/NunatheNewStudentLookingtoGetInvolved.png';
import GoalFeature from './OrgPortalImages/GoalFeature.png';
import ideate from './OrgPortalImages/Ideation.png';
import timeline from './OrgPortalImages/Timeline.png';
import lofiwireframes from './OrgPortalImages/Lowfidelitywireframes.png';
import visualdesignsystem from './OrgPortalImages/VisualDesignSystem.png';
import UIUXValidation from './OrgPortalImages/UIUXValidation.png';
import UnabridgedUsabilityTests from './OrgPortalImages/UnabridgedUsabilityTests.png';
import orgportal1 from './OrgPortalImages/SearchFilterIteration.png';
import orgportal2 from './OrgPortalImages/OfficerSideEventActions.png';
import orgportal3 from './OrgPortalImages/ViewingMembersinDataTables.png';
import orgportal4 from './OrgPortalImages/AdjustingEventAndFormResponses.png';
import final01 from './OrgPortalImages/final01.png';
import final02 from './OrgPortalImages/final02.png';
import final03 from './OrgPortalImages/final03.png';
import final04 from './OrgPortalImages/final04.png';
import final05 from './OrgPortalImages/final05.png';
import BackToTop from '@/Components/BackToTop/BackToTop';

const OrgPortal = () => {
    const { hash } = useLocation();
    useEffect(() => {
        if (!hash) return;
        const el = document.getElementById(hash.slice(1));
        if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, [hash]);

  return (
    <div id="orgportal" className="OrgPortal light-mode min-h-screen text-white flex flex-col">
        <Nav/>

        <div className="mt-[6rem] min-h-screen flex w-4/5 flex-col items-start justify-center gap-[24px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                <div>
                    <h1 className="text-[45px] text-[#0B0B23] italic font-normal leading-normal font-['Times_New_Roman']">Org Portal</h1>
                    <b className="italic font-bold text-[20px] text-[#0B0B23] font-['Times_New_Roman']">UT Dallas's student organization portal, built with love by a UT Dallas student organization</b>
                    <br></br>
                    <br></br>
                    <b className="italic font-bold text-[20px] text-[#0B0B23] font-['Times_New_Roman']">Team</b>
                    <p>1 project manager, 8 software developers, and 1 product designer</p>
                    <br></br>
                    <b className="italic font-bold text-[20px] text-[#0B0B23] font-['Times_New_Roman']">Role</b>
                    <p>product designer</p>
                    <br></br>
                    <b className="italic font-bold text-[20px] text-[#0B0B23] font-['Times_New_Roman']">Time</b>
                    <p>January '25 ー present </p>
                </div>
                <div>
                    <p>Org Portal is a web platform designed to streamline and manage the activities of <b className='text-[#0B0B23]'>The University of Texas at Dallas's clubs and organizations</b> by serving as a <b className='text-[#0B0B23]'>centralized hub for event management, member and officer management, and club discovery</b>.  I owned the end-to-end design process.</p>
                    <p>The Org Portal team is a subteam of the Development Division from UTD's ACM chapter <a href='https://acmutd.co/development' target="_blank" rel="noopener noreferrer" className='underline'>ACM Development⭜</a> designs, builds, and maintains web applications that support ACM UTD's operations and member interactions.</p>
                    <img src={mockup} alt="Mockup of OrgPortal"/>
                </div>
            </div>

            <div className="flex flex-col gap-[48px]">
                <div>
                    <b className="italic text-[#858591] font-normal text-[20px] font-['Times_New_Roman']">Project overview</b>
                    <h2 className="text-[36px] italic text-[#0B0B23] font-normal leading-normal font-['Times_New_Roman']">To sum up …</h2>
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="p-6 rounded-[20px] border border-[#9D6A74] text-[#0B0B23]">
                            <h3 className="text-[27px] italic font-bold font-['Times_New_Roman']">☹ Problem</h3>
                            <p>Students at UT Dallas lack a reliable resource to discover and take part in student organziations.</p>
                            <div className="p-6 mt-6 rounded-[16px] bg-[#EBE1E3]">
                                <p className='text-[18px]'>"The club fair is only once a semester and so crowded, and everything else is on random flyers or Instagrams."</p>
                                <p className='w-full text-right text-[12px] mt-3'>— UT Dallas junior</p>
                            </div>
                        </div>
                        <div className="p-6 rounded-[20px] border border-[#468C70] text-[#0B0B23]">
                            <h3 className="text-[27px] italic font-bold font-['Times_New_Roman']">⋆˚꩜｡ My solution</h3>
                            <p>Design a web platform that acts as a centralized hub for</p>
                            <ul className='pl-4 mt-[1rem] list-disc'>
                                <li>event management</li>
                                <li>member and officer management</li>
                                <li>club discovery</li>
                                <br></br>
                            </ul>
                            <p>... for the student organizations at UT Dallas, in order <b className='text-[#0B0B23]'>to engage and uplift campus life</b>.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <b className="italic text-[#858591] font-normal text-[20px] font-['Times_New_Roman']">Empathize</b>
                    <h2 className="text-[36px] text-[#0B0B23] italic font-normal leading-normal font-['Times_New_Roman']">Humble beginnings</h2>
                    <p>A past ACM Development director pitched the original Org Portal concept during the Fall '24 school semester. At the time, he had one overarching pain point to address: <b className='text-[#0B0B23]'>unlike other schools in the UT system, UT Dallas lacked a consolidated student organization portal</b>.</p>
                    <p>ACM Development worked to close this gap by hiring officers during the following winter break, just in time for a full software development team starting in the Spring '25 semester.</p>
                    <img src={timeline} alt="Org Portal team timeline" className='w-2/3 mx-auto mt-[1rem]' />
                </div>
                <div>
                    <b className="italic text-[#858591] font-normal text-[20px] font-['Times_New_Roman']">Empathize</b>
                    <h2 className="text-[36px] text-[#0B0B23] italic font-normal leading-normal font-['Times_New_Roman']">Background & market research</h2>
                    <p>UT Dallas's <b className='text-[#0B0B23]'>+400 registered student organizations' operations were scattered</b> across countless Slack messaging channels, Notion boards, and Google Suite accounts, and students largely discovered clubs by once-a-semester fairs or word-of-mouth.</p>
                    <p>Moreover, intrigued by the platform that other Texas universities mandated, I explored Anthology's Campus Labs. I was able to pinpoint areas of growth that the Org Portal team could focus on.</p>
                    <img src={competitor01} alt="Drawbacks of organization fairs" className='w-2/3 mx-auto mt-[1rem]' />
                    <img src={competitor02} alt="Drawbacks of Instagram" className='w-2/3 mx-auto mt-[1rem]' />
                    <img src={competitor03} alt="Drawbacks of bulletin boards" className='w-2/3 mx-auto mt-[1rem]' />
                    <img src={competitor04} alt="Drawbacks of Campus Labs" className='w-2/3 mx-auto mt-[1rem]' />
                </div>
                <div>
                    <b className="italic text-[#858591] font-normal text-[20px] font-['Times_New_Roman']">Empathize</b>
                    <h2 className="text-[36px] text-[#0B0B23] italic font-normal leading-normal font-['Times_New_Roman']">User interviews</h2>
                    <p>I kicked off user research by listening to what current 5 club presidents and vice presidents at UTD had to say. I found that …</p>
                    <div className="flex flex-col md:flex-row mt-3 gap-6">
                        <div className="p-6 rounded-[20px] border border-[#858591]">
                            <p>Each student organization has its own <b className='text-[#0B0B23]'>unique process for recruitment, accepting members, and planning events</b>.</p>
                        </div>
                        <div className="p-6 rounded-[20px] border border-[#858591]">
                            <p>Each student organization tracked specific metrics, and each had <b className='text-[#0B0B23]'>differing goals on what did they with the metrics</b>.</p>
                        </div>
                    </div>
                    <div className="mt-[1rem] flex flex-col md:flex-row gap-6">
                        <div className="p-6 rounded-[20px] border border-[#858591]">
                            <p>Some student organizations had a <b className='text-[#0B0B23]'>more strict definition of “membership” than others</b>, even resulting in “team-specific” events and forms that did not apply to any other member of the same student organization or memberships that came with a semester-long time limit</p>
                        </div>
                        <div className="p-6 rounded-[20px] border border-[#858591]">
                            <p>Just the 5 officers we interviewed mentioned <b className='text-[#0B0B23]'>19 digital platforms</b> that they used to run their club and manage their officers.</p>
                        </div>
                    </div>
                    <Accordion type="single" collapsible className="p-6 mt-6 rounded-[16px] bg-[#E7E7E9]">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>View my complete user interview notes</AccordionTrigger>
                            <AccordionContent>
                                <img src={UnabridgedUserInterviews} alt="Unabridged user interview" className='w-2/3 mx-auto mt-[1rem]' />
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
                <div>
                    <b className="italic text-[#858591] font-normal text-[20px] font-['Times_New_Roman']">Define</b>
                    <h2 className="text-[36px] text-[#0B0B23] italic font-normal leading-normal font-['Times_New_Roman']">How can we help our users?</h2>
                    <p>Based on the user research I had done so far, I synthesized my pain points and user goals for 2 personas: <b className='text-[#0B0B23]'>club presidents and prospective members</b>.</p>
                    <img src={personagoals} alt="Persona goals" className='w-full mx-auto mt-[1rem]' />
                    <Accordion type="single" collapsible className="p-6 mt-6 rounded-[16px] bg-[#E7E7E9]">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>View my complete user persona diagrams</AccordionTrigger>
                            <AccordionContent>
                                <img src={prestonpersona} alt="User persona" className='w-full mx-auto mt-[1rem]' />
                                <img src={nunapersona} alt="User persona" className='w-full mx-auto mt-[1rem]' />
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
                <div>
                    <b className="italic text-[#858591] font-normal text-[20px] font-['Times_New_Roman']">Ideate</b>
                    <h2 className="text-[36px] text-[#0B0B23] italic font-normal font-['Times_New_Roman']">Explorating solutions with developers</h2>
                    <p>Next, I circle-backed with the developers and began exploring solutions. I found it essential to include developers in our ideation phase not only for technical feasibility but also since they fit into our target user group.</p>
                    <img src={GoalFeature} alt="Goal-feature mapping" className='w-full mx-auto mt-[1rem]' />
                    <Accordion type="single" collapsible className="p-6 mt-6 rounded-[16px] bg-[#E7E7E9]">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>View my complete use case identification diagram, pain point-feature mapping, and information architecture that shaped the team's initial concepts.</AccordionTrigger>
                            <AccordionContent>
                                <img src={ideate} alt="Ideation on Figjam" className='w-full mx-auto mt-[1rem]' />
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
                <div>
                    <b className="italic text-[#858591] font-normal text-[20px] font-['Times_New_Roman']">Prototype</b>
                    <h2 className="text-[36px] text-[#0B0B23] italic font-normal leading-normal font-['Times_New_Roman']">Our workflow</h2>
                    <p>Following the agile nature, the developers and I worked in parallel, continuously iterating and building off of each other's work, for the duration of the project.</p>
                    <Accordion type="single" collapsible className="p-6 mt-6 rounded-[16px] bg-[#E7E7E9]">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>View my low-fidelity wireframes, which I handed off to the developers 2 months into the project.</AccordionTrigger>
                            <AccordionContent>
                                <img src={lofiwireframes} alt="Low-fidelity wireframes" className='w-full mx-auto mt-[1rem]' />
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
                <div>
                    <b className="italic text-[#858591] font-normal text-[20px] font-['Times_New_Roman']">Prototype</b>
                    <h2 className="text-[36px] text-[#0B0B23] italic font-normal font-['Times_New_Roman']">Establish visual design</h2>
                    <p>The team decided early on to use <a href='https://ui.shadcn.com/' target="_blank" rel="noopener noreferrer" className='underline'>Shadcn's UI library⭜</a> and the <a href='https://lucide.dev/icons/' target="_blank" rel="noopener noreferrer" className='underline'>Lucide Icon library⭜</a> due to their growing popularity in the web development sphere and its minimalistic and clean design. Shadcn also employs <a href='https://ui.shadcn.com/colors' target="_blank" rel="noopener noreferrer" className='underline'>Tailwind CSS⭜</a> color palettes. I moved forward with the “Slate” color family ー to represent stability and reliability ー and the “Amber” color family ー for its energetic and optimistic touch.</p>
                    <p>For the logo, I created a vector portal that almost mimics the strokes of “O” and “P” for “Org Portal” using the same colorway.</p>
                    <img src={visualdesignsystem} alt="Visual design system" className='w-3/4 mx-auto mt-[1rem]' />
                </div>
                <div>
                    <b className="italic text-[#858591] font-normal text-[20px] font-['Times_New_Roman']">Test</b>
                    <h2 className="text-[36px] text-[#0B0B23] italic font-normal leading-normal font-['Times_New_Roman']">Usability testing</h2>
                    <p>I conducted <b className='text-[#0B0B23]'>4 moderated usability tests</b>, validating my designs and providing valuable feedback for the team.</p>
                    <img src={UIUXValidation} alt="Results from usability tests" className='w-1/2 mx-auto mt-[1rem]' />
                    <Accordion type="single" collapsible className="p-6 mt-6 rounded-[16px] bg-[#E7E7E9]">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>View my complete usability test notes.</AccordionTrigger>
                            <AccordionContent>
                                <img src={UnabridgedUsabilityTests} alt="Notes from usability tests" className='w-1/2 mx-auto mt-[1rem]' />
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
                <div>
                    <b className="italic text-[#858591] font-normal text-[20px] font-['Times_New_Roman']">Solution</b>
                    <h2 className="text-[36px] text-[#0B0B23] italic font-normal leading-normal font-['Times_New_Roman']">UI/UX iteration & design decisions</h2>
                    <p><b className='text-[#0B0B23]'>Discussions with users, developers, and applying UX design principles led to constant iterations</b>. I want to highlight my top 4 design decisions I made to fulfil user needs and technical constraints.</p>
                </div>
                <div className='flex w-2/3 flex-col gap-[12px] mx-auto'>
                    <h3 className="text-[27px] text-[#0B0B23] italic font-normal leading-normal font-['Times_New_Roman']">Search & filter</h3>
                    <p>I divided the search and filter into <b className='text-[#0B0B23]'>separate zones for clarity and accessibility</b>. In the final design, all filter options can be directly accessed, in addition to a date range filter which users suggested.</p>
                    <img src={orgportal1} alt="Mockup of OrgPortal" className='mt-4' />

                    <h3 className="mt-[2rem] text-[27px] text-[#0B0B23] italic font-normal leading-normal font-['Times_New_Roman']">Officer-side event actions</h3>
                    <p>Officers access and take actions on events through Event Modals. In my first drafts of the Event Modal, I had each of the action buttons laid out in the modal, but this layout became convoluted as the dev team added more functionalities. I decided to <b className='text-[#0B0B23]'>simplify</b> the multiple action buttons into a single batch-action button, with a <b className='text-[#0B0B23]'>quick access option</b>.</p>
                    <img src={orgportal2} alt="Mockup of OrgPortal" className='mt-4' />

                    <h3 className="mt-[2rem] text-[27px] text-[#0B0B23] italic font-normal leading-normal font-['Times_New_Roman']">Viewing members in data tables</h3>
                    <p>During user interviews, several metrics were mentioned. As such, I tried to incorporate them all, but it resulted in a data table where information was both convoluted and hard to access. I revisited my user research, omitted more niche data columns, <b className='text-[#0B0B23]'>opted for a cleaner data table</b> with pagination, and added a member-specific action button for further <b className='text-[#0B0B23]'>quick access</b>.</p>
                    <p>Additionally, I added an action button specific to the member, allowing for further quick access.</p>
                    <img src={orgportal3} alt="Mockup of OrgPortal" className='mt-4' />

                    <h3 className="mt-[2rem] text-[27px] text-[#0B0B23] italic font-normal leading-normal font-['Times_New_Roman']">Adjusting event and form responses</h3>
                    <p>Org Portal allowed for club members and curious students alike to RSVP to events. However, a major design flaw I noticed later on was that the user could not change their response past the initial click; the user would be frustrated and the club would be misinformed. As such, I added a dropdown option to both the event and form response buttons to account for this.</p>
                    <img src={orgportal4} alt="Mockup of OrgPortal" className='w-3/4 mx-auto mt-4' />
                </div>
                <div>
                    <b className="italic text-[#858591] font-normal text-[20px] font-['Times_New_Roman']">Solution</b>
                    <h2 className="text-[36px] text-[#0B0B23] italic font-normal leading-normal font-['Times_New_Roman']">A student org portal, built by a student org</h2>
                    <div className='flex w-3/4 flex-col gap-[12px] mx-auto'>
                        <img src={final01} alt="Notes" className='mt-[2rem]' />
                        <p className="italic font-normal text-[24px] font-['Times_New_Roman']">Your homebase for your student orgs and any upcoming events!</p>
                        
                        <img src={final02} alt="Notes" className='mt-[2rem]' />
                        <p className="italic font-normal text-[24px] font-['Times_New_Roman']">A clear snapshot of the student organization, from their socials to their upcoming events!</p>

                        <img src={final03} alt="Notes" className='mt-[2rem]' />
                        <p className="italic font-normal text-[24px] font-['Times_New_Roman']">Quickly browse through what events your clubs are hosting, and manage which ones you are attending!</p>
                    
                        <img src={final04} alt="Notes" className='mt-[2rem] w-3/4 mx-auto' />
                        <p className="italic font-normal text-[24px] font-['Times_New_Roman'] w-3/4 mx-auto">Seamlessly find and manage members!</p>

                        <img src={final05} alt="Notes" className='mt-[2rem] w-3/4 mx-auto' />
                        <p className="italic font-normal text-[24px] font-['Times_New_Roman'] w-3/4 mx-auto">Monitor how your club is growing, and easily pull metrics!</p>
                    </div>
                </div>

                <div>
                    <b className="italic text-[#858591] font-normal text-[20px] font-['Times_New_Roman']">Next steps</b>
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className='mt-[1rem] p-6 rounded-[20px] border border-[#858591]'>
                            <h3 className="text-[27px] text-[#0B0B23] italic font-normal leading-normal font-['Times_New_Roman']">Style standardization⋆.*･</h3>
                            <p>Org Portal is the longest and largest UI design project I have worked on to date, meaning that I was still evolving in terms of both Figma and design skills. I am actively updating the styles in my wireframes for both usability and consistency with the Shadcn UI design system.</p>
                        </div>
                        <div className='mt-[1rem] p-6 rounded-[20px] border border-[#858591]'>
                            <h3 className="text-[27px] text-[#0B0B23] italic font-normal leading-normal font-['Times_New_Roman']">Documentation✧.*</h3>
                            <p>Thorough and up-to-date documentation is necessary to ensure that my Figma file accurately translates to a fully-fleshed out web application!</p>
                        </div>
                        <div className='mt-[1rem] p-6 rounded-[20px] border border-[#858591]'>
                            <h3 className="text-[27px] text-[#0B0B23] italic font-normal leading-normal font-['Times_New_Roman']">Lay the groundwork for stretch goals˙⋆✮</h3>
                            <p>Many promising ideas got scrapped early-on or backlogged due to scope creep. I will work on documenting my thought process for Org Portal's stretch goals for future designers and developers alike!</p>
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

export default OrgPortal