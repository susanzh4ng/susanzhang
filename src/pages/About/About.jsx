import React from 'react'
import Nav from '@/Components/Nav/Nav';
import Footer from '@/Components/Footer/Footer';
import susan1 from "./AboutImages/Susan1.png";
import susan2 from "./AboutImages/Susan2.png";

const About = () => {
  return (
    <div className="About min-h-screen text-white flex flex-col">
        <Nav/>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="min-h-screen flex w-2/3 flex-col items-start justify-center gap-[24px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 mb-6">
                <img src={susan2} alt="Susan Zhang" className=""/>
                <img src={susan1} alt="Susan Zhang" className=""/>
            </div>
            <h1 className="text-white text-[36px] md:text-[40px] lg:text-[45px] italic font-normal leading-normal font-['Times_New_Roman']">✮ ⋆ ˚｡Hi, I'm Susan!⋆｡°✩</h1>
            <p>Thanks for stopping by! As a student at the University of Texas at Dallas, I am pursuing a degree in Computer Science alongside a minor in Design. I embrace ✧modern✧ and ✩user-oriented✩ applications.</p>
            <p>Currently, I am designing at ACM UTD, helping connect and simplify life for our student body. Previously, I have been a Corporate Relations Assistant for UTDesign — UT Dallas's engineering and computer science senior capstone program — where I designed print media, graphics, and websites for students and C-suite members alike, and a Product Design Intern at Paycom — where I researched and designed solutions for a streamlined onboarding experience — a module used by over 50k clients. </p>
            <p>My story starts with a virtual web development course I took back in high school. Vanilla JavaScript and HTML were enough for me to code a crude website, enough for functionality, but it was CSS that truly enticed me. Web design was the first time I was exposed to the intersection between computer science and art. Due to my varied background, I have been granted opportunities to work closely with and understand the minds of marketing experts, software engineers, and project managers; these experiences have trained me to envision solutions that balance business goals and technical feasibility while keeping users at the forefront.</p>
            <p>Now, the principles of design, from having art as a first love, pour out in an attempt to make a sliver of the Internet my own. User experience design brings me back to the digitization of society, a reminder that advances in artificial intelligence and VR/AR are already a staple in our daily lives; I design to bridge this technology and humanity.</p>
            <p>When I am not designing or tackling a data structures problem set, I can be found either hunched over my sketchbook or a R. F. Kuang novel.</p>
        </div>
      <Footer />
    </div>
  )
}

export default About