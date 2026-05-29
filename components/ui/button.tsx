import * as React from "react";

const baseClasses =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand disabled:pointer-events-none disabled:opacity-50";

const variants = {
  default: "bg-ink text-white hover:bg-slate-800",
  secondary: "border border-slate-300 bg-white text-slate-950 hover:bg-slate-50",
  hero: "bg-white text-ink hover:bg-slate-100"
};

const sizes = {
  default: "h-10 px-4",
  lg: "h-12 px-5"
};

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "default", size = "default", asChild = false, children, ...props }, ref) => {
    const composedClassName = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`.trim();

    if (asChild && React.isValidElement<{ className?: string }>(children)) {
      return React.cloneElement(children, {
        className: `${composedClassName} ${children.props.className ?? ""}`.trim()
      });
    }

    return (
      <button className={composedClassName} ref={ref} {...props}>
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button };
