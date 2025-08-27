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

        {/* Floating tech keywords */}
        <div
          className="absolute top-32 left-1/4 animate-float opacity-10 font-mono text-lg text-purple-300"
          style={{ animationDelay: "2s" }}
        >
          React.js
        </div>
        <div
          className="absolute bottom-60 right-1/3 animate-float opacity-10 font-mono text-lg text-cyan-300"
          style={{ animationDelay: "4s" }}
        >
          Next.js
        </div>
        <div
          className="absolute top-2/3 left-1/3 animate-float opacity-10 font-mono text-lg text-orange-300"
          style={{ animationDelay: "6s" }}
        >
          GraphQL
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-balance">
            Professional{" "}
            <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-orange-400 bg-clip-text text-transparent animate-text-glow">
              Experience
            </span>
          </h2>
          <p className="text-lg text-gray-100 max-w-3xl mx-auto leading-relaxed">
            Over a decade of experience building exceptional web applications and leading development teams at
            industry-leading companies.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12 last:mb-0 group">
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-6 top-24 w-0.5 h-full bg-gradient-to-b from-purple-400 via-cyan-400 to-orange-400 opacity-30"></div>
              )}

              <div className="absolute left-4 top-8 w-4 h-4 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full border-4 border-background shadow-lg animate-pulse-glow"></div>

              <Card className="ml-16 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 border-gray-700/50 bg-gray-900/50 backdrop-blur-sm group-hover:border-purple-400/30 group-hover:bg-gray-800/60">
                <CardHeader className="pb-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                    <h3 className="font-serif text-xl font-bold text-gray-100 group-hover:text-white transition-colors">
                      {exp.title}
                    </h3>
                    <Badge
                      variant="outline"
                      className="w-fit border-purple-400 text-purple-300 bg-purple-400/10 hover:bg-purple-400/20 transition-colors"
                    >
                      <Calendar className="h-3 w-3 mr-1" />
                      {exp.period}
                    </Badge>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center gap-2 text-gray-200">
                    <div className="flex items-center gap-1">
                      <Building className="h-4 w-4" />
                      <span className="font-medium bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent">
                        {exp.company}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span className="text-gray-100">{exp.location}</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-gray-100 mb-4 leading-relaxed">{exp.description}</p>

                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li
                        key={achIndex}
                        className="flex items-start gap-2 text-sm group/item hover:text-gray-100 transition-colors"
                      >
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full mt-2 flex-shrink-0 group-hover/item:animate-pulse"></div>
                        <span className="leading-relaxed text-gray-100">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
