"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";

type FadeInProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "section" | "article" | "li" | "header";
};

export function FadeIn({
  children,
  delay = 0,
  y = 12,
  className,
  as = "div",
}: FadeInProps) {
  // SSR-safe motion wrapper.
  //
  // Framer Motion's `initial` prop renders inline styles on the server
  // (e.g. `style="opacity:0;transform:translateY(12px)"`) and then on
  // the client takes over via useLayoutEffect to animate. That can
  // produce hydration mismatches depending on timing.
  //
  // To guarantee identical HTML on the server and the first client
  // render, we render a plain wrapper until the component has mounted.
  // Only then do we swap in the motion component. The brief flash
  // (sub-frame) is the standard trade-off for SSR-safe motion.
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const reduce = useReducedMotion();

  if (!mounted || reduce) {
    const Tag = as as keyof JSX.IntrinsicElements;
    return <Tag className={className}>{children}</Tag>;
  }

  const MotionTag = motion[as] as typeof motion.div;
  return (
    <MotionTag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}
