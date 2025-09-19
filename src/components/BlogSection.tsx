'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const posts = [
  { title: 'Guide To Choose The Right Car In A Showroom', image: '/blogOne.webp',postType:'Guides' },
  { title: 'Rydex hosts annual auto racing grand events', image: '/blogTwo.webp',postType:'Events' },
  { title: 'Guides for mantaining your rental car perfectly', image: '/blogThree.webp', postType:'Guides' },
];

export default function BlogSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="w-full bg-black relative z-10">
      <div className="sm:py-32 px-6 md:px-12 lg:px-20 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col items-center text-center mb-12 gap-6"
        >
          <div className="flex text-center items-center gap-2 text-[#d4d414] font-normal uppercase tracking-wide text-base">
            <span className="w-6 h-[3px] bg-[#d4d414]" />
            Blog posts
          </div>
          <h2 className="text-3xl lg:text-5xl font-normal text-white mt-2">
            Engage with Premium Rental Posts
          </h2>
        </motion.div>

        {/* Blog Cards */}
      <div className="relative flex flex-col md:flex-row flex-wrap gap-2 h-screen md:h-[400px]">
          {/* Blog posts */}
          {posts.map((post, index) => {
            const isHovered = hoveredIndex === index;

            return (
              <motion.div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                animate={{
                  flex: isHovered ? 2 : hoveredIndex === null ? 1 : 1.4,
                }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="relative rounded-3xl overflow-hidden cursor-pointer flex"
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover object-center transition-transform duration-500"
                />

                <div className="absolute top-2 right-2 p-1 pr-5 pl-5 bg-[#d4d414] rounded-full text-black text-lg">{post.postType}</div>
                <h3 className="absolute bottom-4 left-4 text-xl lg:text-[24px] font-medium text-white z-30 capitalize max-w-[70%] text-left">
                  {post.title}
                </h3>
              </motion.div>
            );
          })}

          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none z-20" />
        </div>

      </div>
    </section>
  );
}
