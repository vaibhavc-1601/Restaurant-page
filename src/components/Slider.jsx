'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Slider({ sliderImage = [] }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === sliderImage.length - 1 ? 0 : prev + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [sliderImage.length]);

  return (
    <div className=" flex justify-end">
 <div className="relative w-full h-[300px] overflow-hidden rounded-3xl ">
      {sliderImage.map((data, index) => (
        <Image
          key={index}
          src={data.image}
          alt="Delicious food display"
          width={1300}
          height={400}
          className={`w-full h-full object-cover  absolute transition-opacity top-0 left-0 duration-500 ease-in-out ${
            current === index ? 'opacity-100' : 'opacity-0'
          }`}
          priority
        />
      ))}
    </div>
    </div>
   
  );
}
