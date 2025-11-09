import React from 'react'
import { CornerRightUp } from 'lucide-react';


const BackToTop = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

  return (
    <div className="BackToTop w-fit mx-auto p-6 rounded-[50px] border-2 border-[#858591] bg-[#CECED3] hover:cursor-pointer" onClick={scrollToTop}>
        <span className="inline-flex items-center gap-[6px]">
            <h3 className="text-[27px] italic font-normal leading-normal font-['Times_New_Roman']">Back to top</h3>
            <CornerRightUp style={{ color: '#0B0B23' }} size={24} />
        </span>
    </div>
  )
}

export default BackToTop