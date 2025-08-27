"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Building, Code2, Rocket, Zap } from "lucide-react"

export function ExperienceSection() {
  const experiences = [
    {
      period: "05/2022 - Present",
      title: "Senior Frontend Developer",
      company: "Kristal.AI",
      location: "Bangalore, India",
      description: "Kristal.AI is an AI-driven company focused on providing innovative solutions.",
      logo: "🤖",
      techStack: ["React", "Next.js", "GraphQL", "Redux", "React Native"],
      impact: "Led 10+ developers",
      color: "from-blue-500 to-purple-600",
      achievements: [
        "Led a team of developers in the design and development of large-scale React (Next.js) applications",
        "Implemented and maintained a robust frontend architecture, emphasizing code reusability and modularity",
        "Conducted regular code reviews, enforced coding standards, and provided mentorship to junior developers",
        "Integrated applications with GraphQL API, optimizing data retrieval and storage processes",
        "Utilized modern JavaScript features and ES6+ syntax to improve code readability and maintainability",
        "Developed and maintained cross-platform mobile applications using React Native",
        "Collaborated with UI/UX designers to implement visually appealing and responsive user interfaces",
      ],
    },
    {
      period: "02/2021 - 04/2022",
      title: "Senior Frontend Developer",
      company: "McAfee",
      location: "Bangalore, India",
      description: "McAfee is a worldwide leader in online protection.",
      logo: "🛡️",
      techStack: ["React", "Next.js", "Redux", "JavaScript"],
      impact: "80% conversion boost",
      color: "from-red-500 to-orange-600",
      achievements: [
        "Developed and maintained a web application using ReactJS (Next.js), implementing reusable components and managing state with Redux",
        "Supervised approximately 15 front end associates",
        "Helped the team stick to specific standards in developing web pages under company guidelines",
        "Boosted the conversion rate by 80% by improving the design",
        "Communicated with back-end developers for any front-end problematic issues",
      ],
    },
    {
      period: "01/2018 - 02/2021",
      title: "Senior Frontend Developer",
      company: "Barclays Bank US",
      location: "Pune, India",
      description: "Barclays moves, lends, invests and protects money for customers and clients worldwide.",
      logo: "🏦",
      techStack: ["React", "Redux", "Node.js", "GraphQL", "Jest"],
      impact: "Enterprise scale",
      color: "from-green-500 to-teal-600",
      achievements: [
        "Lead development team and application Support team",
        "Developed and maintained a web application using ReactJS, implementing reusable components and managing state with Redux",
        "Utilized NodeJS and Express.js to build a GraphQL API, handling data persistence and implementing authentication and authorization features",
        "Wrote unit testing and end-to-end testing with jest and cypress",
        "Created build jobs in the Jenkins using the Groovy for the deployment",
      ],
    },
    {
      period: "07/2016 - 12/2017",
      title: "Module Lead - UI Practices",
      company: "Mphasis",
      location: "Bangalore, India",
      description: "Mphasis applies next-generation technology to help enterprises transform businesses globally.",
      logo: "⚡",
      techStack: ["React", "Redux", "Node.js", "Express", "Jenkins"],
      impact: "Team leadership",
      color: "from-purple-500 to-indigo-600",
      achievements: [
        "Lead development team and application Support team",
        "Developed and maintained a web application using ReactJS, implementing reusable components and managing state with Redux",
        "Utilized NodeJS and Express.js to build GraphQL API, handling data persistence and implementing authentication and authorization features",
        "Wrote unit testing and end-to-end testing with jest and cypress",
        "Created build jobs in the Jenkins using the Groovy for the deployment",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 animate-float opacity-5" style={{ animationDelay: "1s" }}>
          <Code2 className="h-24 w-24 text-purple-400" />
        </div>
        <div className="absolute bottom-40 left-10 animate-float opacity-5" style={{ animationDelay: "3s" }}>
          <Rocket className="h-20 w-20 text-cyan-400" />
        </div>
        <div className="absolute top-1/2 right-1/4 animate-float opacity-5" style={{ animationDelay: "5s" }}>
          <Zap className="h-16 w-16 text-orange-400" />
        </div>
        <div className="absolute top-1/4 left-1/3 animate-float opacity-5" style={{ animationDelay: "2s" }}>
          <Building className="h-18 w-18 text-green-400" />
        </div>

        <div
          className="absolute top-32 left-1/4 animate-float opacity-10 font-mono text-lg text-purple-300"
          style={{ animationDelay: "2s" }}
        >
          React.js
        </div>
        <div
          className="absolute bottom-60 right-1/3 animate-bounce opacity-10 font-mono text-lg text-cyan-300"
          style={{ animationDelay: "4s" }}
        >
          Next.js
        </div>
        <div
          className="absolute top-2/3 left-1/3 animate-pulse opacity-10 font-mono text-lg text-orange-300"
          style={{ animationDelay: "6s" }}
        >
          GraphQL
        </div>
        <div
          className="absolute top-1/2 left-1/5 animate-float opacity-10 font-mono text-lg text-green-300"
          style={{ animationDelay: "3s" }}
        >
          TypeScript
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div
              className="p-3 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 animate-spin"
              style={{ animationDuration: "3s" }}
            >
              <Rocket className="h-6 w-6 text-white" />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-balance">
              Professional{" "}
              <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-orange-400 bg-clip-text text-transparent animate-text-glow">
                Experience
              </span>
            </h2>
            <div className="p-3 rounded-full bg-gradient-to-r from-orange-500 to-purple-600 animate-pulse">
              <Code2 className="h-6 w-6 text-white" />
            </div>
          </div>
          <p className="text-lg text-gray-100 max-w-3xl mx-auto leading-relaxed">
            Over a decade of experience building exceptional web applications and leading development teams at
            industry-leading companies.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-16 last:mb-0 group">
              {index !== experiences.length - 1 && (
                <div className="absolute left-8 top-32 w-1 h-full bg-gradient-to-b from-purple-400 via-cyan-400 to-orange-400 opacity-30 group-hover:opacity-60 transition-opacity duration-500">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
                </div>
              )}

              <div className="absolute left-6 top-12 w-8 h-8 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full border-4 border-background shadow-lg animate-pulse-glow flex items-center justify-center text-lg group-hover:scale-125 transition-transform duration-300">
                {exp.logo}
              </div>

              <Card className="ml-20 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 border-gray-700/50 bg-gray-900/50 backdrop-blur-sm group-hover:border-purple-400/30 group-hover:bg-gray-800/60 group-hover:scale-[1.02] relative overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                  <div className={`absolute inset-0 bg-gradient-to-br ${exp.color}`}></div>
                  <div
                    className="absolute top-4 right-4 w-16 h-16 border-2 border-white/20 rounded-full animate-spin"
                    style={{ animationDuration: "4s" }}
                  ></div>
                  <div className="absolute bottom-4 left-4 w-8 h-8 border border-white/10 rounded-full animate-pulse"></div>
                </div>

                <CardHeader className="pb-4 relative z-10">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-serif text-xl font-bold text-gray-100 group-hover:text-white transition-colors">
                          {exp.title}
                        </h3>
                        <Badge className={`bg-gradient-to-r ${exp.color} text-white border-0 animate-pulse`}>
                          {exp.impact}
                        </Badge>
                      </div>

                      <div className="flex flex-col md:flex-row md:items-center gap-2 text-gray-200 mb-3">
                        <div className="flex items-center gap-2">
                          <Building className="h-4 w-4" />
                          <span className="font-medium bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent">
                            {exp.company}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span className="text-gray-100">{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <Badge
                      variant="outline"
                      className="w-fit border-purple-400 text-purple-300 bg-purple-400/10 hover:bg-purple-400/20 transition-colors"
                    >
                      <Calendar className="h-3 w-3 mr-1" />
                      {exp.period}
                    </Badge>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {exp.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${exp.color} text-white opacity-80 hover:opacity-100 transition-opacity cursor-pointer transform hover:scale-105 duration-200`}
                        style={{ animationDelay: `${techIndex * 100}ms` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardHeader>

                <CardContent className="relative z-10">
                  <p className="text-gray-100 mb-6 leading-relaxed font-medium">{exp.description}</p>

                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-purple-400 uppercase tracking-wider mb-3">
                      Key Achievements
                    </h4>
                    {exp.achievements.map((achievement, achIndex) => (
                      <div
                        key={achIndex}
                        className="group/item flex items-start gap-3 p-3 rounded-lg hover:bg-gray-800/50 transition-all duration-300 hover:transform hover:translate-x-2"
                        style={{ animationDelay: `${achIndex * 100}ms` }}
                      >
                        <div
                          className={`w-2 h-2 bg-gradient-to-r ${exp.color} rounded-full mt-2 flex-shrink-0 group-hover/item:animate-pulse group-hover/item:scale-125 transition-transform duration-300`}
                        ></div>
                        <span className="leading-relaxed text-gray-100 group-hover/item:text-white transition-colors duration-300 text-sm">
                          {achievement}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
