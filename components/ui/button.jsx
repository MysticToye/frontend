import * as React from "react";
import { cn } from "@/lib/utils";

const Button = React.forwardRef(({ className, variant = "default", size = "default", ...props }, ref) => {
  const variants = {
    default: "bg-primary text-white hover:bg-primary-hover shadow-md active:scale-95 transition-all",
    outline: "border border-primary text-primary hover:bg-primary/10",
    ghost: "text-primary hover:bg-primary/10",
    secondary: "bg-navy text-white hover:bg-navy-dark",
  };

  const sizes = {
    default: "h-12 px-6 py-2 rounded-xl font-medium text-lg",
    sm: "h-9 px-3 rounded-lg text-sm",
    lg: "h-14 px-8 rounded-2xl text-xl",
    icon: "h-10 w-10 flex items-center justify-center rounded-xl",
  };

  return (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
  );
});
Button.displayName = "Button";

export { Button };
