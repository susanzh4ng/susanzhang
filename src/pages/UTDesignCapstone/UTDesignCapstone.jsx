import React from 'react'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Nav from '@/Components/Nav/Nav';
import LightFooter from '@/Components/Footer/LightFooter';
import mockup from './UTDesignCapstoneImages/utdesigncapstone-mockup.png';
import utdesign1 from './UTDesignCapstoneImages/utdesign-1.png';
import utdesign2 from './UTDesignCapstoneImages/utdesign-2.png';
import utdesign3 from './UTDesignCapstoneImages/utdesign-3.png';
import utdesign4 from './UTDesignCapstoneImages/utdesign-4.png';
import utdesign5 from './UTDesignCapstoneImages/utdesign-5.png';
import BackToTop from '@/Components/BackToTop/BackToTop';

const UTDesignCapstone = () => {
    const { hash } = useLocation();
    useEffect(() => {
        if (!hash) return;
        const el = document.getElementById(hash.slice(1));
        if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, [hash]);

  return (
    <div id="utdesign" className="UTDesignCapstone light-mode min-h-screen text-white flex flex-col">
        <Nav/>

        <div className="mt-[6rem] min-h-screen flex w-4/5 flex-col items-start justify-center gap-[24px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                <div>
                    <h1 className="text-[45px] italic font-normal leading-normal font-['Times_New_Roman']">UTDesign® Capstone</h1>
                    <b className="italic font-bold text-[20px] font-['Times_New_Roman']">Redesigning UTDesign® Capstone's websites</b>
                    <br></br>
                    <br></br>
                    <b className="italic font-bold text-[20px] font-['Times_New_Roman']">Team</b>
                    <p>5 corporate relations associates, 7 web developers, 1 web designer</p>
                    <br></br>
                    <b className="italic font-bold text-[20px] font-['Times_New_Roman']">Role</b>
                    <p>web designer</p>
                    <br></br>
                    <b className="italic font-bold text-[20px] font-['Times_New_Roman']">Time</b>
                    <p>Spring '24 ー Summer '24 </p>
                    <br></br>
                    <b className="italic font-bold text-[20px] font-['Times_New_Roman']">Links</b>
                    <br></br>
                    <a href='https://utdesign.utdallas.edu/' target="_blank" rel="noopener noreferrer">utdesign.utdallas.edu</a>
                    <br></br>
                    <a href='https://utdesignstudents.utdallas.edu' target="_blank" rel="noopener noreferrer">utdesignstudents.utdallas.edu</a>
                    <br></br>
                    <br></br>
                </div>
                <div>
                    <p>UTDesign is the engineering and computer science capstone program for the University of Texas at Dallas. It is one of the top undergraduate capstone programs in the country, with 20 national accolades, in counting.</p>
                    <p>As the sole web designer on the project, I was tasked to redesign their websites to improve the user experience and visual design of several pages. I also facilitated communication between the UTDesign corporate relations team ー the product owner ー and the UT Dallas web services team ー the product developer. </p>
                    <img src={mockup} alt="Mockup of UTDesign Capstone" className=""/>
                </div>
            </div>

            <div className="flex flex-col gap-[48px]">
                <div>
                    <b className="italic text-[#858591] font-normal text-[20px] font-['Times_New_Roman']">Establishing context</b>
                    <h2 className="text-[36px] italic font-normal leading-normal font-['Times_New_Roman']">Designing for UTDesign</h2>
                    <p>I was tasked with redesigning two UTDesign® Capstone websites: the main company-side website, and the student/advisor-side website.</p>
                    <p>I was brought on in the middle of the project cycle, replacing their previous designer. Their previous web designer had already created the initial high-fidelity wireframes, but he sadly had to transfer positions before the project's completion. As such, I got brought in just in time for the first website review between the UTDesign corporate relations team ー the product owner ー and the UT Dallas web services team ー the product developer. </p>
                    <p>Additionally, by the time I got brought on, there were clear goals and definitions for what each webpage was and was intended to do; my role  was to ideate and create wireframes to further enforce each webpage's purpose and correct any visual inconsistencies.</p>
                </div>
                <div>
                    <b className="italic text-[#858591] font-normal text-[20px] font-['Times_New_Roman']">Establishing context</b>
                    <h2 className="text-[36px] italic font-normal leading-normal font-['Times_New_Roman']">UTDesign® Capstone project details</h2>
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="p-6 rounded-[20px] border border-[#858591]">
                            <b className="italic text-[#858591] font-bold text-[18px] font-['Times_New_Roman']">Goals</b>
                            <p>Improve the user experience of the video library and news & events pages, correct any visual design inconsistencies, and attract company leaders to propose a UTDesign® Capstone Project.</p>
                        </div>
                        <div className="p-6 rounded-[20px] border border-[#858591]">
                            <b className="italic text-[#858591] font-bold text-[18px] font-['Times_New_Roman']">Target users</b>
                            <p>C-suite and other high ranking members of companies with offices located in DFW, TX</p>
                        </div>
                        <div className="p-6 rounded-[20px] border border-[#858591]">
                            <b className="italic text-[#858591] font-bold text-[18px] font-['Times_New_Roman']">Design criteria</b>
                            <p><b>Prioritizing flow</b>: all important information should be correlated and easily accessible for a clear understanding of UTDesign's impact in order to induce project proposals.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <b className="italic text-[#858591] font-normal text-[20px] font-['Times_New_Roman']">Establishing context</b>
                    <h2 className="text-[36px] italic font-normal leading-normal font-['Times_New_Roman']">UTDesign Students & Advisors project details</h2>
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="p-6 rounded-[20px] border border-[#858591]">
                            <b className="italic text-[#858591] font-bold text-[18px] font-['Times_New_Roman']">Goals</b>
                            <p>Improve the user experience of the guidelines and student resources pages and correct any visual design inconsistencies.</p>
                        </div>
                        <div className="p-6 rounded-[20px] border border-[#858591]">
                            <b className="italic text-[#858591] font-bold text-[18px] font-['Times_New_Roman']">Target users</b>
                            <p>Both UT Dallas engineering and computer science professors and senior-level students, in addition to technical employees of companies with offices located in DFW, TX.</p>
                        </div>
                        <div className="p-6 rounded-[20px] border border-[#858591]">
                            <b className="italic text-[#858591] font-bold text-[18px] font-['Times_New_Roman']">Design criteria</b>
                            <p><b>Prioritizing flow</b>: all important information should be correlated and easily accessible so that students and advisors alike have a clear course to necessary documents and resources vital for a successful UTDesign® Capstone project.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <b className="italic text-[#858591] font-normal text-[20px] font-['Times_New_Roman']">Problem statement</b>
                    <h2 className="text-[36px] italic font-normal leading-normal font-['Times_New_Roman']">Outdated and obsolete</h2>
                    <p>The original UTDesign site served many students and CEOs alike for 10+ years. However, it had many user experience issues:</p>
                    <div className="mt-[1rem] flex flex-col md:flex-row gap-6">
                        <div className="p-6 rounded-[20px] border border-[#9D6A74]">
                            <p>Website's primary goal ー UTDesign awareness ー no longer aligned with UTDesign's primary goal ー obtaining more projects</p>
                        </div>
                        <div className="p-6 rounded-[20px] border border-[#9D6A74]">
                            <p>Provided inconvenient features (i.e. company leader could schedule a meeting that would not align with the UTDesign associate's schedule)</p>
                        </div>
                        <div className="p-6 rounded-[20px] border border-[#9D6A74]">
                            <p>Stagnant navigation</p>
                        </div>
                    </div>
                    <div className="mt-[1rem] flex flex-col md:flex-row gap-6">
                        <div className="p-6 rounded-[20px] border border-[#9D6A74]">
                            <p>Did not prioritize primary audience</p>
                        </div>
                        <div className="p-6 rounded-[20px] border border-[#9D6A74]">
                            <p>Search & filter functionality of the Past Projects Page was broken</p>
                        </div>
                        <div className="p-6 rounded-[20px] border border-[#9D6A74]">
                            <p>Content in the News & Events and Video Library Pages was unsorted</p>
                        </div>
                    </div>
                    <p className="mt-[1rem]">Additionally, we felt that the old website's visual design was too busy and even overwhelming. We wanted to consolidate and simplify it, especially so that it would fit the brand and style guidelines of a proper UT Dallas website.</p>
                </div>
                <div>
                    <b className="italic text-[#858591] font-normal text-[20px] font-['Times_New_Roman']">Solution</b>
                    <h2 className="text-[36px] italic font-normal leading-normal font-['Times_New_Roman']">Core functionalities, reimagined</h2>
                    <p>After familiarizing myself with the design dilemmas, I began creating design solutions for each of the target pages. After extensive meetings and communication with both the UTDesign team and the UT Dallas Web Services team, we were able to launch our finished product just in time for the new school semester: company leaders could browse our site for inspiration for an upcoming project and students could access much-needed resources.</p>
                </div>
                <div className='flex w-2/3 flex-col gap-[12px] mx-auto'>
                    <h3 className="text-[27px] italic font-normal leading-normal font-['Times_New_Roman']">Propose a project with ease</h3>
                    <p>Proposing a project is now easily accessible to a company leader ー as opposed to having to meticulously contact a UTDesign staff member first. Additionally based on Click-Map Analysis, these buttons are the most popular feature on our website, successfully accomplishing our goal of generating more projects!</p>
                    <img src={utdesign1} alt="Mockup of UTDesign Capstone" />

                    <h3 className="mt-[2rem] text-[27px] italic font-normal leading-normal font-['Times_New_Roman']">Catch up on news and events</h3>
                    <p>Now, you can look through UTDesign's latest news, events, achievements, and more! For this page, I took it upon myself to learn WordPress to sort posts and create categories and their respective pages.</p>
                    <img src={utdesign2} alt="Mockup of UTDesign Capstone" />

                    <h3 className="mt-[2rem] text-[27px] italic font-normal leading-normal font-['Times_New_Roman']">Explore our video library</h3>
                    <p>Watch UTDesign's testimonial, overview, and project showcase videos with ease! Additionally, I proposed for ellipsis truncation on video descriptions that exceeded a line limit to make the design more consistent.</p>
                    <img src={utdesign3} alt="Mockup of UTDesign Capstone" />

                    <h3 className="mt-[2rem] text-[27px] italic font-normal leading-normal font-['Times_New_Roman']">Directly view guidelines</h3>
                    <p>Over the course of this project, I proposed to convert PDF files that were externally linked on the website to be displayed on the website itself, making the viewing process more seamless for users!</p>
                    <img src={utdesign4} alt="Mockup of UTDesign Capstone" />
                </div>
                <div>
                    <b className="italic text-[#858591] font-normal text-[20px] font-['Times_New_Roman']">Documentation</b>
                    <h2 className="text-[36px] italic font-normal leading-normal font-['Times_New_Roman']">Achieveing consistency without a design system</h2>
                    <p>As my team was working directly with UT Dallas's Web Services team, I was designing with the double edge sword of CampusPress ー a web content management system specifically for universities ー's pre-made design blocks. In fact, some of my initial designs were rejected solely because there did not exist a CampusPress block that would accomplish it. I soon learned to design faithfully to the UTDesign web style guidelines. As such, there was no need for me to personally create a design system ー color palette, typography, asset design, etc. ー as it already existed within the web team's workflow. </p>
                    <p>That also freed me from having to create the standard documentation that product designers typically convey to software developers. Instead, my documentation consisted of annotated screenshots of the website compared to my own wireframes with corresponding comments of what we wanted to be improved on. Before I was brought on, the Web Services team was only given the base wireframes without context; I was complimented by a web lead that my new initiative was helpful to their team's workflow!</p>
                    <img src={utdesign5} alt="Notes" className='w-2/3 mx-auto mt-[1rem]' />
                </div>

                <div>
                    <b className="italic text-[#858591] font-normal text-[20px] font-['Times_New_Roman']">Reflection</b>
                    <div className='mt-[1rem] p-6 rounded-[20px] border border-[#858591]'>
                        <h3 className="text-[27px] italic font-normal leading-normal font-['Times_New_Roman']">Designing for a CMS</h3>
                        <p>As my team was working directly with UT Dallas's Web Services team, I was designing with the double edge sword of CampusPress ー a web content management system specifically for universities ー's pre-made design blocks. In fact, some of my initial designs were rejected solely because there did not exist a CampusPress block that would accomplish it. I soon learned to design faithfully to the UTDesign web style guidelines. As such, there was no need for me to personally create a design system ー color palette, typography, asset design, etc. ー as it already existed within the web team's workflow. </p>
                    </div>
                    <div className='mt-[1rem] p-6 rounded-[20px] border border-[#858591]'>
                        <h3 className="text-[27px] italic font-normal leading-normal font-['Times_New_Roman']">Importance of speaking up</h3>
                        <p>I was the newest and the youngest member on the team, and I was initially too hesitant to bring up any concerns, thinking that if a senior member had not pointed it out, then it was not my place. Later, when I finally did mention our outstanding design problems, I was thanked and acknowledged for pointing them out!</p>
                    </div>
                    <div className='mt-[1rem] p-6 rounded-[20px] border border-[#858591]'>
                        <h3 className="text-[27px] italic font-normal leading-normal font-['Times_New_Roman']">A corporate workflow</h3>
                        <p>Though my position was much more relaxed that a traditional corporate role, I was still able to experience what it was like to work in an actual corporate environment: namely, juggling multiple projects at once. I was constantly in a cycle of designing, asking immediate peers for approval, scheduling and meeting with external parties to gain their approval, and iterating my ideas based on their feedback ー for several projects. That entire time, I had to judge and balance the most important tasks at hand not only based on my workload, but for my coworkers' too.</p>
                    </div>
                </div>
                <BackToTop />
            </div>    
        </div>
      <LightFooter />
    </div>
  )
}

export default UTDesignCapstone