"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Users, Zap, Target, Sparkles } from "lucide-react"

export function AboutSection() {
  const achievements = [
    {
      icon: <Trophy className="h-8 w-8" />,
      title: "Boosted Team Productivity",
      description:
        "Increased team's productivity by 35% through agile methodologies and effective communication strategies.",
      gradient: "from-yellow-400 to-orange-500",
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Delivered Ahead Of Schedule",
      description: "Led a team of 10 developers to deliver a project 2 weeks ahead of schedule.",
      gradient: "from-green-400 to-blue-500",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Optimized Load Time",
      description: "Successfully reduced application load time by 50% through optimized coding practices.",
      gradient: "from-purple-400 to-pink-500",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Enhanced User Engagement",
      description: "Improved user engagement by 60% through enhanced UI/UX design and smoother navigation.",
      gradient: "from-blue-400 to-purple-500",
    },
  ]

  const skills = [
    "React JS",
    "Next.js",
    "React Redux",
    "GraphQL",
    "Angular",
    "Node.js",
    "Express",
    "JavaScript",
    "HTML",
    "CSS",
    "JEST",
    "Cypress.js",
    "Core Java",
    "Python",
    "MongoDB",
    "AWS",
    "Agile Methodologies (Scrum)",
    "GIT",
    "Prompt Engineering",
  ]

  const industrySkills = ["UX/UI", "Design mock up and wireframes", "SEO", "Building APIs", "Test performance"]

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 gradient-secondary animate-gradient opacity-10"></div>
      <div className="absolute top-10 right-10 w-64 h-64 bg-purple-400/10 rounded-full blur-3xl animate-float"></div>
      <div
        className="absolute bottom-10 left-10 w-48 h-48 bg-orange-400/10 rounded-full blur-2xl animate-float"
        style={{ animationDelay: "3s" }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Sparkles className="h-6 w-6 text-purple-500 animate-pulse" />
            <h2 className="font-sans text-4xl md:text-5xl font-bold text-balance">
              About{" "}
              <span className="bg-gradient-to-r from-purple-600 via-orange-500 to-red-500 bg-clip-text text-transparent">
                Me
              </span>
            </h2>
            <Sparkles className="h-6 w-6 text-orange-500 animate-pulse" />
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A passionate Senior Frontend Developer with extensive experience in building scalable web applications and
            leading development teams at top-tier companies like Kristal.AI, McAfee, and Barclays.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 glass-effect hover:scale-105"
            >
              <CardContent className="p-6 text-center relative overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${achievement.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                ></div>
                <div
                  className={`mb-4 flex justify-center group-hover:scale-125 transition-transform duration-300 text-transparent bg-gradient-to-r ${achievement.gradient} bg-clip-text`}
                >
                  {achievement.icon}
                </div>
                <h3 className="font-sans text-lg font-bold mb-3 text-balance group-hover:text-purple-600 transition-colors duration-300">
                  {achievement.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="animate-slide-in-left">
            <h3 className="font-sans text-2xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="px-4 py-2 text-sm hover:bg-gradient-to-r hover:from-purple-500 hover:to-orange-500 hover:text-white transition-all duration-300 cursor-default hover:scale-105 glass-effect"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div className="animate-slide-in-right">
            <h3 className="font-sans text-2xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Industry Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {industrySkills.map((skill, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="px-4 py-2 text-sm border-2 border-orange-400 text-orange-600 hover:bg-gradient-to-r hover:from-orange-400 hover:to-red-500 hover:text-white hover:border-transparent transition-all duration-300 cursor-default hover:scale-105"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
