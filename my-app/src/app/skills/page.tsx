"use client"

import { Code2, Cpu, Cloud, Brain } from 'lucide-react'
import { useEffect, useState } from 'react'

type Skill = {
  name: string;
  category: string;
}

type Category = {
  id: string;
  label: string;
  icon: React.ReactNode;
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>('programming')
  const [isVisible, setIsVisible] = useState(false);
  useEffect(()=>{
    setIsVisible(true);
  },[])
  
  const skillsData = {
    programming: {
      title: "Programming Languages",
      icon: <Code2 className="w-5 h-5" />,
      skills: [
        { name: "C/C++", category: "programming" },
        { name: "JavaScript", category: "programming" },
        { name: "TypeScript", category: "programming" },
        { name: "Python", category: "programming" },
        { name: "SQL", category: "programming" },
        { name: "HTML/CSS", category: "programming" },
      ]
    },
    development: {
      title: "Development & Frameworks",
      icon: <Cpu className="w-5 h-5" />,
      skills: [
        { name: "React", category: "development" },
        { name: "Node.js", category: "development" },
        { name: "Express.js", category: "development" },
        { name: "Next.js", category: "development" },
        { name: "Tailwind CSS", category: "development" },
        { name: "NextAuth.js", category: "development" },
        { name: "Hono", category: "development" },
      ]
    },
    devops: {
      title: "DevOps & Tools",
      icon: <Cloud className="w-5 h-5" />,
      skills: [
        { name: "AWS", category: "devops" },
        { name: "Docker", category: "devops" },
        { name: "Monorepos", category: "devops" },
        { name: "Redis", category: "devops" },
        { name: "WebSockets", category: "devops" },
        { name: "Vercel", category: "devops" },
        { name: "Render", category: "devops" },
        { name: "GitHub CI/CD", category: "devops" },
        { name: "Turborepo", category: "devops" },
        { name: "Cloudflare", category: "devops" },
      ]
    },
    fundamentals: {
      title: "CS Fundamentals",
      icon: <Brain className="w-5 h-5" />,
      skills: [
        { name: "Data Structures & Algorithms", category: "fundamentals" },
        { name: "Operating Systems", category: "fundamentals" },
        { name: "Object Oriented Programming", category: "fundamentals" },
        { name: "Database Management System", category: "fundamentals" },
        { name: "Embedded Systems", category: "fundamentals" },
      ]
    }
  }

  const categories: Category[] = [
    { id: 'programming', label: 'Languages', icon: <Code2 className="w-5 h-5" /> },
    { id: 'development', label: 'Frameworks', icon: <Cpu className="w-5 h-5" /> },
    { id: 'devops', label: 'DevOps', icon: <Cloud className="w-5 h-5" /> },
    { id: 'fundamentals', label: 'Fundamentals', icon: <Brain className="w-5 h-5" /> },
  ]

  return (
    <section className="py-20 px-4 md:px-8">
      <div  className={`max-w-5xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}
  `}>
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 theme-text">
            Technical Skills
          </h2>
          <p className="text-gray-600 theme-text">
            Technologies and tools I work with
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category.id}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
                transition: `all 0.1s ease 50ms`
              }}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                activeCategory === category.id
                  ? 'border border-2 shadow-xl border-emerald-500 theme-text -translate-y-0.5 transition-transform'
                  : 'border border-gray-400 text-gray-400'
              }`}
            >
              {category.icon}
              <span className="font-medium">{category.label}</span>
            </button>
          ))}
        </div>

        {/* Current Category Title */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 theme-text">
            {skillsData[activeCategory as keyof typeof skillsData].title}
          </h3>
        </div>

        {/* Skills Grid - Simple List */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
          {skillsData[activeCategory as keyof typeof skillsData].skills.map((skill: Skill) => (
            <div
              key={skill.name}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
                transition: `all 0.4s ease 100ms`
              }}
              className="border border-gray-200 rounded-lg p-4 text-center hover:border-gray-300 transition-colors"
            >
              <div className="font-medium text-gray-800 theme-text ">{skill.name}</div>
            </div>
          ))}
        </div>

        {/* All Skills at Once (Optional Section) */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900 theme-text">
            Complete Skills Overview
          </h3>
          <div className="space-y-10">
            {categories.map((category) => (
              <div key={category.id}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg theme-text">
                    {category.icon}
                  </div>
                  <h4 className="text-xl font-semibold theme-text">
                    {skillsData[category.id as keyof typeof skillsData].title}
                  </h4>
                </div>
                <div className="flex flex-wrap gap-3">
                  {skillsData[category.id as keyof typeof skillsData].skills.map((skill: Skill) => (
                    <div
                      key={skill.name}
                      style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
                        transition: `all 0.4s ease 100ms`
                      }}
                      className="px-4 py-2 border border-gray-200 rounded-lg theme-text hover:bg-gray-100 transition-colors"
                    >
                      {skill.name}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}