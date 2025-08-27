"use client"

import { Card, CardContent } from "@/components/ui/card"
import {
  Trophy,
  Users,
  Zap,
  Target,
  Sparkles,
  Code2,
  Database,
  Globe,
  Server,
  TestTube,
  Cpu,
  Cloud,
  GitBranch,
  Palette,
  Search,
  Wrench,
  BarChart3,
  Brain,
} from "lucide-react"

export function AboutSection() {
  const achievements = [
    {
      icon: <Trophy className="h-8 w-8" />,
      title: "Boosted Team Productivity",
      description:
        "Increased team's productivity by 35% through agile methodologies and effective communication strategies.",
      gradient: "from-amber-400 via-yellow-500 to-orange-600",
      bgGradient: "from-amber-500/20 to-orange-500/20",
      stats: "35%",
      delay: "0s",
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Delivered Ahead Of Schedule",
      description: "Led a team of 10 developers to deliver a project 2 weeks ahead of schedule.",
      gradient: "from-emerald-400 via-green-500 to-teal-600",
      bgGradient: "from-emerald-500/20 to-teal-500/20",
      stats: "2 weeks",
      delay: "0.2s",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Optimized Load Time",
      description: "Successfully reduced application load time by 50% through optimized coding practices.",
      gradient: "from-purple-400 via-violet-500 to-pink-600",
      bgGradient: "from-purple-500/20 to-pink-500/20",
      stats: "50%",
      delay: "0.4s",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Enhanced User Engagement",
      description: "Improved user engagement by 60% through enhanced UI/UX design and smoother navigation.",
      gradient: "from-blue-400 via-cyan-500 to-indigo-600",
      bgGradient: "from-blue-500/20 to-indigo-500/20",
      stats: "60%",
      delay: "0.6s",
    },
  ]

  const techStackCategories = {
    "Frontend Frameworks": [
      { name: "React JS", icon: <Code2 className="h-5 w-5" />, color: "from-blue-400 to-cyan-500", level: 95 },
      { name: "Next.js", icon: <Globe className="h-5 w-5" />, color: "from-gray-700 to-gray-900", level: 90 },
      { name: "Angular", icon: <Code2 className="h-5 w-5" />, color: "from-red-500 to-red-700", level: 85 },
    ],
    "State Management": [
      {
        name: "React Redux",
        icon: <Database className="h-5 w-5" />,
        color: "from-purple-500 to-indigo-600",
        level: 92,
      },
    ],
    "Backend & APIs": [
      { name: "Node.js", icon: <Server className="h-5 w-5" />, color: "from-green-500 to-emerald-600", level: 88 },
      { name: "Express", icon: <Server className="h-5 w-5" />, color: "from-gray-600 to-gray-800", level: 85 },
      { name: "GraphQL", icon: <Server className="h-5 w-5" />, color: "from-pink-500 to-rose-600", level: 80 },
    ],
    "Programming Languages": [
      { name: "JavaScript", icon: <Code2 className="h-5 w-5" />, color: "from-yellow-400 to-orange-500", level: 95 },
      { name: "Core Java", icon: <Cpu className="h-5 w-5" />, color: "from-red-600 to-orange-600", level: 82 },
      { name: "Python", icon: <Code2 className="h-5 w-5" />, color: "from-blue-600 to-green-500", level: 75 },
    ],
    "Web Technologies": [
      { name: "HTML", icon: <Globe className="h-5 w-5" />, color: "from-orange-500 to-red-500", level: 98 },
      { name: "CSS", icon: <Palette className="h-5 w-5" />, color: "from-blue-500 to-purple-600", level: 95 },
    ],
    "Testing & Quality": [
      { name: "JEST", icon: <TestTube className="h-5 w-5" />, color: "from-green-400 to-teal-500", level: 88 },
      { name: "Cypress.js", icon: <TestTube className="h-5 w-5" />, color: "from-teal-400 to-cyan-500", level: 85 },
    ],
    "Database & Cloud": [
      { name: "MongoDB", icon: <Database className="h-5 w-5" />, color: "from-green-600 to-teal-600", level: 85 },
      { name: "AWS", icon: <Cloud className="h-5 w-5" />, color: "from-orange-400 to-yellow-500", level: 80 },
    ],
    "Development Tools": [
      { name: "GIT", icon: <GitBranch className="h-5 w-5" />, color: "from-gray-700 to-orange-600", level: 92 },
      { name: "Agile (Scrum)", icon: <Users className="h-5 w-5" />, color: "from-indigo-500 to-purple-600", level: 90 },
    ],
    "AI & Modern Tech": [
      {
        name: "Prompt Engineering",
        icon: <Brain className="h-5 w-5" />,
        color: "from-purple-600 to-pink-600",
        level: 88,
      },
    ],
  }

  const industrySkillsWithIcons = [
    { name: "UX/UI", icon: <Palette className="h-4 w-4" />, color: "from-pink-500 to-purple-600" },
    {
      name: "Design mock up and wireframes",
      icon: <Wrench className="h-4 w-4" />,
      color: "from-blue-500 to-indigo-600",
    },
    { name: "SEO", icon: <Search className="h-4 w-4" />, color: "from-green-500 to-teal-600" },
    { name: "Building APIs", icon: <Server className="h-4 w-4" />, color: "from-orange-500 to-red-600" },
    { name: "Test performance", icon: <BarChart3 className="h-4 w-4" />, color: "from-purple-500 to-pink-600" },
  ]

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
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 glass-effect hover:scale-105 relative overflow-hidden"
              style={{ animationDelay: achievement.delay }}
            >
              <CardContent className="p-6 text-center relative overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${achievement.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg`}
                ></div>

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-2 right-2 w-2 h-2 bg-white rounded-full animate-ping"></div>
                  <div
                    className="absolute bottom-4 left-4 w-1 h-1 bg-purple-400 rounded-full animate-pulse"
                    style={{ animationDelay: "1s" }}
                  ></div>
                  <div
                    className="absolute top-1/2 right-6 w-1.5 h-1.5 bg-orange-400 rounded-full animate-bounce"
                    style={{ animationDelay: "0.5s" }}
                  ></div>
                </div>

                <div className="relative z-10">
                  <div
                    className={`mb-4 flex justify-center group-hover:scale-125 transition-transform duration-300 text-transparent bg-gradient-to-r ${achievement.gradient} bg-clip-text group-hover:animate-bounce`}
                  >
                    {achievement.icon}
                  </div>

                  <div
                    className={`absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110`}
                  >
                    <div
                      className={`px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${achievement.gradient} text-white shadow-lg animate-pulse`}
                    >
                      {achievement.stats}
                    </div>
                  </div>
                </div>

                <h3 className="font-sans text-lg font-bold mb-3 text-balance group-hover:text-white transition-colors duration-300 relative z-10">
                  {achievement.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-gray-200 transition-colors duration-300 relative z-10">
                  {achievement.description}
                </p>

                <div className="mt-4 h-1 bg-gray-200 rounded-full overflow-hidden relative z-10">
                  <div
                    className={`h-full bg-gradient-to-r ${achievement.gradient} transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-out`}
                    style={{ animationDelay: achievement.delay }}
                  ></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="animate-slide-in-left">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-gradient-to-r from-purple-600 to-orange-500 animate-pulse">
                <Code2 className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-sans text-2xl font-bold bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
                Tech Stack
              </h3>
              <div className="flex-1 h-px bg-gradient-to-r from-purple-600/50 to-transparent"></div>
            </div>

            <div className="space-y-8">
              {Object.entries(techStackCategories).map(([category, skills]) => (
                <div key={category} className="space-y-4">
                  <div className="flex items-center gap-3">
                    <h4 className="text-lg font-semibold bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">
                      {category}
                    </h4>
                    <div className="flex-1 h-px bg-gradient-to-r from-purple-400/30 to-transparent"></div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {skills.map((skill, index) => (
                      <div
                        key={index}
                        className="group relative overflow-hidden rounded-xl p-4 glass-effect hover:shadow-xl transition-all duration-500 hover:-translate-y-2 cursor-pointer border border-purple-200/10 hover:border-purple-400/30"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <div className="absolute top-1 right-1 w-1 h-1 bg-purple-400 rounded-full animate-ping"></div>
                          <div
                            className="absolute bottom-2 left-2 w-0.5 h-0.5 bg-orange-400 rounded-full animate-pulse"
                            style={{ animationDelay: "0.5s" }}
                          ></div>
                        </div>

                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                        ></div>

                        <div className="relative z-10 flex items-center gap-3">
                          <div
                            className={`p-2 rounded-lg bg-gradient-to-r ${skill.color} group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg`}
                          >
                            <div className="text-white group-hover:animate-pulse">{skill.icon}</div>
                          </div>

                          <div className="flex-1">
                            <span className="text-sm font-medium text-foreground group-hover:text-white transition-colors duration-300 block">
                              {skill.name}
                            </span>

                            <div className="mt-2 relative">
                              <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden">
                                <div
                                  className={`h-full bg-gradient-to-r ${skill.color} transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-out`}
                                  style={{
                                    animationDelay: `${index * 100}ms`,
                                    width: `${skill.level}%`,
                                  }}
                                ></div>
                              </div>

                              <div className="absolute -top-6 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-500">
                                <span className="text-xs text-purple-400 font-mono font-bold">{skill.level}%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-slide-in-right">
            <h3 className="font-sans text-2xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Industry Skills
            </h3>
            <div className="space-y-4">
              {industrySkillsWithIcons.map((skill, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl p-6 glass-effect hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer border border-orange-200/20"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  ></div>
                  <div className="relative z-10 flex items-center gap-4">
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-r ${skill.color} group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <div className="text-white">{skill.icon}</div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground group-hover:text-orange-600 transition-colors duration-300">
                        {skill.name}
                      </h4>
                      <div
                        className={`mt-2 h-1 w-0 group-hover:w-full bg-gradient-to-r ${skill.color} transition-all duration-700 rounded-full`}
                      ></div>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Sparkles className="h-5 w-5 text-orange-500 animate-spin" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
