import NavMenu from '@/components/nav-bar/NavMenu'
import './globals.css'
import { Figtree } from 'next/font/google'
import Footer from '@/components/Footer'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import CustomCursor from '@/components/Cursor';

const figtree = Figtree({ subsets: ['latin'], weight: ['400', '700'] })


export const metadata = {
  title: "Immersive Sound | Simplified",
  description:
    "Our most recent breakthrough in audio devices blends exceptional audio performance with unparalleled toughness and elegance.",
};


const footerData = {
  footerText: 'Rydex',
  imageSrc: '/sonicFooter.svg',
  linkGroups: [
    {
      title: 'Main Pages',
      links: [
        { label: 'Home', href: '/' },
        { label: 'About', href: '#' },
        { label: 'Models', href: '#' },
        { label: 'Blog', href: '#' },
        { label: 'Contact', href: '#' },
      ],
    },
    {
      title: 'Follow Us',
      links: [
        { label: 'Instagram', href: '#' },
        { label: 'Twitter (X)', href: '#' },
        { label: 'Youtube', href: '#' },
      ],
    },
     {
      title: 'Visit Us',
      links: [
        { label: '19 Jumeirah Beach Road, Umm Suqeim, UAE.', href: '#' },
      ],
    },
     {
      title: 'Contact Us',
      links: [
        { label: '+1 (123) 456-7890', href: '#' },
        { label: 'info@rydex.com', href: '#' },
      ],
    },
  ],
  socialLinks: [
    { href: '#', icon: <Facebook size={18} /> },
    { href: '#', icon: <Twitter size={18} /> },
    { href: '#', icon: <Instagram size={18} /> },
    { href: '#', icon: <Linkedin size={18} /> },
  ],
};



export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`overflow-x-hidden bg-black ${figtree.className} `}
      >
        <NavMenu />
        <CustomCursor />
        {children}
        <Footer {...footerData} />
      </body>
    </html>
  )
}
