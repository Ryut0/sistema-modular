import * as React from "react";

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className = "", ...props }, ref) => (
    <div
      ref={ref}
      className={`rounded-md border border-slate-200 bg-white ${className}`.trim()}
      {...props}
    />
  )
);
Card.displayName = "Card";

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className = "", ...props }, ref) => <div ref={ref} className={`p-5 ${className}`.trim()} {...props} />
);
CardContent.displayName = "CardContent";

export { Card, CardContent };
