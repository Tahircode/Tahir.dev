"use client"

import { GraduationCap, School, Award, BookOpen, Calendar, MapPin } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Education() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const educationData = [
    {
      id: 1,
      title: "B.Tech in Electronics & Communication Engineering",
      institution: "Jamia Millia Islamia",
      location: "New Delhi, India",
      period: "2022 - 2026",
      description: [
        "Pursuing engineering with focus on embedded systems and digital communication",
        "Coursework: Digital Signal Processing, Microprocessors, VLSI Design, Communication Systems etc"
      ],
      icon: <GraduationCap className="w-6 h-6" />,
      color: "bg-blue-100 text-blue-800",
      borderColor: "border-blue-300"
    },
    {
      id: 2,
      title: "JEE Mains Preparation",
      institution: "Petronet Kashmir Super 30",
      location: "Srinagar, Kashmir",
      period: "2021 - 2022",
      description: [
        "Specialized coaching program for engineering entrance exams",
        "Focused training in Physics, Chemistry, and Mathematics"
      ],
      icon: <Award className="w-6 h-6" />,
      color: "bg-emerald-100 text-emerald-800",
      borderColor: "border-emerald-300"
    },
    {
      id: 3,
      title: "Class 12th - PCM",
      institution: "Govt Boys Higher Secondary School",
      location: "Kupwara, Kashmir",
      period: "2018 - 2020",
      description: [
        "Board: Jammu & Kashmir State Board of School Education",
        "Subjects: Physics, Chemistry, Mathematics, English"
      ],
      icon: <School className="w-6 h-6" />,
      color: "bg-purple-100 text-purple-800",
      borderColor: "border-purple-300"
    },
    {
      id: 4,
      title: "Class 10th",
      institution: "Alexandra Secondary School Kupwara",
      location: "Kupwara, Kashmir",
      period: "2016 - 2017",
      description: [
        "Board: Jammu & Kashmir State Board of School Education",
        "Foundation in Science and Mathematics"
      ],
      icon: <BookOpen className="w-6 h-6" />,
      color: "bg-amber-100 text-amber-800",
      borderColor: "border-amber-300"
    }
  ]

  const achievements = [
    "Built multiple full-stack projects using modern web technologies",
    "Active participant in coding competitions and hackathons",
    "Developed embedded systems projects during engineering coursework",
    "Self-taught various programming languages and frameworks"
  ]

  return (
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 theme-text">
            Education Journey
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto theme-text">
            My academic path and continuous learning experiences
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full mx-auto mt-6"></div>
        </div>

        {/* Timeline Section */}
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-gradient-to-b from-blue-200 via-emerald-200 to-purple-200 transform -translate-x-1/2"></div>
          
          <div className="space-y-12">
            {educationData.map((item, index) => (
              <div
                key={item.id}
                style={{
                  transitionDelay: `${index * 200}ms`,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'opacity 0.7s ease, transform 0.7s ease'
                }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-white border-4 border-blue-500 transform -translate-x-1/2 z-10"></div>
                
                {/* Content Card */}
                <div className={`ml-12 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:text-right'
                }`}>
                  <div className={`border rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${item.borderColor} `}>
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-full transition-transform duration-300 hover:scale-110 ${item.color}`}>
                        {item.icon}
                      </div>
                      <span className="text-sm font-medium px-3 py-1 rounded-full transition-colors duration-300 hover:bg-gray-200 theme-text">
                        {item.period}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold theme-text mb-2">
                      {item.title}
                    </h3>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center theme-text">
                        <School className="w-4 h-4 mr-2" />
                        <span className="font-medium">{item.institution}</span>
                      </div>
                      <div className="flex items-center theme-text">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{item.location}</span>
                      </div>
                    </div>
                    
                    <ul className={`space-y-2 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                      {item.description.map((point, i) => (
                        <li key={i} className="theme-text flex items-start transition-colors duration-300 hover:text-gray-900">
                          {index % 2 === 0 && <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 transition-transform duration-300 group-hover:scale-125"></div>}
                          <span>{point}</span>
                          {index % 2 !== 0 && <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 ml-3 transition-transform duration-300 group-hover:scale-125"></div>}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Current Focus Section */}
        <div 
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.7s ease 0.8s, transform 0.7s ease 0.8s'
          }}
          className="mt-20 rounded-2xl p-8 border border-blue-100"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold theme-text mb-4 flex items-center">
                <Calendar className="w-6 h-6 mr-3 theme-text transition-transform duration-300 hover:scale-110" />
                Current Focus
              </h3>
              <div className="space-y-3">
                <div className="flex items-center p-3 rounded-lg border border-gray-200 transition-all duration-300 hover:border-blue-300 hover:shadow-md">
                  <div className="w-3 h-3 rounded-full mr-3 animate-pulse"></div>
                  <span className="theme-text">Final Year Engineering Projects</span>
                </div>
                <div className="flex items-center p-3 rounded-lg border border-gray-200 transition-all duration-300 hover:border-emerald-300 hover:shadow-md">
                  <div className="w-3 h-3 rounded-full mr-3 animate-pulse"></div>
                  <span className="theme-text">Full-Stack Development with Next.js</span>
                </div>
                <div className="flex items-center p-3 rounded-lg border border-gray-200 transition-all duration-300 hover:border-purple-300 hover:shadow-md">
                  <div className="w-3 h-3 rounded-full mr-3 animate-pulse"></div>
                  <span className="theme-text">System Design & Scalable Architecture</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold theme-text mb-4 flex items-center">
                <Award className="w-6 h-6 mr-3 theme-text transition-transform duration-300 hover:scale-110" />
                Key Learnings
              </h3>
              <ul className="space-y-3">
                {achievements.map((achievement, index) => (
                  <li
                    key={index}
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
                      transition: `opacity 0.5s ease ${1 + index * 0.1}s, transform 0.5s ease ${1 + index * 0.1}s`
                    }}
                    className="flex items-start p-3"
                  >
                    <div className="w-2 h-2 rounded-full mt-2 mr-3 transition-transform duration-300 hover:scale-125"></div>
                    <span className="theme-text transition-colors duration-300 hover:text-gray-900">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div 
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.7s ease 1.2s, transform 0.7s ease 1.2s'
          }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="text-center p-6 rounded-xl border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-blue-300">
            <div className="text-3xl font-bold theme-text mb-2 transition-transform duration-300 hover:scale-110">4+</div>
            <div className="theme-text">Years of Education</div>
          </div>
          <div className="text-center p-6 rounded-xl border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-emerald-300">
            <div className="text-3xl font-bold theme-text mb-2 transition-transform duration-300 hover:scale-110">90%+</div>
            <div className="theme-text">Academic Performance</div>
          </div>
          <div className="text-center p-6  rounded-xl border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-purple-300">
            <div className="text-3xl font-bold theme-text mb-2 transition-transform duration-300 hover:scale-110">10+</div>
            <div className="theme-text">Projects Built</div>
          </div>
          <div className="text-center p-6 rounded-xl border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-amber-300">
            <div className="text-3xl font-bold theme-text mb-2 transition-transform duration-300 hover:scale-110">Continuous</div>
            <div className="theme-text">Learning Journey</div>
          </div>
        </div>
      </div>
    </section>
  )
}