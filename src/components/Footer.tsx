'use client';

import Link from 'next/link';
import Button from './Button';



type FooterProps = {
  footerText: string;

  socialLinks: { href: string; icon: JSX.Element }[];
  imageSrc: string; // new prop for left-side image
};

const Footer = ({ footerText, socialLinks, imageSrc }: FooterProps) => {
  return (
    <footer className="pt-20 px-4 md:px-2 relative z-10">
      <div className="flex flex-col md:flex-row gap-1 items-end">
        {/* Left Column - Image */}
          <div className="relative md:w-[35%] md:h-[300px] overflow-hidden rounded-xl">
            <img src={imageSrc} alt="Footer Visual" className="object-cover w-full h-full" />
          </div>

        {/* Right Column - Text + Links */}
        <div className="flex flex-row gap-8 items-end justify-between md:h-[300px] md:w-[65%] bg-[#DAD6CD] rounded-xl p-10">
          {/* Branding + Description */}
         <div className="flex flex-col gap-3 h-full">
           <div className="flex flex-col gap-3 h-full">
            <Link href="/" className="text-black text-5xl font-medium">{footerText}</Link>
            <p className="text-black md:max-w-sm text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
            </p>
          </div>

            <Button text="Learn More" variant="primary" href="/" />
         </div>

          <div className="flex gap-2">
              {socialLinks.map((social, idx) => (
            <Link key={idx} href={social.href} className="hover:text-black/60 text-black bg-white rounded-full w-10 h-10 flex justify-center items-center transition">
              {social.icon}
            </Link>
          ))}
          </div>
        </div>
      
      </div>

      {/* Bottom Bar */}
      <div className="mt-5 border-t  pt-6 flex flex-col md:flex-row items-center justify-between text-base text-black">
        <span>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</span>
          <ul className='flex gap-5'>
            <li>
              <Link className='text-lg' href="/">Manage cookies</Link>
            </li>
            <li>
              <Link className='text-lg' href="/">Cookie Policy</Link>
            </li>
            <li>
              <Link className='text-lg' href="/">Privacy Policy</Link>
            </li>
            <li>
              <Link className='text-lg' href="/">Terms & Conditions</Link>
            </li>
          </ul>
      </div>
    </footer>
  );
};

export default Footer;
