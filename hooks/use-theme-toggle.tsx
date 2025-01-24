"use client"

import { useEffect, useState } from "react";

export type Theme = "light" | "dark" | "sunset" | "forest" | "ocean" | "system";

export function useThemeToggle() {
    const initialTheme = (localStorage.getItem("theme") as Theme) || "system";
    const [theme, setTheme] = useState<Theme>(initialTheme);
    const [systemTheme, setSystemTheme] = useState<"light" | "dark">(
        window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
    );

    // Watching for system theme changes 👀
    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
        const handler = (e: MediaQueryListEvent) => {
            setSystemTheme(e.matches ? "dark" : "light")
        }

        mediaQuery.addEventListener("change", handler)
        return () => mediaQuery.removeEventListener("change", handler)
    }, [])

    // Applying theme changes 🎨
    useEffect(() => {
        const currentTheme = theme
        const effectiveTheme =
            currentTheme === "system" ? systemTheme : currentTheme

        document.documentElement.classList.remove("light", "dark", "sunset", "forest", "ocean")
        document.documentElement.classList.add(effectiveTheme)
        localStorage.setItem("theme", currentTheme)
    }, [theme, systemTheme])



    return { theme, setTheme };
}
