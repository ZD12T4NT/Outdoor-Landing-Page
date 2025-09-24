"use client";

import Hero from '../components/Hero';
import useLenisScroll from '../hooks/useLenisScroll';
import ScrollImageSections from '@/components/ScrollImageSection';
import ScrollHero from '@/components/ScrollHero';
import ScrollAnimation from '@/components/ScrollAnimation';
import ProductShowcase from '@/components/ProjectShowcase';
import Swiper from '@/components/Swiper';
import HighlightText from '@/components/HighlightText';
import ThreeColumnText from '@/components/ThreeColumnTextProps';

export default function LandingPage() {
  const { progress } = useLenisScroll();

  return (
     
      <main className="min-h-screen">
        <Hero
          backgroundVideo="/outdoorVideo.mp4"
          title="Feel alive in every footstep"
          backgroundImage="outDoorImage.png"
        />

        <ScrollImageSections />

        <ScrollHero backgroundImage='/hikingSix.jpg' heading='Conquer new peaks' />

        <ScrollAnimation heading='Mh500' />

       <ProductShowcase
  firstRowProducts={{
    MH500: {
      outfitImage: "/outfitTwo.webp",
      outfitType: "Trail Jacket",
      gender: "Male",
      smallImage: "/JacketOne.webp",
      color: "Green",
      colorways: "3 colorways",
    },
    MH900: {
      outfitImage: "/outfitOne.webp",
      outfitType: "Raincoat",
      gender: "Male",
      smallImage: "/jacketThree.webp",
      color: "Blue",
      colorways: "2 colorways",
    },
  }}
  secondRowProducts={{
    MH500: {
        outfitImage: "/outfitFour.webp",

      outfitType: "Hiking Gear",
      gender: "Woman",
           smallImage: "/jacketFour.webp",

      color: "Beige",
      colorways: "2 colorways",
    },
    MH900: {
         outfitImage: "/outfitThree.webp",

      outfitType: "Mountain Coat",
      gender: "Woman",
          smallImage: "/jacketTwo.webp",

      color: "Red",
      colorways: "3 colorways",
    },
  }}
  firstRowBg="/rockyMountain.webp"
  secondRowBg="/rockyMountainTwo.webp"
/>


        <ScrollHero backgroundImage='/hikingSeven.jpg' heading='Step on up'/>

        <ScrollAnimation heading='MH500 Shoes' />

        <ProductShowcase
  firstRowProducts={{
    MH500: {
      outfitImage: "/hikingShoesTwo.webp",
      outfitType: "Hiking Shoes",
      gender: "Unisex",
      smallImage: "/hikingShoesOne.webp",
      color: "Green",
      colorways: "1 colorway",
    }
  }}
  secondRowProducts={{
    MH500: {
        outfitImage: "/hikingShoesFour.webp",

      outfitType: "Hiking Shoes",
      gender: "Unisex",
           smallImage: "/hikingShoesThree.webp",

      color: "Orange",
      colorways: "1 colorway",
    }
 
  }}
  firstRowBg="/hikingShoesBgOne.jpg"
  secondRowBg="/hikingBgTwo.webp"
/>
      
        <ScrollHero backgroundImage='/outdoorBG.jpg' heading='Outdoor spirit'/>

           <ProductShowcase
  firstRowProducts={{
    "25L": {
      outfitImage: "/backpackTwo.webp",
      outfitType: "Red Backpack",
      gender: "Unisex",
      smallImage: "/redBackpack.webp",
      color: "Red",
      colorways: "1 colorway",
    },
     "38L": {
      outfitImage: "/backpackOne.webp",
      outfitType: "Yellow Backpack",
      gender: "Unisex",
      smallImage: "/yellowBackpack.webp",
      color: "Yellow",
      colorways: "1 colorway",
    }
  }}
  firstRowBg="/hikingShoesBgOne.jpg"
/>

<Swiper
  slides={[
    { heading: "Explore the Mountains", text: "Discover gear...", buttonText: "Shop Now", image: "/swiperImageOne.webp" },
    { heading: "Adventure Awaits", text: "Find the perfect backpack...", buttonText: "View Collection", image: "/swiperImageTwo.webp" },
    { heading: "Trail Ready Shoes", text: "Durable shoes for every trail...", buttonText: "Buy Now", image: "/swiperImageThree.webp" },
    { heading: "Mountain Gear", text: "Essential gear for your hikes", buttonText: "Get It Now", image: "/swiperImageFour.webp" },
  ]}
/>


<HighlightText text="Crafted in the heart of the French Alps. Here at Quechua, Decathlon's mountain sports specialist, we’ve been designing innovative performance gear for over 25 years." className="text-7xl font-bold" />

<ThreeColumnText
  leftText="SINCE 1997"
  centerText="Inspired by the rugged beauty of the French Alps, each piece in this collection is crafted with the spirit of adventure in mind. We combine our deep understanding of the mountains with cutting-edge technology to create gear that endures even the toughest terrains. Every product is designed for you to get the most out of your outdoor experiences, with every detail carefully engineered to support your hiking or outdoor escapades."
  rightText={`DECATHLON MOUNTAIN LAB\n45.91616° N, 6.69121° E`}
/>


      </main>
  );
}
