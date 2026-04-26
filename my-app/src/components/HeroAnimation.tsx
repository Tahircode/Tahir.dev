
"use client"; 

import Image from "next/image";

export default function HeroAnimation() {

  return (
    <div className="relative w-72 h-80 md:w-80 md:h-80 bg-transparent dark:bg-transparent">
      <div
        className="absolute inset-0 flex items-center justify-center"
      >
        <Image
          src="/my_avatar2.jpg" 
          alt="Animated Avatar"
          width={320} 
          height={320}
          priority
          className="animate-[float-complex_16s_cubic-bezier(0.4,0,0.2,1)_infinite] animate-float"
          
        />
      </div>

    </div>
  );
}