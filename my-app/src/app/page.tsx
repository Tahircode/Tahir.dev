import ContactButton from "@/components/ContactButton";
import HeroAnimation from "@/components/HeroAnimation";
// import { useEffect, useState } from "react";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center">
      <div className="max-w-5xl mx-auto px-4 md:px-6 w-full">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">

          {/* Content */}
          <div className="info flex flex-col order-2 md:order-1">
            <div className="text-2xl lg:text-lg font-medium dark:text-green-600">
              Hi my name is
            </div>

            <div className="text-animation theme-text text-4xl md:text-5xl lg:text-7xl md:my-2 font-semibold my-1">
              Tahir
              <span className="m-4 px-2 text-black bg-green-900">
                Aziz Khan
              </span>
            </div>

            <div className="text-animation text-2xl md:text-3xl lg:text-5xl md:my-3 text-green-600 font-medium">
              A Full-Stack Developer
            </div>

            <div className="mt-2 my-4 md:mb-8 theme-text max-w-prose">
              <p className="mb-1">
                I am a Full-Stack Developer with a passion for delivering exceptional results.
              </p>
              <p>
                With my expertise in React and NextJS on the frontend, and NodeJS and Express on the backend, I bring a unique combination of technical skills and creative problem-solving to every project I work on.
              </p>
            </div>

            <ContactButton />
          </div>

          {/* Animation */}
          <div className="order-1 md:order-2">
            <HeroAnimation />
          </div>

        </div>
      </div>
    </main>
  );
}

