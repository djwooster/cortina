"use client";

import { motion } from "framer-motion";
import { AnimatedNumber } from "@/components/animated-number";
import { ScrollReveal } from "@/components/scroll-reveal";

const STATS = [
  { value: 30, decimals: 0, unit: "min", label: "To Asheville Airport" },
  { value: 1.5, decimals: 1, unit: "hr", label: "To Charlotte Airport" },
] as const;

const FLIGHT = {
  display: "1h 20m",
  label: "Nonstop to Miami or New York",
};

const CENTER = { x: 240, y: 240 };
const RING_RADII = [90, 160, 230];

const PINS = [
  { label: "Asheville", x: 285, y: 162 },
  { label: "Charlotte", x: 381, y: 189 },
];

const ROUTES = [
  { to: "New York", d: "M381,189 Q460,100 420,32" },
  { to: "Miami", d: "M381,189 Q460,300 430,428" },
];

const ROUTE_ENDPOINTS = [
  { label: "New York", x: 420, y: 32 },
  { label: "Miami", x: 430, y: 428 },
];

export function Features() {
  return (
    <section id="reach" className="border-t border-brass/20 bg-ink py-28 sm:py-36">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-14 px-6 sm:px-10 lg:grid-cols-12 lg:items-center lg:gap-10 lg:px-16">
        <div className="lg:col-span-5">
          <ScrollReveal>
            <span className="text-[11px] uppercase tracking-[0.35em] text-brass">
              Getting Here
            </span>
            <h2 className="mt-4 font-display text-4xl leading-[1.1] tracking-tight text-paper sm:text-5xl">
              Closer than it feels.
            </h2>
            <p className="mt-5 max-w-sm font-display text-lg italic leading-snug text-paper/60 sm:text-xl">
              A short drive to two airports, a short flight to everywhere
              else.
            </p>
          </ScrollReveal>

          <div className="mt-10 flex flex-wrap gap-x-10 gap-y-8">
            {STATS.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={0.1 + i * 0.1}>
                <div className="border-l border-brass/30 pl-4">
                  <span className="font-display text-4xl tabular-nums text-paper sm:text-5xl">
                    <AnimatedNumber value={stat.value} decimals={stat.decimals} />
                    <span className="ml-1 text-xl text-paper/60 sm:text-2xl">
                      {stat.unit}
                    </span>
                  </span>
                  <p className="mt-2 max-w-[9rem] text-[10px] uppercase leading-[1.5] tracking-[0.2em] text-paper/50">
                    {stat.label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
            <ScrollReveal delay={0.3}>
              <div className="border-l border-brass/30 pl-4">
                <span className="font-display text-4xl text-paper sm:text-5xl">
                  {FLIGHT.display}
                </span>
                <p className="mt-2 max-w-[9rem] text-[10px] uppercase leading-[1.5] tracking-[0.2em] text-paper/50">
                  {FLIGHT.label}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>

        <motion.div
          className="lg:col-span-7"
          initial={{ opacity: 0, scale: 0.94, y: 24 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        >
          <svg
            viewBox="0 0 480 480"
            className="mx-auto h-auto w-full max-w-md text-brass"
          >
            {RING_RADII.map((r, i) => (
              <motion.circle
                key={r}
                cx={CENTER.x}
                cy={CENTER.y}
                fill="none"
                stroke="currentColor"
                strokeWidth={1}
                initial={{ r: 0, opacity: 0 }}
                whileInView={{ r: [0, r * 1.08, r], opacity: [0, 0.22, 0.15] }}
                viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
                transition={{
                  duration: 1.1,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.2 + i * 0.2,
                  times: [0, 0.6, 1],
                }}
              />
            ))}

            {ROUTES.map((route, i) => (
              <motion.path
                key={route.to}
                d={route.d}
                fill="none"
                stroke="currentColor"
                strokeWidth={1}
                strokeDasharray="3 4"
                className="opacity-40"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.1,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.5 + i * 0.15,
                }}
              />
            ))}

            {PINS.map((pin, i) => (
              <motion.g
                key={pin.label}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
              >
                <line
                  x1={CENTER.x}
                  y1={CENTER.y}
                  x2={pin.x}
                  y2={pin.y}
                  stroke="currentColor"
                  strokeWidth={1}
                  strokeDasharray="2 4"
                  className="opacity-30"
                />
                <circle cx={pin.x} cy={pin.y} r={3.5} fill="currentColor" />
                <text
                  x={pin.x + 10}
                  y={pin.y - 6}
                  fill="currentColor"
                  className="fill-paper text-[10px] uppercase tracking-[0.15em]"
                >
                  {pin.label}
                </text>
              </motion.g>
            ))}

            <motion.circle
              cx={CENTER.x}
              cy={CENTER.y}
              fill="currentColor"
              initial={{ r: 5, opacity: 0.5 }}
              animate={{ r: [5, 15], opacity: [0.5, 0] }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeOut",
                delay: 1.6,
              }}
            />
            <circle cx={CENTER.x} cy={CENTER.y} r={5} fill="currentColor" />
            <text
              x={CENTER.x}
              y={CENTER.y + 22}
              textAnchor="middle"
              className="fill-paper text-[11px] uppercase tracking-[0.3em]"
            >
              Cortina
            </text>

            {ROUTE_ENDPOINTS.map((end, i) => (
              <motion.g
                key={end.label}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: [0, 1, 1], y: [8, -2, 0] }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: 1.1 + i * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                  times: [0, 0.7, 1],
                }}
              >
                <circle cx={end.x} cy={end.y} r={2.5} className="fill-paper/60" />
                <text
                  x={end.x}
                  y={end.y - 8}
                  textAnchor="middle"
                  className="fill-paper/60 text-[9px] uppercase tracking-[0.15em]"
                >
                  {end.label}
                </text>
              </motion.g>
            ))}
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
