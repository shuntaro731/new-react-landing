import { useEffect, useRef, useState } from "react";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number; // 各文字間の遅延時間（ミリ秒）
  duration?: number; // アニメーション時間（ミリ秒）
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
  onComplete?: () => void;
}

const TextReveal = ({
  text,
  className = "",
  delay = 50,
  duration = 500,
  tag: Tag = "span",
  onComplete,
}: TextRevealProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (isVisible && onComplete) {
      const totalTime = text.length * delay + duration;
      const timer = setTimeout(onComplete, totalTime);
      return () => clearTimeout(timer);
    }
  }, [isVisible, text.length, delay, duration, onComplete]);

  const chars = text.split("");

  return (
    <Tag ref={elementRef as any} className={className}>
      {chars.map((char, index) => (
        <span
          key={index}
          className={isVisible ? "animate-fade-in-char" : "opacity-0"}
          style={{
            animationDelay: isVisible ? `${index * delay}ms` : "0ms",
            animationDuration: `${duration}ms`,
            display: char === " " ? "inline" : "inline-block",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </Tag>
  );
};

export default TextReveal;
