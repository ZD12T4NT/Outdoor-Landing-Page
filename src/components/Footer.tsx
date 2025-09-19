'use client';

import Link from 'next/link';
import Button from './Button';

type FooterLinkGroup = {
  title: string;
  links: { label: string; href: string }[];
};

type FooterProps = {
  footerText: string;
  linkGroups: FooterLinkGroup[];
  socialLinks: { href: string; icon: JSX.Element }[];
  imageSrc: string;
};


const Footer = ({ footerText, linkGroups, socialLinks }: FooterProps) => {
  return (
    <footer className="bg-black text-white pt-20 pb-10 px-6 md:px-12 lg:px-20 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
        {/* Left Column */}
        <div className="flex flex-col gap-3 align-middle h-min overflow-hidden p-0 relative">
          <Link href={'/'} className="text-white text-3xl font-medium">{footerText}</Link>
          <p className="text-white/50 md:max-w-xs text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit suspendisse varius enim in eros.</p>
           <Button text="Learn More" variant="primary" href="/" />
        </div>

        {/* Dynamic Link Groups */}
        <div className="grid grid-cols-3 md:grid-cols-4 gap-10">
          {linkGroups.map((group, idx) => (
            <div key={idx}>
              <h4 className="mb-4 text-white/50 text-base font-light">{group.title}</h4>
              <ul className="space-y-2 text-white">
                {group.links.map((link, i) => (
                  <li key={i} className='overflow-hidden'>
                      <Link
                      href={link.href}
                      className="group relative block text-lg font-light text-white"
                    >
                      {/* Normal text */}
                      <span className="block transition-transform duration-300 group-hover:-translate-y-full">
                        {link.label}
                      </span>

                      {/* Hover text (clone underneath) */}
                      <span className="absolute left-0 top-full block transition-transform duration-300 group-hover:-translate-y-full">
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-white/20 pt-6 flex items-center justify-between text-base text-white relative z-10">
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        <div className="flex justify-center space-x-4">
          {socialLinks.map((social, idx) => (
            <Link key={idx} href={social.href} className="hover:text-white text-[var(--primary)] transition">
              {social.icon}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
