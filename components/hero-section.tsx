"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail, Sparkles, Code, Terminal, Zap, Cpu, Database, Globe } from "lucide-react"

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  const handleGithubClick = () => {
    window.open("https://github.com/komarthiranga", "_blank")
  }
  const handleLinkedinClick = () => {
    window.open("https://www.linkedin.com/in/ranga-komarthi-89b96b44/", "_blank")
  }
  const handleMailClick = () => {
    window.open("mailto:reduxranga@gmail.com", "_blank")
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/50 to-slate-900 animate-gradient-shift"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-cyan-900/20 to-orange-900/30 animate-gradient-pulse"></div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full blur-3xl animate-float glass-effect"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-orange-400/20 to-pink-400/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/3 right-1/3 w-48 h-48 bg-gradient-to-r from-cyan-400/15 to-blue-400/15 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "4s" }}
        ></div>

        <div
          className="absolute top-20 left-10 animate-float opacity-30 hover:opacity-60 transition-opacity"
          style={{ animationDelay: "1s" }}
        >
          <Code className="h-12 w-12 text-cyan-300 drop-shadow-lg" />
        </div>
        <div
          className="absolute top-40 right-20 animate-float opacity-30 hover:opacity-60 transition-opacity"
          style={{ animationDelay: "3s" }}
        >
          <Terminal className="h-10 w-10 text-green-300 drop-shadow-lg" />
        </div>
        <div
          className="absolute bottom-40 left-20 animate-float opacity-30 hover:opacity-60 transition-opacity"
          style={{ animationDelay: "5s" }}
        >
          <Zap className="h-8 w-8 text-yellow-300 drop-shadow-lg" />
        </div>
        <div
          className="absolute top-60 right-10 animate-float opacity-30 hover:opacity-60 transition-opacity"
          style={{ animationDelay: "7s" }}
        >
          <Cpu className="h-10 w-10 text-purple-300 drop-shadow-lg" />
        </div>
        <div
          className="absolute bottom-60 right-32 animate-float opacity-30 hover:opacity-60 transition-opacity"
          style={{ animationDelay: "9s" }}
        >
          <Database className="h-9 w-9 text-orange-300 drop-shadow-lg" />
        </div>
        <div
          className="absolute top-80 left-32 animate-float opacity-30 hover:opacity-60 transition-opacity"
          style={{ animationDelay: "11s" }}
        >
          <Globe className="h-8 w-8 text-pink-300 drop-shadow-lg" />
        </div>

        <div
          className="absolute top-32 right-32 animate-float opacity-20 font-mono text-sm text-cyan-200 bg-black/20 px-3 py-1 rounded backdrop-blur-sm"
          style={{ animationDelay: "2s" }}
        >
          const developer = "Ranga";
        </div>
        <div
          className="absolute bottom-32 right-40 animate-float opacity-20 font-mono text-sm text-green-200 bg-black/20 px-3 py-1 rounded backdrop-blur-sm"
          style={{ animationDelay: "4s" }}
        >
          {"<React.StrictMode />"}
        </div>
        <div
          className="absolute top-60 left-40 animate-float opacity-20 font-mono text-sm text-purple-200 bg-black/20 px-3 py-1 rounded backdrop-blur-sm"
          style={{ animationDelay: "6s" }}
        >
          npm run build --prod
        </div>
        <div
          className="absolute bottom-80 left-60 animate-float opacity-20 font-mono text-sm text-orange-200 bg-black/20 px-3 py-1 rounded backdrop-blur-sm"
          style={{ animationDelay: "8s" }}
        >
          {"{ useState, useEffect }"}
        </div>
        <div
          className="absolute top-96 right-60 animate-float opacity-20 font-mono text-sm text-pink-200 bg-black/20 px-3 py-1 rounded backdrop-blur-sm"
          style={{ animationDelay: "10s" }}
        >
          GraphQL.query()
        </div>

        <div className="absolute top-10 left-1/2 w-1 h-32 bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent animate-pulse"></div>
        <div className="absolute bottom-10 right-1/2 w-1 h-32 bg-gradient-to-b from-transparent via-purple-400/30 to-transparent animate-pulse delay-1000"></div>
        <div className="absolute left-10 top-1/2 h-1 w-32 bg-gradient-to-r from-transparent via-orange-400/30 to-transparent animate-pulse delay-500"></div>
        <div className="absolute right-10 bottom-1/2 h-1 w-32 bg-gradient-to-r from-transparent via-pink-400/30 to-transparent animate-pulse delay-1500"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6 animate-slide-in-left">
            <div className="flex justify-center items-center gap-2 mb-4">
              <Sparkles className="h-6 w-6 text-cyan-400 animate-pulse" />
              <Sparkles className="h-8 w-8 text-purple-400 animate-pulse delay-300" />
              <Sparkles className="h-6 w-6 text-orange-400 animate-pulse delay-600" />
            </div>
            <h1 className="font-sans text-6xl md:text-8xl font-bold text-balance">
              <span className="bg-gradient-to-r from-cyan-200 via-purple-200 via-pink-200 to-orange-200 bg-clip-text text-transparent drop-shadow-2xl animate-text-glow">
                RANGA KOMARTHI
              </span>
            </h1>
          </div>

          <p className="text-xl md:text-2xl bg-gradient-to-r from-cyan-300 via-purple-300 to-orange-300 bg-clip-text text-transparent mb-8 font-medium animate-slide-in-right">
            Senior Frontend Developer & Tech Innovator
          </p>

          <p className="text-lg text-gray-100 max-w-2xl mx-auto mb-12 leading-relaxed animate-slide-in-left drop-shadow-lg">
            Crafting exceptional digital experiences with React, Next.js, and modern web technologies. Leading teams to
            deliver innovative solutions at scale with passion for clean code and user-centric design.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-in-right">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-8 py-3 text-lg font-semibold shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
              onClick={() => scrollToSection("projects")}
            >
              <Sparkles className="h-4 w-4 mr-2" />
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-gradient bg-gradient-to-r from-transparent to-transparent hover:from-purple-600/20 hover:to-cyan-600/20 text-white px-8 py-3 text-lg font-semibold glass-effect backdrop-blur-sm transition-all duration-300 hover:scale-105"
              onClick={() => scrollToSection("contact")}
            >
              <Mail className="h-4 w-4 mr-2" />
              Get In Touch
            </Button>
          </div>

          <div className="flex justify-center space-x-6 mb-12">
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-100 hover:text-purple-300 hover:bg-purple-500/20 glass-effect transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-transparent hover:border-purple-400/30"
              onClick={handleGithubClick}
            >
              <Github className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-100 hover:text-cyan-300 hover:bg-cyan-500/20 glass-effect transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-transparent hover:border-cyan-400/30"
              onClick={handleLinkedinClick}
            >
              <Linkedin className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-100 hover:text-orange-300 hover:bg-orange-500/20 glass-effect transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-transparent hover:border-orange-400/30"
              onClick={handleMailClick}
            >
              <Mail className="h-6 w-6" />
            </Button>
          </div>

          <Button
            variant="ghost"
            className="animate-bounce text-gray-100 hover:text-purple-300 transition-colors duration-300"
            onClick={() => scrollToSection("about")}
          >
            <ArrowDown className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  )
}
