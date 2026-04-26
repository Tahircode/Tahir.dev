"use client"

import { useState, useEffect } from "react"
import clsx from "clsx"
import { socialLinks } from "@/components/SocialLinksVertical"

export default function SocialLinksFloating() {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
        if (open && !(event.target as HTMLElement).closest('.mobile-nav')) {
            setOpen(false)
        }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
}, [open])

  return (
    <div className="fixed bottom-6 right-6 z-50 hidden md:flex xl:hidden flex-col items-end gap-3">
      
      {/* Social icons */}
      <div
        className={clsx(
          "flex flex-col gap-4 p-4 rounded-2xl",
          "backdrop-blur-lg",
          "transition-all duration-300",
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        )}
      >
        {socialLinks.map(link => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-transform hover:scale-110 ${link.color}`}
          >
            {link.icon}
          </a>
        ))}
      </div>

      {/* Toggle button */}
      <button
        onClick={() => setOpen(prev => !prev)}
        className="w-12 h-12 rounded-full border border-gary-400
                   flex items-center justify-center shadow-lg
                   active:scale-95 transition"
        aria-label="Social links"
      >
        🔗
      </button>
    </div>
  )
}
