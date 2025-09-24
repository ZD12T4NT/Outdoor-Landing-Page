import NavMenu from '@/components/nav-bar/NavMenu'
import './globals.css'
import { Syne } from 'next/font/google'
import Footer from '@/components/Footer'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const syne = Syne({ subsets: ['latin'], weight: ['400', '700'] })


export const metadata = {
  title: "Immersive Sound | Simplified",
  description:
    "Our most recent breakthrough in audio devices blends exceptional audio performance with unparalleled toughness and elegance.",
};


const footerData = {
  footerText: 'Feel alive in every footstep',

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
        className={`overflow-x-hidden bg-[#F5F4EF] ${syne.className} `}
      >
        <NavMenu />
        {children}
        <Footer {...footerData}  imageSrc="/footerBg.jpg" />
      </body>
    </html>
  )
}
