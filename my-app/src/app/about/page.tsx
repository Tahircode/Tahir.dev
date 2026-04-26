"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { RoughNotation } from "react-rough-notation";


export default function About() {
  const [isVisible, setIsVisible]= useState(false);
  useEffect(()=>{
    setIsVisible(true);
  },[])

  return (
    <section className="min-h-screen flex items-center justify-center px-4 md:px-8 py-20">
      <div className="max-w-5xl">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          
          {/* Image Section */}
          <div className={`flex justify-center  transition-all duration-700 
              ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-13'}
            `}>
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <Image
                src="/photo.jpeg"
                alt="Profile photo"
                fill
                priority
                className="rounded-2xl object-cover shadow-2xl border-4 border-emerald-900/20"
              />
              <div className="absolute inset-0 rounded-2xl border-2 border-emerald-500/30 -z-10 translate-x-4 translate-y-4"></div>
            </div>
          </div>

          {/* Content Section */}
          <div className={`space-y-8  transition-all duration-700 
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}
            `}>
            <div>
            <h2 className="text-center font-extrabold text-5xl mb-8 text-gray-500">
            <RoughNotation
              type="underline"
              show={true}
              color="green"
              strokeWidth={3}
            >
              <span className="inline-block px-2">
               About Me
              </span>
            </RoughNotation>
          </h2>  
            </div>

            <div className="space-y-6 text-gray-300">
              <div className="space-y-3">
                <h2 className="text-2xl font-semibold text-emerald-400">
                  Full-Stack Developer
                </h2>
                <p className="leading-relaxed theme-text font-">
                  I craft modern, scalable web applications using React, Next.js, Node.js, and Express.js. 
                  With a solid foundation in computer science fundamentals, I focus on creating performant, 
                  maintainable solutions that deliver exceptional user experiences.
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="text-2xl font-semibold text-emerald-400">
                  Problem Solver
                </h2>
                <p className="leading-relaxed theme-text">
                  I design efficient data architectures with MongoDB, PostgreSQL, and Prisma ORM, 
                  and leverage Docker, Redis, and AWS to build scalable systems. 
                  Currently in my final year of B.Tech, I'm seeking a role where I can contribute 
                  to impactful products and grow alongside a talented team.
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="text-2xl font-semibold text-emerald-400">
                  Let's Build Together
                </h2>
                <p className="leading-relaxed theme-text">
                  I thrive in collaborative environments where innovation meets execution. 
                  With a growth mindset and curiosity for emerging technologies, 
                  I'm eager to take on meaningful challenges and contribute to the tech community.
                </p>
              </div>
            </div>

            {/* Tech Stack Indicator */}
            <div className="pt-4">
              <div className="flex items-center gap-2 text-sm text-emerald-600">
                <div className="h-2 w-2 bg-emerald-500 rounded-full animate-pulse"></div>
                <span>Currently working with: React • Next.js • Node.js • TypeScript • PostgreSQL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}