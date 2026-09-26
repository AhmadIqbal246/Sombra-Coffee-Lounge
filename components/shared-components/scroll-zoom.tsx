"use client";

interface ScrollZoomProps {
  children: React.ReactNode;
  className?: string;
}

export function ScrollZoom({ children, className = "" }: ScrollZoomProps) {
  return (
    <div className={`relative z-10 ${className}`.trim()}>
      {children}
    </div>
  );
}
