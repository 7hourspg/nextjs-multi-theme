"use client"

import { useState } from "react"
import { Check, Palette } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { useThemeToggle } from "../hooks/use-theme-toggle"

const themes = [
  { name: "Light", value: "light", icon: "☀️" },
  { name: "Dark", value: "dark", icon: "🌙" },
  { name: "Sunset", value: "sunset", icon: "🌅" },
  { name: "Forest", value: "forest", icon: "🌲" },
  { name: "Ocean", value: "ocean", icon: "🌊" },
  { name: "System", value: "system", icon: "⚙️" },
] as const

export function ThemeChooser() {
  const [open, setOpen] = useState(false)
  const { theme, setTheme } = useThemeToggle()

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon" className="hover:scale-150 scale-125 transition-transform">
          <Palette className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Choose theme</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] p-0 overflow-hidden">
        <DialogHeader className="px-6 pt-6 pb-4 bg-muted/50">
          <DialogTitle className="text-2xl font-bold text-center">
            Choose Your Theme
          </DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-1 p-1 bg-muted/50">
          {themes.map((t) => (
            <Button
              key={t.value}
              variant="ghost"
              className={`
                relative h-32 flex flex-col items-center justify-center gap-3
                rounded-lg m-1 transition-all duration-200
                ${theme === t.value ? 'bg-primary text-primary-foreground scale-[0.97]' : 'hover:bg-accent hover:scale-[0.97]'}
              `}
              onClick={() => {
                setTheme(t.value)
                setOpen(false)
              }}
            >
              <div className="text-3xl mb-1">{t.icon}</div>
              <div className="text-lg font-semibold">{t.name}</div>
              <div className="text-xs opacity-85">
                {t.value === 'system' ? 'System default' : `${t.name} mode`}
              </div>
              {theme === t.value && (
                <div className="absolute inset-0 rounded-lg ring-2 ring-primary">
                  <Check className="absolute top-2 right-2 h-5 w-5" />
                </div>
              )}
            </Button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}

