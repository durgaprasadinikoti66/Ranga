"use client"

import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, Github, Linkedin, Code2, Sparkles } from "lucide-react"
import { useState } from "react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-br from-orange-500 to-red-500 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 right-20 text-purple-500/20 text-6xl font-mono animate-float">{"<>"}</div>
        <div className="absolute bottom-32 left-20 text-cyan-500/20 text-4xl font-mono animate-float-delayed">
          {"{}"}
        </div>
        <div className="absolute top-1/2 right-1/4 text-orange-500/20 text-5xl font-mono animate-float-slow">
          {"[]"}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="h-8 w-8 text-purple-400 animate-pulse" />
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-balance">
              Let's{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent animate-gradient">
                Connect
              </span>
            </h2>
            <Sparkles className="h-8 w-8 text-orange-400 animate-pulse delay-500" />
          </div>
          <p className="text-lg text-gray-100 max-w-3xl mx-auto leading-relaxed">
            Ready to discuss your next project or explore collaboration opportunities? I'd love to hear from you.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="font-serif text-2xl font-bold mb-6 text-gray-100 flex items-center gap-3">
                <Code2 className="h-6 w-6 text-purple-400" />
                Get In Touch
              </h3>
              <p className="text-gray-100 leading-relaxed mb-8">
                I'm always interested in hearing about new opportunities, challenging projects, and innovative ideas.
                Whether you're looking for a senior frontend developer or want to discuss the latest in web
                technologies, let's start a conversation.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group hover:transform hover:translate-x-2 transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500/20 to-purple-600/30 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-purple-500/20">
                  <Mail className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <p className="font-medium text-gray-100">Email</p>
                  <p className="text-gray-200 font-mono">reduxranga@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group hover:transform hover:translate-x-2 transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500/20 to-orange-600/30 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-orange-500/20">
                  <Phone className="h-6 w-6 text-orange-400" />
                </div>
                <div>
                  <p className="font-medium text-gray-100">Phone</p>
                  <p className="text-gray-200 font-mono">+91 9677274855</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group hover:transform hover:translate-x-2 transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500/20 to-cyan-600/30 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-cyan-500/20">
                  <MapPin className="h-6 w-6 text-cyan-400" />
                </div>
                <div>
                  <p className="font-medium text-gray-100">Location</p>
                  <p className="text-gray-200">Bangalore, India</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-700/50">
              <h4 className="font-medium text-gray-100 mb-4">Connect on Social</h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg flex items-center justify-center hover:from-purple-600 hover:to-purple-700 transition-all duration-300 hover:scale-110 group"
                >
                  <Github className="h-5 w-5 text-gray-300 group-hover:text-white" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg flex items-center justify-center hover:from-blue-600 hover:to-blue-700 transition-all duration-300 hover:scale-110 group"
                >
                  <Linkedin className="h-5 w-5 text-gray-300 group-hover:text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="border-border/50 backdrop-blur-sm bg-card/80 hover:bg-card/90 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10">
            <CardHeader>
              <CardTitle className="font-serif text-xl flex items-center gap-3">
                <Send className="h-5 w-5 text-purple-400" />
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="group">
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="focus:ring-purple-500 focus:border-purple-500 group-hover:border-purple-400/50 transition-colors duration-300"
                  />
                </div>

                <div className="group">
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="focus:ring-purple-500 focus:border-purple-500 group-hover:border-purple-400/50 transition-colors duration-300"
                  />
                </div>

                <div className="group">
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="focus:ring-purple-500 focus:border-purple-500 resize-none group-hover:border-purple-400/50 transition-colors duration-300"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-orange-600 hover:from-purple-700 hover:to-orange-700 text-white font-medium py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
