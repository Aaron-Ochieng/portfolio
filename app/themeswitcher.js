'use client'

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { PiSunDimLight,PiMoonThin } from "react-icons/pi";



export default function ThemeSwitcher() {
    const [mounted, setMounted] = useState(false);
    const { setTheme, resolvedTheme } = useTheme();

    useEffect(() => { setMounted(true) }, [])

    return (
        <div className="sm:mb-2">
            {!mounted ? <></> : <div>{resolvedTheme === "light" ? <PiMoonThin onClick={() => setTheme("dark")} className="scale-150" /> : <PiSunDimLight onClick={() => setTheme("light")} className="scale-150 text-white" />}</div>}
        </div>
    )
}