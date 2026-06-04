"use client";

import { useEffect, useRef, useState } from "react";

type TypewriterWordProps = {
  children: string;
  className?: string;
};

export function TypewriterWord({ children, className = "" }: TypewriterWordProps) {
  const wordRef = useRef<HTMLParagraphElement>(null);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const word = wordRef.current;

    if (!word) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsTyping(entry.isIntersecting);
      },
      { threshold: 0.45 }
    );

    observer.observe(word);

    return () => observer.disconnect();
  }, []);

  return (
    <p ref={wordRef} className={`footer-word ${className} ${isTyping ? "is-typing" : ""}`}>
      <span className="footer-word-text">{children}</span>
      <span className="footer-word-caret" />
    </p>
  );
}
