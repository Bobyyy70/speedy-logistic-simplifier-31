
import React from 'react'
import { cn } from '@/lib/utils'
import { VariantProps, cva } from "class-variance-authority"
import { Slot } from "@radix-ui/react-slot"

const buttonVariants = cva(
    "relative group border text-foreground mx-auto text-center rounded-lg",
    {
        variants: {
            variant: {
                default: "bg-speedelog-50 hover:bg-speedelog-100 border-speedelog-200 text-speedelog-700",
                solid: "bg-speedelog-500 hover:bg-speedelog-600 text-white border-transparent transition-all duration-200",
                ghost: "border-transparent bg-transparent hover:bg-white/10",
            },
            size: {
                default: "px-7 py-1.5 ",
                sm: "px-4 py-0.5 ",
                lg: "px-10 py-2.5 ",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> { 
        neon?: boolean;
        asChild?: boolean;
    }

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, neon = false, size, variant, asChild = false, children, ...props }, ref) => {
        const Comp = asChild ? Slot : "button"
        
        return (
            <Comp
                className={cn(buttonVariants({ variant, size }), className)}
                ref={ref}
                {...props}
            >
                {neon && <span className="absolute h-px opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out inset-x-0 inset-y-0 bg-gradient-to-r w-3/4 mx-auto from-transparent via-speedelog-500 to-transparent" />}
                {children}
                {neon && <span className="absolute group-hover:opacity-30 transition-all duration-500 ease-in-out inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-speedelog-500 to-transparent" />}
            </Comp>
        );
    }
)

Button.displayName = 'Button';

export { Button, buttonVariants };
