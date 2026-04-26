"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { Menu, X } from 'lucide-react'
import { navItems } from './Header'
import { socialLinks } from './SocialLinksVertical'

type NavItem = {
    url: string
    text: string
}

type MobileNavigationProps = {
    navItems: NavItem[]
}

export default function MobileNavigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isVisible, setIsVisible] = useState(false)
    const [isSocialsOpen, setIsSocialsOpen] = useState(false);
    const pathname = usePathname()


    // Close menu when clicking outside
    useEffect(() => {
        if (!isMenuOpen) setIsSocialsOpen(false)
        const handleClickOutside = (event: MouseEvent) => {
            if (isMenuOpen && !(event.target as HTMLElement).closest('.mobile-nav')) {
                setIsMenuOpen(false)
            }
        }

        document.addEventListener('click', handleClickOutside)
        return () => document.removeEventListener('click', handleClickOutside)
    }, [isMenuOpen])

    // Animation on mount
    useEffect(() => {
        setIsVisible(true)
    }, [])

    // Close menu on route change
    useEffect(() => {
        setIsMenuOpen(false)
    }, [pathname])

    return (
        <div className="md:hidden mobile-nav">
            {/* Floating Menu Button */}
            <button
                onClick={(e) => {
                    e.stopPropagation()
                    setIsMenuOpen(!isMenuOpen)
                }}
                className={clsx(
                    "relative md:hidden",
                    "w-8 h-8 rounded-full",
                    "border border-gray-400",
                    "shadow-lg hover:shadow-xl",
                    "active:scale-95",
                    "transition-all duration-300 ease-out",
                    "flex items-center justify-center",
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                )}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                style={{
                    transitionDelay: '200ms'
                }}
            >
                <div className="relative w-6 h-6">
                    <Menu className={clsx(
                        "absolute inset-0 w-6 h-6 text-gray-400",
                        "transition-all duration-300",
                        isMenuOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
                    )} />
                    <X className={clsx(
                        "absolute inset-0 w-6 h-6 text-gray-400",
                        "transition-all duration-300",
                        isMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
                    )} />
                </div>
            </button>

            {/* Navigation Menu */}
            <div className={clsx(
                "absolute top-14 right-0 z-40",
                "w-40 rounded-2xl",
                " menu",
                "backdrop-blur-lg",
                "border border-gray-400",
                "shadow-2xl",
                "transition-all duration-300 ease-out",
                isMenuOpen
                    ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
                    : "opacity-0 translate-y-4 scale-95 pointer-events-none"
            )}>
                {/* Menu arrow indicator */}
                <div className="absolute -top-2 left-12 w-4 h-4 
          menu border-r border-b 
          border-gray-400 rotate-45">
                </div>

                <ul className="">
                    {navItems.map((item, index) => (
                        <li key={item.url}>
                            <Link
                                href={item.url}
                                className={clsx(
                                    "flex items-center px-6 py-2",
                                    "text-gray-400",
                                    "transition-all duration-200",
                                    "hover:bg-emerald-900/20",
                                    "active:scale-[0.98]",
                                    pathname === item.url && ""
                                )}
                                style={{
                                    transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms'
                                }}
                            >
                                <span className={clsx(
                                    "w-1.5 h-1.5 rounded-full mr-4",
                                    "transition-all duration-300",
                                    pathname === item.url
                                        ? "bg-emerald-500 scale-125"
                                        : "bg-gray-300 dark:bg-gray-600 group-hover:bg-emerald-400"
                                )} />
                                <span className={clsx(
                                    "font-medium tracking-tight",
                                    "transition-all duration-300",
                                    pathname === item.url && "text-emerald-600 font-semibold"
                                )}>
                                    {item.text}
                                </span>
                                {pathname === item.url && (
                                    <span className="ml-auto w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                )}
                            </Link>
                        </li>
                    ))}
                    {/* Social button*/}
                    <li>
                        <button
                            onClick={() => setIsSocialsOpen(prev => !prev)}
                            className={clsx(
                                "flex w-full items-center px-6 py-3",
                                "text-gray-400",
                                "transition-all duration-200",
                                "hover:bg-emerald-900/20"
                            )}
                        >
                            <span className="w-1.5 h-1.5 rounded-full mr-4 bg-gray-400" />
                            <span className="font-medium">Socials</span>
                            <span
                                className={clsx(
                                    "ml-auto transition-transform duration-300",
                                    isSocialsOpen ? "rotate-0" : "-rotate-180"
                                )}
                            >
                                ◀
                            </span>
                        </button>
                    </li>

                </ul>
            </div>
            {/* SOCIALS SUBMENU */}
            <div
                className={clsx(
                    "absolute top-65 right-[10rem] z-40",
                    "rounded-2xl",
                    "menu backdrop-blur-lg",
                    "border border-gray-400",
                    "shadow-2xl",
                    "transition-all duration-300 ease-out",
                    isSocialsOpen
                        ? "opacity-100 translate-x-0 pointer-events-auto"
                        : "opacity-0 translate-x-4 pointer-events-none"
                )}
            >
                {/* Arrow */}
                <div
                    className="absolute top-4 -right-2 w-4 h-4 rotate-45
               border-t border-l border-gray-400 menu"
                />

                <div className="flex items-center p-3">
                    {socialLinks.map((item) => (
                        <div key={item.name} className="relative group">
                            <a
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => {
                                    setIsSocialsOpen(false)
                                    setIsMenuOpen(false)
                                }}
                                className={clsx(
                                    "flex items-center justify-center",
                                    "w-6 h-10 rounded-full mx-1",
                                    "transition-all duration-200",
                                    "hover:scale-110",
                                    item.color
                                )}
                                aria-label={item.name}
                            >
                                <span className="text-lg">
                                    {item.icon}
                                </span>
                            </a>

                            {/* Tooltip */}
                            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2
                       opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                <div className="relative px-2 text-gray-600 text-xs rounded whitespace-nowrap">
                                    {item.name}
                                    {/* Tooltip arrow */}
                                    <div className="absolute top-full left-1/2 transform -translate-x-1/2
                          border-4 border-transparent border-t-gray-900"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Backdrop overlay */}
            <div
                onClick={() => setIsMenuOpen(false)}
                className={clsx(
                    "fixed inset-0 z-30",
                    "backdrop-blur-sm transition-opacity duration-300",
                    isMenuOpen
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none"
                )}
            />
        </div>
    )
}