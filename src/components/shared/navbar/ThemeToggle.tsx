'use client'
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

import { useTheme } from 'next-themes'
import { useEffect, useState } from "react";

const ThemeToggle = () => {
    const {resolvedTheme, setTheme} = useTheme()
    const [mounted, setMounted] = useState(false)
    useEffect(()=>{
        setMounted(true)
    },[])
    if (!mounted){
        return <button aria-label="Toggle theme" className="size-10 rounded-full"></button>
    }
 
    return (
        <button onClick={()=>setTheme(resolvedTheme==='dark'?'light':'dark')} aria-label="Toggle theme" className="flex size-10 items-center justify-center rounded-full border border-border  text-gray-700 transition hover:bg-gray-100 cursor-pointer dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800">
            {
                resolvedTheme==='dark'? <MdOutlineLightMode size={20}/> : <MdOutlineDarkMode size={20}/>
            }
        </button>
    );
};

export default ThemeToggle;