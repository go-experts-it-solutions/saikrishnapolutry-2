import { useInView } from "react-intersection-observer";
import { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  animation?: "fade-up" | "fade-in-left" | "fade-in-right" | "scale-in" | "fade-in";
  delay?: number;
  className?: string;
}

const AnimatedSection = ({ 
  children, 
  animation = "fade-up", 
  delay = 0,
  className = "" 
}: AnimatedSectionProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "-50px",
  });

  const delayClass = delay > 0 ? `stagger-${delay}` : "";

  return (
    <div
      ref={ref}
      className={`${className} ${inView ? animation : "opacity-0"} ${delayClass}`}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
