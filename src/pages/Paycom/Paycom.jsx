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
                    <h1 className="text-[45px] italic font-normal leading-normal font-['Times_New_Roman']">Paycom Onboarding Dashboard</h1>
                    <b className="italic font-bold text-[20px] font-['Times_New_Roman']">Redesigning Paycom's onboarding experience</b>
                    <br></br>
                    <br></br>
                    <b className="italic font-bold text-[20px] font-['Times_New_Roman']">Team</b>
                    <p>4 product designers</p>
                    <br></br>
                    <b className="italic font-bold text-[20px] font-['Times_New_Roman']">Role</b>
                    <p>product designer</p>
                    <br></br>
                    <b className="italic font-bold text-[20px] font-['Times_New_Roman']">Time</b>
                    <p>May '25 ー August '25</p>
                    <br></br>
                    <b className="italic font-bold text-[20px] font-['Times_New_Roman']">Focus</b>
                    <p>User flows, analyzing user feedback, prototyping, usability testing</p>
                </div>
                <div>
                    <p>Paycom's Applicant Tracking System (ATS) consists of several collaborative modules that streamline information from the prior modules, without a need for data reentry. As product design interns, my team's objective was to redesign ATS's onboarding experience by ideating seamless and intuitive data flows and incorporating analytics to enable users to make data-driven decisions, overall improving the onboarding experience for Paycom's +50k clients.</p>
                    <p>My team and I broke this project down into five phases: research, ideation, design, testing, and iteration.</p>
                    <img src={mockup} alt="Laptop mockup"/>
                </div>
            </div>

            <div className="flex flex-col gap-[48px]">
                <div className='mt-[1rem] p-6 rounded-[20px] border border-[#858591]'>
                    <b className="italic text-[#858591] font-normal text-[20px] font-['Times_New_Roman']">Hold on!</b>
                    <h3 className="text-[27px] italic font-normal leading-normal font-['Times_New_Roman']">This project is not yet public</h3>
                    <p>Interested in seeing my work for Paycom's Onboarding Dashboard? Please shoot me an <a href="mailto:Susan.Zhang901@gmail.com" className="italic underline font-bold font-['Times_New_Roman']"> email</a> and I would love to hop on a call☺</p>
                </div>
                <div>
                    <b className="italic text-[#858591] font-normal text-[20px] font-['Times_New_Roman']">Reflection</b>
                    <div className='mt-[1rem]'>
                        <h3 className="text-[27px] italic font-normal leading-normal font-['Times_New_Roman']">User flows and flows and flows</h3>
                        <p>Prior to the Paycom product design internship, I was largely self-taught, and the few design classes I did take failed to emphasize the importance of user flows. In fact, I had only made 1 user flow prior to starting the internship. However, throughout the course of the internship, I took it upon myself to truly understand the current state of the ATS modules, which resulted in many, many, <b>many</b> user flows. Subsequently, I had a more thorough understanding of how users interact with the modules and was able to help my team better understand how ATS currently handles users' data and the feasibility of our solutions while we were ideating.</p>
                    </div>
                    <div className='mt-[1rem]'>
                        <h3 className="text-[27px] italic font-normal leading-normal font-['Times_New_Roman']">Diversity of thought</h3>
                        <p>My product design team was quite diverse, with me as a computer science major, 1 teammate being a cognitive science major, and 2 teammates being master's students. I was initially worried that my computer science background would hold me back, but it ー combined with my initiative to understand the current state of the ATS modules ー gave me a leg up on understanding and breaking down technical problems.</p>
                    </div>
                    <div className='mt-[1rem]'>
                        <h3 className="text-[27px] italic font-normal leading-normal font-['Times_New_Roman']">Designing with a design system</h3>
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