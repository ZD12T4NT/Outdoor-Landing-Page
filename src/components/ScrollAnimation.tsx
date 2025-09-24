import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type ScrollAnimationProps = {
  heading?: string;
};

export default function ScrollAnimation ({ heading }: ScrollAnimationProps )  {

  return (
    <div  className="relative flex h-screen justify-center align-middle">
      {/* Centered Text */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl md:text-6xl font-bold z-20 text-center text-black"
      >
                    {heading}
      </div>
    </div>
  );
};

