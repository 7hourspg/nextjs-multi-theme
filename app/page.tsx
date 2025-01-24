"use client"

import { ThemeChooser } from "../components/theme-dialog"
import Link from "next/link"
import { Palette, Code2, BookOpen, Sparkles } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 pb-20 font-[family-name:var(--font-geist-sans)] bg-background text-foreground">
      <div className="fixed top-4 right-4 flex gap-2">
        <ThemeChooser />
      </div>

      <main className="max-w-4xl mx-auto mt-20">
        <div className="text-center space-y-8">
          <div className="flex items-center justify-center gap-2 text-primary">
            <Palette className="w-8 h-8" />
            <Sparkles className="w-6 h-6" />
          </div>
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            Themes, Reimagined
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover the art of multi-theme implementation in Next.js. A minimal, yet powerful 
            demonstration showcasing seamless theme switching with Tailwind CSS and Radix UI.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="#"
              className="rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary inline-flex items-center gap-2"
            >
              <Code2 className="w-4 h-4" />
              View Source
            </Link>
            <Link href="#" className="text-sm font-semibold leading-6 inline-flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              Documentation <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}

