'use client'

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { PiSun,PiMoon } from "react-icons/pi";



export default function ThemeSwitcher() {
    const [mounted, setMounted] = useState(false);
    const { setTheme, resolvedTheme } = useTheme();

    useEffect(() => { setMounted(true) }, [])

    return (
        <div className="mt-2">
            {!mounted ? <></> : <div>{resolvedTheme === "light" ? <PiMoon  onClick={() => setTheme("dark")} className="scale-150 text-black" /> : <PiSun onClick={() => setTheme("light")} className="scale-125 text-yellow-500" />}</div>}
        </div>
    )
}