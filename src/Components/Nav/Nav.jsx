import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Menu, X } from 'lucide-react';

export default function Nav() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    //{ label: 'Work',  href: '/work' },
    //{ label: 'Play',  href: '/play' },
    { label: 'About', href: '/susanzhang/about' },
    { label: 'Resume', href: 'https://docs.google.com/document/d/1JCxSkpRFRojJKhgMhCiSdJLUzwTu3fvaJTfwFdsCL_0/edit?usp=sharing', external: true },
  ];

  return (
    <header className="fixed top-3 left-3 right-3 z-50">
      <nav className="mx-auto flex h-16 items-center justify-between rounded-[20px] bg-white/70 px-6 backdrop-blur md:px-8">
        
        <Link to="/susanzhang/" className="flex h-8 items-center">
          <img
            src="/susanzhang-black-nostroke.svg"
            alt="Susan Zhang"
            className="h-8 w-auto"
          />
        </Link>

        <div className="flex h-8 items-center"> 
        <ul className="hidden md:flex md:items-center md:gap-6">
          {navLinks.map((l) => (
            <li key={l.label}>
              {l.external ? (
                <span className="inline-flex items-center gap-[4px]">
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="italic font-medium text-[20px] font-['Times_New_Roman']"
                    
                    style={{ color: '#0B0B23' }}
                  >
                    {l.label}
                  </a>
                  <ArrowUpRight style={{ color: '#0B0B23' }} size={20} />
                </span>
              ) : (
                <Link
                  to={l.href}
                  className="italic font-medium text-[20px] font-['Times_New_Roman']"
                  style={{ color: '#0B0B23' }}
                >
                  {l.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden grid h-8 w-8 place-items-center rounded-lg bg-transparent"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
            {open ? (
              <>
                <X style={{ color: '#0B0B23' }} size={24} className="place-self-center" />
              </>
            ) : (
              <>
                <Menu style={{ color: '#0B0B23' }} size={24} className="place-self-center" />
              </>
            )}
        </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <ul className="mt-2 rounded-[20px] bg-white/80 px-6 py-4 backdrop-blur md:hidden" style={{ backgroundColor: 'rgba(255,255,255,0.7)' }}>
          {navLinks.map((l) => (
            <li key={l.label} className="mb-3 last:mb-0">
              {l.external ? (
                <span className="inline-flex items-center gap-[4px]">
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="italic font-medium text-[20px] font-['Times_New_Roman']"
                    
                    style={{ color: '#0B0B23' }}
                  >
                    {l.label}
                  </a>
                  <ArrowUpRight style={{ color: '#0B0B23' }} size={20} />
                </span>
              ) : (
                <Link
                  to={l.href}
                  className="italic font-medium text-[20px] font-['Times_New_Roman']"
                  style={{ color: '#0B0B23' }}
                >
                  {l.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}