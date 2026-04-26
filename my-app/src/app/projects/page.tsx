'use client'
import { CardArray } from "@/components/CardArray"
import ProjectCard from "@/components/ProjectCard"
import { useState } from "react";
import { useEffect } from "react";
import { RoughNotation } from "react-rough-notation";
import Link from "next/link";

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, [])

  return (
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <div className={` transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
          <h2 className="text-center theme-text font-extrabold font-mono text-3xl mb-8">
            <RoughNotation
              type="underline"
              show={true}
              color="green"
              strokeWidth={3}
            >
              <span className="inline-block px-2">
                Featured Projects
              </span>
            </RoughNotation>
          </h2>
          <p className="project-desc text-center mb-12 theme-text text-lg">
            "Talk is cheap. Show me the code"? I got you. <br />
            Here are some of my projects you shouldn't miss
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CardArray.map((project, i) => {
            const isLeftSide = i % 2 === 0;
            return (
              <ProjectCard
                key={i}
                index={i}
                style={{
                  transitionDelay: `${i * 200}ms`,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateX(0)' : `translateX(${isLeftSide ? '-40px' : '40px'})`,
                  transition: 'opacity 0.7s ease, transform 0.7s ease'
                }}
                project={project}
              />
            );
          })}
        </div>
        <div 
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.7s ease 1.5s, transform 0.7s ease 1.5s'
          }}
          className="others text-center mb-16 mt-12 theme-text"
        >
          Other projects can be explored in{" "}
          <Link
            href="https://github.com/Tahircode"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium underline link-outline text-marrsgreen dark:text-carrigreen whitespace-nowrap hover:text-green-600 transition-colors duration-300"
          >
            my github profile
          </Link>
        </div>
      </div>
    </section>
  );
}