import { cn } from "@/lib/utils"

interface TechDecorationProps {
  className?: string
  variant?: string
}

export default function TechDecoration({ className, variant = "1" }: TechDecorationProps) {
  const getDecoration = () => {
    switch (variant) {
      case "1":
        return (
          <div className="w-32 h-32 opacity-20">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="1" />
              <path d="M30 50H70" stroke="currentColor" strokeWidth="1" />
              <path d="M50 30V70" stroke="currentColor" strokeWidth="1" />
              <circle cx="50" cy="50" r="10" stroke="currentColor" strokeWidth="1" />
            </svg>
          </div>
        )
      case "2":
        return (
          <div className="w-40 h-40 opacity-20">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="20" y="20" width="60" height="60" stroke="currentColor" strokeWidth="1" />
              <path d="M20 40H80" stroke="currentColor" strokeWidth="1" />
              <path d="M20 60H80" stroke="currentColor" strokeWidth="1" />
              <path d="M40 20V80" stroke="currentColor" strokeWidth="1" />
              <path d="M60 20V80" stroke="currentColor" strokeWidth="1" />
            </svg>
          </div>
        )
      case "3":
        return (
          <div className="w-36 h-36 opacity-20">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 20L80 80" stroke="currentColor" strokeWidth="1" />
              <path d="M20 80L80 20" stroke="currentColor" strokeWidth="1" />
              <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="1" />
            </svg>
          </div>
        )
      case "4":
        return (
          <div className="w-48 h-48 opacity-20">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 10L90 30V70L50 90L10 70V30L50 10Z" stroke="currentColor" strokeWidth="1" />
              <path d="M50 10V90" stroke="currentColor" strokeWidth="1" />
              <path d="M10 30L90 70" stroke="currentColor" strokeWidth="1" />
              <path d="M90 30L10 70" stroke="currentColor" strokeWidth="1" />
            </svg>
          </div>
        )
      case "5":
        return (
          <div className="w-24 h-24 opacity-20">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="10" stroke="currentColor" strokeWidth="1" />
              <circle cx="80" cy="20" r="10" stroke="currentColor" strokeWidth="1" />
              <circle cx="20" cy="80" r="10" stroke="currentColor" strokeWidth="1" />
              <circle cx="80" cy="80" r="10" stroke="currentColor" strokeWidth="1" />
              <path d="M20 20L80 20" stroke="currentColor" strokeWidth="1" />
              <path d="M20 20L20 80" stroke="currentColor" strokeWidth="1" />
              <path d="M80 20L80 80" stroke="currentColor" strokeWidth="1" />
              <path d="M20 80L80 80" stroke="currentColor" strokeWidth="1" />
              <path d="M20 20L80 80" stroke="currentColor" strokeWidth="1" />
              <path d="M80 20L20 80" stroke="currentColor" strokeWidth="1" />
            </svg>
          </div>
        )
      default:
        return (
          <div className="w-32 h-32 opacity-20">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="1" />
            </svg>
          </div>
        )
    }
  }

  return <div className={cn("absolute text-lime-400 z-0", className)}>{getDecoration()}</div>
}
