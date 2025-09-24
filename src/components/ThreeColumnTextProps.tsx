"use client";

type ThreeColumnTextProps = {
  leftText: string;
  centerText: string;
  rightText: string;
};

export default function ThreeColumnText({
  leftText,
  centerText,
  rightText,
}: ThreeColumnTextProps) {
  return (
    <section className="w-full py-16 px-4 md:px-2">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start text-center md:text-left">
        {/* Left */}
        <div className="text-sm font-handwritten md:text-left text-gray-800">
          {leftText}
        </div>

        {/* Center */}
        <div className="text-base md:text-xl leading-relaxed text-gray-900 max-w-xl mx-auto md:mx-0">
          {centerText}
        </div>

        {/* Right */}
        <div className="text-sm font-handwritten md:text-right text-gray-800">
          {rightText}
        </div>
      </div>
    </section>
  );
}
