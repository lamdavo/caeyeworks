'use client';

import Image from 'next/image';

const imageLoader = ({ src, width, quality }) => {
  return `https://res.cloudinary.com/doizpp8s5/image/upload/f_auto,q_auto/v1/caeyeworks/desktop-hero`;
};

export const Hero = () => {
  return (
    <div className='max-w-screen-2xl bg-blue-500 h-'>
      <Image
        loader={imageLoader}
        src='me.png'
        alt='hero'
        width={1536}
        height={750}
      />
    </div>
  );
};
