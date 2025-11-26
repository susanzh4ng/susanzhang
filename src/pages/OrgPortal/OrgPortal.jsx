import React from 'react'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Nav from '@/Components/Nav/Nav';
import LightFooter from '@/Components/Footer/LightFooter';
import mockup from './OrgPortalImages/orgportal-mockup.png';
import marketresearch from './OrgPortalImages/CompetitorAnalysis.png';
import personagoals from './OrgPortalImages/PersonaGoals.png'
//import prestonpersona from './OrgPortalImages/PrestonthePresidentofaStudentOrganization.png'
//import nunapersona from './OrgPortalImages/NunatheNewStudentLookingtoGetInvolved.png'
import ideate from './OrgPortalImages/Ideation.png';
import lofiwireframes from './OrgPortalImages/Lowfidelitywireframes.png';
import visualdesignsystem from './OrgPortalImages/VisualDesignSystem.png';
import usabilitytests from './OrgPortalImages/UsabilityTests.png';
import orgportal1 from './OrgPortalImages/SearchFilterIteration.png';
import orgportal2 from './OrgPortalImages/OfficerSideEventActions.png';
import orgportal3 from './OrgPortalImages/ViewingMembersinDataTables.png';
import orgportal4 from './OrgPortalImages/AdjustingEventAndFormResponses.png';
import orgportal5 from './OrgPortalImages/orgportal_finals.png';
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
                    <h1 className="text-[45px] text-[#0B0B23] italic font-normal leading-normal font-['Times_New_Roman']">OrgPortal</h1>
                    <b className="italic font-bold text-[20px] text-[#0B0B23] font-['Times_New_Roman']">UT Dallas's student organization portal, built with love by a UT Dallas student organization</b>
                    <br></br>
                    <br></br>
                    <b className="italic font-bold text-[20px] text-[#0B0B23] font-['Times_New_Roman']">Team</b>
                    <p>1 project manager, 6 software developers, and 2 product designers</p>
                    <br></br>
                    <b className="italic font-bold text-[20px] text-[#0B0B23] font-['Times_New_Roman']">Role</b>
                    <p>product designer</p>
                    <br></br>
                    <b className="italic font-bold text-[20px] text-[#0B0B23] font-['Times_New_Roman']">Time</b>
                    <p>January '25 ー present </p>
                </div>
                <div>
                    <p>OrgPortal is a web platform designed to streamline and manage the activities of <b className='text-[#0B0B23]'>The University of Texas at Dallas's clubs and organizations</b> by serving as a <b className='text-[#0B0B23]'>centralized hub for event management, member and officer management, and club discovery</b>. OrgPortal aims to become the default way for all organizations on campus to manage their clubs' public image for UTD students.</p>
                    <p>The OrgPortal team is a subteam of the Development Division from UTD's chapter of the Association for Computing Machinery. <a href='https://acmutd.co/development' target="_blank" rel="noopener noreferrer" className='underline'>ACM Development⭜</a> designs, builds, and maintains web applications that support ACM UTD's operations and member interactions.</p>
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
                            <p>Design a web platform that acts as a centralized hub for event management, member and officer management, and club discovery for the student organizations at UT Dallas, in order <b className='text-[#0B0B23]'>to engage and uplift campus life</b>.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <b className="italic text-[#858591] font-normal text-[20px] font-['Times_New_Roman']">Empathize</b>
                    <h2 className="text-[36px] text-[#0B0B23] italic font-normal leading-normal font-['Times_New_Roman']">Observation & hypothesis</h2>
                    <p>A past ACM Development director pitched the original OrgPortal concept during the Fall '24 school semester. At the time, he had one overarching pain point to address: <b className='text-[#0B0B23]'>unlike other schools in the overarching UT system, UT Dallas lacked a consolidated student organization portal</b>. UT Dallas's <b className='text-[#0B0B23]'>+400 registered student organizations' operations were scattered</b> across countless social media pages, Notion boards, and Google Suite accounts, and students largely discovered clubs by once-a-semester fairs or word-of-mouth.</p>
                    <p>ACM Development worked to close this gap by hiring officers during the following winter break, just in time for a full software development team starting in the Spring '25 semester. At the time, the ACM Development officers had hypothesize that <b className='text-[#0B0B23]'>UT Dallas students need role-based permissions, event management, and accessible club overviews in order to streamline their student organization experience</b>.</p>
                </div>
                <div>
                    <b className="italic text-[#858591] font-normal text-[20px] font-['Times_New_Roman']">Empathize</b>
                    <h2 className="text-[36px] text-[#0B0B23] italic font-normal leading-normal font-['Times_New_Roman']">Target users</h2>
                    <p>OrgPortal aimed to address deficiencies ranging from conveniently discovering new clubs to organizing officer meetings. As such, we focused on students who are:</p>
                    <ul className='mt-[1rem] list-disc'>
                        <li>17-25 years old</li>
                        <li>Club presidents, officers, and members looking for updates</li>
                        <li>Students looking to make connections on campus</li>
                    </ul>
                </div>
                <div>
                    <b className="italic text-[#858591] font-normal text-[20px] font-['Times_New_Roman']">Empathize</b>
                    <h2 className="text-[36px] text-[#0B0B23] italic font-normal leading-normal font-['Times_New_Roman']">User interviews</h2>
                    <p>I kicked off user research by listening to what current club presidents and vice presidents at UTD had to say. <b className='text-[#0B0B23]'>This stage added valuable context to our initial hypothesis</b>.</p>
                    <p>We found that …</p>
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
                </div>
                <div>
                    <b className="italic text-[#858591] font-normal text-[20px] font-['Times_New_Roman']">Empathize</b>
                    <h2 className="text-[36px] text-[#0B0B23] italic font-normal leading-normal font-['Times_New_Roman']">Market research</h2>
                    <p>Intrigued by the 19 digital tools used by our user interviewees, I was interested in what products solved a similar problem used by hopeful club members.</p>
                    <img src={marketresearch} alt="Market research" className='w-full mx-auto mt-[1rem]' />
                    <p className='mt-[1rem]'>Each of our competitors had Event Discovery functionalities, <b className='text-[#0B0B23]'>supporting our hypothesis that event organization is a crucial goal of our users</b>. Additionally, of the 3 platforms, UNT Student Activities OrgSync is the most similar to OrgPortal's target audience and goals. Therefore, OrgPortal could take the <b className='text-[#0B0B23]'>opportunity to provide a better navigation and recommendation algorithm in order to set us apart from other market competitors</b>.</p>
                </div>
                <div>
                    <b className="italic text-[#858591] font-normal text-[20px] font-['Times_New_Roman']">Define</b>
                    <h2 className="text-[36px] text-[#0B0B23] italic font-normal leading-normal font-['Times_New_Roman']">Problem & goal statements</h2>
                    <p>Based on the user research I had done so far, with emphasis given to user interviews and casual conversations with fellow students, I synthesized my findings for <b className='text-[#0B0B23]'>2 personas</b>:</p>
                    <img src={personagoals} alt="Persona goals" className='w-1/2 mx-auto mt-[1rem]' />
                    <div className="mt-[1rem] p-6 rounded-[20px] border border-[#858591]">
                        <h3 className="text-[27px] text-[#0B0B23] italic font-bold font-['Times_New_Roman']">President of a student organization persona</h3>
                        <b className="italic font-normal text-[24px] text-[#0B0B23] font-['Times_New_Roman']">Problem statement</b>
                        <p>The president of a student organization is trying to enhance communication for officers and members and promote the organization's events, but operations are segmented and tedious due to the various digital tools and officers he must check-in with, which makes them feel irritated, unsupported, and not fully in control of his own student organization.</p>
                        <br></br>
                        <b className="italic font-normal text-[24px] text-[#0B0B23] font-['Times_New_Roman']">Goal statement</b>
                        <p>OrgPortal will let users <b className='text-[#0B0B23]'>streamline operations and promote engagement</b> of their student organization, which will affect student organization officers, members, and hopeful members by providing role-based access and event management features, which can be measured by time saved on administrative tasks and increase in student organization interest and event attendance.</p>
                    </div>
                    <div className="mt-[1rem] p-6 rounded-[20px] border border-[#858591]">
                        <h3 className="text-[27px] text-[#0B0B23] italic font-bold font-['Times_New_Roman']">New student persona</h3>
                        <b className="italic font-normal text-[24px] text-[#0B0B23] font-['Times_New_Roman']">Problem statement</b>
                        <p>A new student is trying to connect with like-minded people, both socially and professionally, but clubs are hard to discover and daunting even when they do discover them due to dispersed, outdated, and/or hasty methods; this makes them feel anxious about finding their community.</p>
                        <br></br>
                        <b className="italic font-normal text-[24px] text-[#0B0B23] font-['Times_New_Roman']">Goal statement</b>
                        <p>OrgPortal will let users <b className='text-[#0B0B23]'>discover new opportunities</b> tied with student organizations on campus, which will affect student organization officers, members, and hopeful members by providing event/student organization discovery and student organization overview features, which can be measured by an increase in student organization interest and event attendance.</p>
                    </div>
                </div>
                {/*<div>
                    <b className="italic text-[#858591] font-normal text-[20px] font-['Times_New_Roman']">Define</b>
                    <h2 className="text-[36px] italic font-normal leading-normal font-['Times_New_Roman']">User personas</h2>
                    <img src={prestonpersona} alt="User persona" className='w-full mx-auto mt-[1rem]' />
                    <img src={nunapersona} alt="User persona" className='w-full mx-auto mt-[1rem]' />
                </div>*/}
                <div>
                    <b className="italic text-[#858591] font-normal text-[20px] font-['Times_New_Roman']">Ideate</b>
                    <h2 className="text-[36px] text-[#0B0B23] italic font-normal font-['Times_New_Roman']">Explorating solutions with developers</h2>
                    <p>Once my design partner and I had a solid understanding of our problem statement and users' goals, we circle-backed with the developers on our team and began exploring solutions.</p>
                    <p>We shaped our initial thought processes using <b className='text-[#0B0B23]'>use-case identification, pain point-feature mapping, and information architecture brainstorming</b>.</p>
                    <img src={ideate} alt="Ideation on Figjam" className='w-full mx-auto mt-[1rem]' />
                </div>
                <div>
                    <b className="italic text-[#858591] font-normal text-[20px] font-['Times_New_Roman']">Ideate</b>
                    <h2 className="text-[36px] text-[#0B0B23] italic font-normal leading-normal font-['Times_New_Roman']">Mid-fidelity wireframes</h2>
                    <p>These discussions and some classic pen-and-paper wireframing culminated into the following mid-fidelity wireframes. These were our <b className='text-[#0B0B23]'>first fully-fleshed out implementations of our key features and ready to be handed off to the developers</b>!</p>
                    <img src={lofiwireframes} alt="Low-fidelity wireframes" className='w-full mx-auto mt-[1rem]' />
                </div>
                <div>
                    <b className="italic text-[#858591] font-normal text-[20px] font-['Times_New_Roman']">Ideate</b>
                    <h2 className="text-[36px] text-[#0B0B23] italic font-normal font-['Times_New_Roman']">Establish visual design</h2>
                    <p>The team decided early on to use <a href='https://ui.shadcn.com/' target="_blank" rel="noopener noreferrer" className='underline'>Shadcn's UI library⭜</a> and the <a href='https://lucide.dev/icons/' target="_blank" rel="noopener noreferrer" className='underline'>Lucide Icon library⭜</a> due to their growing popularity in the web development sphere and its minimalistic and clean design. Shadcn also employs <a href='https://ui.shadcn.com/colors' target="_blank" rel="noopener noreferrer" className='underline'>Tailwind CSS⭜</a>, which has accessibility-friendly, ready-to-use color palettes. I moved forward with the “Slate” color family ー to represent stability and reliability ー and the “Amber” color family ー for its energetic and optimistic touch.</p>
                    <p>For the logo, I created a vector portal that almost mimics the strokes of “O” and “P” for “OrgPortal” using the same colorway.</p>
                    <img src={visualdesignsystem} alt="Visual design system" className='w-3/4 mx-auto mt-[1rem]' />
                </div>
                <div>
                    <b className="italic text-[#858591] font-normal text-[20px] font-['Times_New_Roman']">Test</b>
                    <h2 className="text-[36px] text-[#0B0B23] italic font-normal leading-normal font-['Times_New_Roman']">Phase I usability testing</h2>
                    <p>While the developer team worked hard on converting my wireframes into a full stack web application, I conducted <b className='text-[#0B0B23]'>2 moderated usability tests</b>. Additionally, the OrgPortal team distributed it with the ACM Development officers for general feedback and bug fixes.</p>
                    <img src={usabilitytests} alt="Notes from usability tests" className='w-1/2 mx-auto mt-[1rem]' />
                </div>
                <div>
                    <b className="italic text-[#858591] font-normal text-[20px] font-['Times_New_Roman']">Solution</b>
                    <h2 className="text-[36px] text-[#0B0B23] italic font-normal leading-normal font-['Times_New_Roman']">UI/UX iteration & design decisions</h2>
                    <p><b className='text-[#0B0B23]'>Discussions with users, developers, and applying UX design principles led to constant iterations</b>. I want to highlight my <b className='text-[#0B0B23]'>top 4 design decisions</b> I made to fulfil user needs and technical constraints.</p>
                </div>
                <div className='flex w-2/3 flex-col gap-[12px] mx-auto'>
                    <h3 className="text-[27px] text-[#0B0B23] italic font-normal leading-normal font-['Times_New_Roman']">Search & filter</h3>
                    <p>I divided the search and filter into separate zones for <b className='text-[#0B0B23]'>clarity and accessibility</b>. In the final design, all filter options can be directly accessed, in addition to a date range filter which users suggested.</p>
                    <img src={orgportal1} alt="Mockup of OrgPortal" />

                    <h3 className="mt-[2rem] text-[27px] text-[#0B0B23] italic font-normal leading-normal font-['Times_New_Roman']">Officer-side event actions</h3>
                    <p>Officers access and take actions on events through Event Modals, where they see an expanded view of the event. To avoid a convoluted layout, I opted for a <b className='text-[#0B0B23]'>single batch-action button</b>. Additionally, officers could access these action options from a “More Button” (⋮) on the event's minimized view, allowing for <b className='text-[#0B0B23]'>quick access</b>.</p>
                    <img src={orgportal2} alt="Mockup of OrgPortal" />

                    <h3 className="mt-[2rem] text-[27px] text-[#0B0B23] italic font-normal leading-normal font-['Times_New_Roman']">Viewing members in data tables</h3>
                    <p>I initially tried to incorporate all metrics mentioned during user interviews, but it resulted in convoluted and hard-to-access information. I revisited my user research, <b className='text-[#0B0B23]'>omitted more niche data columns, and opted for a cleaner data table with pagination</b>.</p>
                    <p>Additionally, I added an action button specific to the member, allowing for further quick access.</p>
                    <img src={orgportal3} alt="Mockup of OrgPortal" />

                    <h3 className="mt-[2rem] text-[27px] text-[#0B0B23] italic font-normal leading-normal font-['Times_New_Roman']">Adjusting event and form responses</h3>
                    <p>Users could RSVP to events but could not change their response past the initial click; the user would be frustrated and the club would be misinformed. As such, I added a dropdown option to both the event and form response buttons to <b className='text-[#0B0B23]'>account for users that have changed their minds</b>.</p>
                    <img src={orgportal4} alt="Mockup of OrgPortal" className='w-3/4 mx-auto' />
                </div>
                <div>
                    <b className="italic text-[#858591] font-normal text-[20px] font-['Times_New_Roman']">Solution</b>
                    <h2 className="text-[36px] text-[#0B0B23] italic font-normal leading-normal font-['Times_New_Roman']">Current high-fidelity designs</h2>
                    <p>Of the 70+ high-fidelity web wireframes (excluding the 100+ left in low-and-mid fidelity) I handed off to the developer team, I wanted to showcase the following screens ready for launch.</p>
                    <img src={orgportal5} alt="Notes" className='w-full mx-auto mt-[1rem]' />
                </div>

                <div>
                    <b className="italic text-[#858591] font-normal text-[20px] font-['Times_New_Roman']">Next steps</b>
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className='mt-[1rem] p-6 rounded-[20px] border border-[#858591]'>
                            <h3 className="text-[27px] text-[#0B0B23] italic font-normal leading-normal font-['Times_New_Roman']">High-fidelity mobile wireframes✧.*</h3>
                            <p>While OrgPortal is a web app, the team anticipates that the majority of club members will be accessing it on the phones, especially if their student organizations use the Event QR code feature. The OrgPortal team and I are working hard to ensure that my designs translate responsively.</p>
                        </div>
                        <div className='mt-[1rem] p-6 rounded-[20px] border border-[#858591]'>
                            <h3 className="text-[27px] text-[#0B0B23] italic font-normal leading-normal font-['Times_New_Roman']">Style standardization⋆.*･</h3>
                            <p>OrgPortal is the longest and largest UI design project I have worked on to date, meaning that I was still evolving in terms of both Figma and design skills. I am actively updating the styles in my wireframes for both usability and consistency with the Shadcn UI design system.</p>
                        </div>
                        <div className='mt-[1rem] p-6 rounded-[20px] border border-[#858591]'>
                            <h3 className="text-[27px] text-[#0B0B23] italic font-normal leading-normal font-['Times_New_Roman']">Lay the groundwork for stretch goals˙⋆✮</h3>
                            <p>Many promising ideas got scrapped early-on or backlogged due to scope creep. I will work on documenting my thought process for OrgPortal's stretch goals for future designers and developers alike!</p>
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