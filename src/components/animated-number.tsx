"use client";

import { useEffect, useRef, useState } from "react";
import {
  animate,
  useInView,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";

interface AnimatedNumberProps {
  value: number;
  decimals?: number;
  duration?: number;
  className?: string;
}

export function AnimatedNumber({
  value,
  decimals = 0,
  duration = 1.4,
  className,
}: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });
  const count = useMotionValue(0);
  const formatted = useTransform(count, (v) => v.toFixed(decimals));
  const [display, setDisplay] = useState(() => (0).toFixed(decimals));

  useMotionValueEvent(formatted, "change", setDisplay);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(count, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
    });
    return controls.stop;
  }, [isInView, value, count, duration]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
