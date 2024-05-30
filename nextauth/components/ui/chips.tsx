import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap font-semibold rounded-full text-base outline-[1px]  border-[1px] border-solid",
  {
    variants: {
      variant: {
        default: "bg-primary/90 text-white border-primary",
        secondary: "bg-secondary/90 border-secondary",
        light: "bg-white/10 text-white border-white",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-9 px-3",
        lg: "h-11 text-base px-8",
        icon: "h-10 w-10",
      },

      chipType: {
        default: "",
        upcoming: "opacity-70 cursor-not-allowed",
        active: "border-2",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      chipType: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const ModuleChip = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, chipType, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        disabled={chipType === "upcoming"}
        className={cn(buttonVariants({ variant, size, className, chipType }))}
        ref={ref}
        {...props}
      />
    );
  }
);
ModuleChip.displayName = "ModuleChip";

export { ModuleChip, buttonVariants };
