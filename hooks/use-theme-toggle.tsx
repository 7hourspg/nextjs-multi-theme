"use client"

import { useEffect, useState } from "react";

export type Theme = "light" | "dark" | "sunset" | "forest" | "ocean" | "system";

export function useThemeToggle() {
    const [theme, setTheme] = useState<Theme>(() => {
        if (typeof window !== 'undefined') {
            return (localStorage.getItem("theme") as Theme) || "system";
        }
        return "system";
    });
    
    const [systemTheme, setSystemTheme] = useState<"light" | "dark">(() => {
        if (typeof window !== 'undefined') {
            return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        }
        return "light";
    });

    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
        setSystemTheme(mediaQuery.matches ? "dark" : "light")
        
        const handler = (e: MediaQueryListEvent) => {
            setSystemTheme(e.matches ? "dark" : "light")
        }

        mediaQuery.addEventListener("change", handler)
        return () => mediaQuery.removeEventListener("change", handler)
    }, [])

    useEffect(() => {
        const currentTheme = theme
        const effectiveTheme =
            currentTheme === "system" ? systemTheme : currentTheme

        document.documentElement.classList.remove("light", "dark", "sunset", "forest", "ocean")
        document.documentElement.classList.add(effectiveTheme)
        if (typeof window !== 'undefined') {
            localStorage.setItem("theme", currentTheme)
        }
    }, [theme, systemTheme])

    return { theme, setTheme };
}
