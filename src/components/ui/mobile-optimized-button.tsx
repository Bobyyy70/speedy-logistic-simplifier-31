
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const mobileButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 touch-manipulation",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        gradient: "bg-gradient-to-r from-blue-600 via-blue-500 to-orange-400 hover:brightness-110 text-white border-0 shadow-md hover:shadow-lg",
        gradientOutline: "border border-blue-400/30 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-blue-400/50 text-foreground",
        purple: "bg-[#9b87f5] hover:bg-[#8b77e5] text-white border-0 shadow-md hover:shadow-lg",
        blue: "bg-[#2F68F3] hover:bg-[#2057E2] text-white border-0 shadow-md hover:shadow-lg transition-all duration-300"
      },
      size: {
        default: "h-10 px-4 py-2 min-h-[48px] min-w-[48px]",
        sm: "h-9 rounded-md px-3 min-h-[44px] min-w-[44px]",
        lg: "h-11 rounded-md px-8 min-h-[48px] min-w-[48px]",
        icon: "h-12 w-12 min-h-[48px] min-w-[48px]",
        xl: "h-12 rounded-full px-10 py-3 text-base min-h-[48px] min-w-[120px]",
        "2xl": "h-14 rounded-full px-12 py-4 text-lg min-h-[56px] min-w-[140px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface MobileButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof mobileButtonVariants> {
  asChild?: boolean
}

const MobileOptimizedButton = React.forwardRef<HTMLButtonElement, MobileButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(mobileButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
MobileOptimizedButton.displayName = "MobileOptimizedButton"

export { MobileOptimizedButton, mobileButtonVariants }
