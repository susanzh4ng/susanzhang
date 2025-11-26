import React from 'react'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Nav from '@/Components/Nav/Nav';
import LightFooter from '@/Components/Footer/LightFooter';
import mockup from './PaycomImages/paycom-mockup.png';
import BackToTop from '@/Components/BackToTop/BackToTop';

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
                    <b className="italic font-bold text-[20px] text-[#0B0B23] font-['Times_New_Roman']">Redesigning Paycom's onboarding experience</b>
                    <br></br>
                    <br></br>
                    <b className="italic font-bold text-[20px] text-[#0B0B23] font-['Times_New_Roman']">Team</b>
                    <p>4 product designers</p>
                    <br></br>
                    <b className="italic font-bold text-[20px] text-[#0B0B23] font-['Times_New_Roman']">Role</b>
                    <p>product designer</p>
                    <br></br>
                    <b className="italic font-bold text-[20px] text-[#0B0B23] font-['Times_New_Roman']">Time</b>
                    <p>May '25 ー August '25</p>
                    <br></br>
                    <b className="italic font-bold text-[20px] text-[#0B0B23] font-['Times_New_Roman']">Focus</b>
                    <p>User flows, analyzing user feedback, prototyping, usability testing</p>
                </div>
                <div>
                    <p>Paycom's Applicant Tracking System (ATS) consists of several collaborative modules that streamline information from the prior modules. As product design interns, my team's objective was to <b className="text-[#0B0B23]">redesign ATS's onboarding experience by ideating seamless and intuitive data flows and incorporating analytics to enable users to make data-driven decisions</b>.</p>
                    <p>My team and I broke this project down into five phases: research, ideation, design, testing, and iteration.</p>
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
                <div className='mt-[1rem] p-6 rounded-[20px] border border-[#858591]'>
                    <b className="italic text-[#858591] font-normal text-[20px] font-['Times_New_Roman']">Hold on!</b>
                    <h3 className="text-[27px] text-[#0B0B23] italic font-normal leading-normal font-['Times_New_Roman']">This project is not yet public</h3>
                    <p>Interested in seeing my work for Paycom's Onboarding Dashboard? Please shoot me an <a href="mailto:Susan.Zhang901@gmail.com" className="italic text-[#0B0B23] underline font-bold font-['Times_New_Roman']"> email</a> and I would love to hop on a call◡̈</p>
                </div>
                <div>
                    <b className="italic text-[#858591] font-normal text-[20px] font-['Times_New_Roman']">Feedback</b>
                    <h2 className="text-[36px] italic text-[#0B0B23] font-normal leading-normal font-['Times_New_Roman']">My and my designs' impact</h2>
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="p-6 rounded-[20px] border border-[#858591]">
                            <p className='text-[18px]'>Understanding the different modules put her in a strategic position to provide a lot of support to the others as they worked through solutions and were able to rely on her for some of this information. Susan encompasses the skills needed to be a talented product designer.</p>
                            <p className="w-full text-right mt-3 text-[18px] text-[#0B0B23] italic font-bold font-['Times_New_Roman']">— Product Design Internship Program Manager✮</p>
                        </div>
                        <div className="p-6 rounded-[20px] border border-[#858591]">
                            <p className='text-[18px]'>This dashboard would help with the reporting I have to manually separate each week.</p>
                            <p className="w-full text-right mt-3 text-[18px] text-[#0B0B23] italic font-bold font-['Times_New_Roman']">— Supervisor of Talent Acquisition꩜</p>
                        </div>
                        <div className="p-6 rounded-[20px] border border-[#858591]">
                            <p className='text-[18px]'>It’s a one-stop-shop for us, instead of having so many other windows open … I'm excited to get this thing going!</p>
                            <p className="w-full text-right mt-3 text-[18px] text-[#0B0B23] italic font-bold font-['Times_New_Roman']">— Pre-Employment Specialist❀</p>
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