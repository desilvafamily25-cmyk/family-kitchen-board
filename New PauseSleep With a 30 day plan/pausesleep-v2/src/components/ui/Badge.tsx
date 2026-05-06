import { cn } from "@/lib/utils"

interface BadgeProps {
  children: React.ReactNode
  className?: string
  variant?: "rose" | "sage" | "grey"
}

export function Badge({ children, className, variant = "rose" }: BadgeProps) {
  const variants = {
    rose: "bg-warm-rose text-near-black",
    sage: "bg-sage text-white",
    grey: "bg-warm-grey text-near-black",
  }

  return (
    <span className={cn("inline-flex items-center gap-1.5 text-sm font-medium px-3 py-1 rounded-full", variants[variant], className)}>
      {children}
    </span>
  )
}
