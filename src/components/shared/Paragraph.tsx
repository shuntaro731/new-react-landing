import type { ReactNode } from "react";

interface ParagraphProps {
  children: ReactNode;
  className?: string;
}

export const Paragraph = ({ children, className = "" }: ParagraphProps) => {
  return <p className={`text-heading-1 md:text-lg ${className}`}>{children}</p>;
};
