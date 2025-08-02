import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, ExternalLink, MapPin, Clock, Users, Star, Mail, Globe } from "lucide-react"

{/* https://medium.com/@jagoda11/deploying-a-react-app-with-typescript-and-github-actions-to-github-pages-93c12d6c6675
 */}

 {/* https://blog.logrocket.com/gh-pages-react-apps/ */}

export default function Portfolio() {
  const projects = [
    {
      name: "LeetCode Activities",
      description: "Collection of LeetCode problem solutions and coding practice",
      language: "Python",
      languageColor: "#3776ab",
      stars: 12,
      url: "https://github.com/FunkeGoodVibe/LeetCode",
    },
    {
      name: "Portfolio Website",
      description: "Personal portfolio website showcasing projects and skills",
      language: "CSS",
      languageColor: "#1572B6",
      stars: 8,
      url: "https://funkegoodvibe.github.io",
    },
    {
      name: "Pattern Matching Calendar",
      description: "Creates a new appointment in the user diary from a plain text sentence",
      language: "Java",
      languageColor: "#b07219",
      stars: 15,
      url: "https://github.com/FunkeGoodVibe/Pattern-Matching-Calender",
    },
    {
      name: "Fox Goose Bean Logic Game",
      description: "Stefan & Funke Java GUI Swing puzzle game implementation",
      language: "Java",
      languageColor: "#b07219",
      stars: 6,
      url: "https://github.com/FunkeGoodVibe/FoxGooseBeanLogicGame",
    },
    {
      name: "Banks4Climate",
      description: "Hackathon project exploring how banks can change the world",
      language: "Jupyter Notebook",
      languageColor: "#DA5B0B",
      stars: 23,
      url: "https://github.com/FunkeGoodVibe/banks4climate",
    },
    {
      name: "Canvas Scraping",
      description: "Scraping the little hub website for data analysis",
      language: "Python",
      languageColor: "#3776ab",
      stars: 4,
      url: "https://github.com/FunkeGoodVibe/CanvaScraping",
    },
  ]

  const skills = [
    { name: "Python", level: "Intermediate" },
    { name: "Natural Language Processing", level: "Basic"},
    { name: "Java", level: "Basic" },
    { name: "JavaScript", level: "Basic" },
    { name: "CSS", level: "Basic" },
    { name: "Data Analysis", level: "Intermediate" },
    { name: "Web Scraping", level: "Intermediate" },
    { name: "Algorithm Design", level: "Basic" },
    { name: "GUI Development", level: "Basic" },
    { name: "Game Development", level: "Basic" },
    { name: "Canva (graphic design)", level: "Basic" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <span className="font-bold">FunkeGoodVibe</span>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <nav className="flex items-center space-x-6">
              <Link href="#about" className="text-sm font-medium hover:text-primary">
                About
              </Link>
              <Link href="#projects" className="text-sm font-medium hover:text-primary">
                Projects
              </Link>
              <Link href="#skills" className="text-sm font-medium hover:text-primary">
                Skills
              </Link>
              <Link href="#contact" className="text-sm font-medium hover:text-primary">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-8">
            <Image
              src="/placeholder.svg?height=150&width=150"
              alt="FunkeGoodVibe Avatar"
              width={150}
              height={150}
              className="mx-auto rounded-full border-4 border-white shadow-lg"
            />
          </div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-6xl">
            Hi, I'm <span className="text-primary">FunkeGoodVibe</span>
          </h1>
          <p className="mb-8 text-xl text-muted-foreground max-w-2xl mx-auto">
            Software Developer & Problem Solver passionate about creating innovative solutions and exploring the
            intersection of technology and social impact.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              United Kingdom
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              GMT+0
            </div>
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              26 followers · 124 following
            </div>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4" />
              121 stars earned
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild>
              <Link href="https://github.com/FunkeGoodVibe" target="_blank">
                <Github className="mr-2 h-4 w-4" />
                GitHub Profile
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="https://funkegoodvibe.github.io" target="_blank">
                <Globe className="mr-2 h-4 w-4" />
                Website
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="https://funkegoodvibe.substack.com" target="_blank">
                <ExternalLink className="mr-2 h-4 w-4" />
                Substack
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A selection of my recent work showcasing various technologies and problem-solving approaches.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg">{project.name}</CardTitle>
                    <Link href={project.url} target="_blank" className="text-muted-foreground hover:text-primary">
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  </div>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: project.languageColor }} />
                      <span className="text-sm text-muted-foreground">{project.language}</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Star className="h-3 w-3" />
                      {project.stars}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Skills & Technologies</h2>
            <p className="text-muted-foreground">Technologies and tools I work with to bring ideas to life.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="flex items-center justify-between p-4 rounded-lg border bg-card">
                <span className="font-medium">{skill.name}</span>
                <Badge variant={skill.level === "Advanced" ? "default" : "secondary"}>{skill.level}</Badge>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground mb-8">
            Interested in collaborating or have a project in mind? I'd love to hear from you!
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild>
              <Link href="mailto:contact@funkegoodvibe.dev">
                <Mail className="mr-2 h-4 w-4" />
                Send Email
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="https://github.com/FunkeGoodVibe" target="_blank">
                <Github className="mr-2 h-4 w-4" />
                Follow on GitHub
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t">
        <div className="container mx-auto max-w-4xl text-center text-muted-foreground">
          <p>&copy; 2025 FunkeGoodVibe. Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  )
}
