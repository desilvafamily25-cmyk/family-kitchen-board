"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface ButtonProps {
  variant?: "primary" | "secondary" | "ghost"
  href?: string
  onClick?: () => void
  children: React.ReactNode
  className?: string
  showArrow?: boolean
  type?: "button" | "submit" | "reset"
  disabled?: boolean
}

export function Button({
  variant = "primary",
  href,
  onClick,
  children,
  className,
  showArrow = true,
  type = "button",
  disabled,
}: ButtonProps) {
  const base = "inline-flex items-center gap-2 font-semibold transition-all duration-200 rounded-lg text-[15px] tracking-wide"

  const variants = {
    primary: "bg-sage text-white px-6 py-3 hover:bg-sage-dark shadow-sm hover:shadow-md",
    secondary: "border-2 border-sage text-sage px-6 py-3 hover:bg-sage hover:text-white",
    ghost: "text-sage underline-offset-4 hover:underline px-0 py-1",
  }

  const classes = cn(base, variants[variant], disabled && "opacity-50 cursor-not-allowed", className)

  const content = (
    <>
      {children}
      {showArrow && variant !== "ghost" && <ArrowRight className="w-4 h-4" />}
    </>
  )

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {content}
    </button>
  )
}
