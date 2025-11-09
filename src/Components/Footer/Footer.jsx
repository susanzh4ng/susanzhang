import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'
import { FaLinkedin } from "react-icons/fa";
import { Mail } from 'lucide-react';

const Footer = () => {
  const navigate = useNavigate();
  const [bouncing, setBouncing] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setBouncing(true);
    navigate('/');
        setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 0);
  };

  return (
    <footer className="w-full text-white mt-16 px-6 py-6">
      <div className="mx-auto flex h-16 flex items-center justify-between">
        <div className="flex gap-6 text-sm">
            <span className="inline-flex items-center gap-[8px]">
                <FaLinkedin style={{ color: '#FFF' }} size={24} />
                <a
                    href="https://www.linkedin.com/in/susan-zh4ng/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white italic font-medium text-[20px] font-['Times_New_Roman']"
                >
                    LinkedIn
                </a>
            </span>
            <span className="inline-flex items-center gap-[8px]">
                <Mail style={{ color: '#FFF' }} size={24} />
                <a
                    href="mailto:Susan.Zhang901@gmail.com"
                    className="text-white italic font-medium text-[20px] font-['Times_New_Roman']"
                >
                    Email
                </a>
            </span>
        </div>


        <Link
          onClick={handleClick}
          className={`h-8 block ${bouncing ? 'animate-bounce' : ''}`}
        >
          <img
            src="/susanzhang-white.svg"
            alt="Susan Zhang"
            className="h-8 w-auto"
          />
        </Link>
      </div>
    </footer>
  )
}

export default Footer