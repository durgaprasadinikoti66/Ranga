"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, ExternalLink, Github, Database, Server, Globe } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      title: "Barclays Bank Online Banking",
      period: "01/2018 - 10/2023",
      location: "Pune",
      description: "Barclays Online Banking is a safe and convenient way to take care of customer daily banking",
      image: "/modern-banking-dashboard.png",
      technologies: ["React", "Redux", "Node.js", "AWS", "GraphQL", "Microservices"],
      achievements: [
        "Architected and developed responsive user interfaces using React, enhancing the overall user experience",
        "Implemented complex UI components for financial data visualization, ensuring clarity and usability",
        "Utilized state management libraries like Redux for efficient state synchronization across components",
        "Ensured application accessibility and internationalization to accommodate diverse user bases",
        "Designed and developed RESTful APIs using Node.js to support various banking services",
        "Implemented secure authentication and authorization mechanisms for user accounts",
        "Engineered microservices architecture for scalability and modularity in backend services",
        "Managed database interactions, including schema design and query optimization",
        "Deployed and hosted applications on AWS, leveraging services such as EC2, ECS, and Lambda",
        "Optimized application performance and scalability using AWS services like CloudFront and Load Balancers",
        "Implemented security best practices, including encryption and compliance with industry standards",
        "Established CI/CD pipelines for automated testing and deployment using AWS CodePipeline",
      ],
    },
  ]

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 animate-float opacity-5" style={{ animationDelay: "1s" }}>
          <Database className="h-20 w-20 text-cyan-400" />
        </div>
        <div className="absolute bottom-40 right-10 animate-float opacity-5" style={{ animationDelay: "3s" }}>
          <Server className="h-24 w-24 text-purple-400" />
        </div>
        <div className="absolute top-1/3 right-1/4 animate-float opacity-5" style={{ animationDelay: "5s" }}>
          <Globe className="h-16 w-16 text-orange-400" />
        </div>

        {/* Floating code snippets */}
        <div
          className="absolute top-40 right-20 animate-float opacity-10 font-mono text-sm text-cyan-300"
          style={{ animationDelay: "2s" }}
        >
          useEffect(() =&gt; {})
        </div>
        <div
          className="absolute bottom-32 left-20 animate-float opacity-10 font-mono text-sm text-purple-300"
          style={{ animationDelay: "4s" }}
        >
          const [state, setState]
        </div>
        <div
          className="absolute top-2/3 right-1/3 animate-float opacity-10 font-mono text-sm text-orange-300"
          style={{ animationDelay: "6s" }}
        >
          GraphQL Query
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-balance">
            Featured{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-orange-400 bg-clip-text text-transparent animate-text-glow">
              Projects
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Showcasing some of the impactful projects I've worked on, demonstrating expertise in modern web technologies
            and scalable architecture.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 border-gray-700/50 bg-gray-900/50 backdrop-blur-sm group"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-cyan-500/20 to-orange-500/20 group-hover:opacity-80 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
                </div>

                <div className="p-8">
                  <CardHeader className="p-0 mb-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                      <h3 className="font-serif text-2xl font-bold text-balance text-gray-100 group-hover:text-white transition-colors">
                        {project.title}
                      </h3>
                      <Badge
                        variant="outline"
                        className="w-fit border-cyan-400 text-cyan-300 bg-cyan-400/10 hover:bg-cyan-400/20 transition-colors"
                      >
                        <Calendar className="h-3 w-3 mr-1" />
                        {project.period}
                      </Badge>
                    </div>

                    <div className="flex items-center gap-1 text-gray-400 mb-4">
                      <MapPin className="h-4 w-4" />
                      <span className="text-gray-300">{project.location}</span>
                    </div>

                    <p className="text-gray-300 leading-relaxed">{project.description}</p>
                  </CardHeader>

                  <CardContent className="p-0">
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 text-gray-200">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="secondary"
                            className="text-xs bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-gray-200 border-purple-400/30 hover:bg-gradient-to-r hover:from-purple-500/30 hover:to-cyan-500/30 transition-all duration-300"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 text-gray-200">Key Achievements</h4>
                      <ul className="space-y-2 max-h-48 overflow-y-auto">
                        {project.achievements.slice(0, 6).map((achievement, achIndex) => (
                          <li
                            key={achIndex}
                            className="flex items-start gap-2 text-sm group/item hover:text-gray-200 transition-colors"
                          >
                            <div className="w-1.5 h-1.5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mt-2 flex-shrink-0 group-hover/item:animate-pulse"></div>
                            <span className="leading-relaxed text-gray-300">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex gap-3">
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0 shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Project
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white hover:border-purple-400 transition-all duration-300 bg-transparent"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Source Code
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
