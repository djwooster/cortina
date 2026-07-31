import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/scroll-reveal";

const DETAILS = [
  { label: "Access", value: "Ivywood Road" },
  { label: "Waterway", value: "Morgan Branch Creek" },
  { label: "Shared land", value: "Common area & trails" },
];

export function SitePlan() {
  return (
    <section id="plan" className="border-t border-brass/20 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <ScrollReveal>
              <span className="text-[11px] uppercase tracking-[0.35em] text-brass">
                The Plan
              </span>
              <div className="mt-5 h-px w-10 bg-brass/50" />
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="mt-8 font-display text-4xl leading-[1.1] tracking-tight text-ink sm:text-5xl">
                Homesites along Morgan Branch Creek.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="mt-8 max-w-md text-base text-ink-soft sm:text-lg">
                Each lot placed for privacy, tree cover, and long views.
              </p>
            </ScrollReveal>

            <dl className="mt-12 flex flex-col gap-6">
              {DETAILS.map((detail, i) => (
                <ScrollReveal key={detail.label} delay={0.25 + i * 0.1}>
                  <div className="border-t border-brass/30 pt-4">
                    <dd className="font-display text-xl text-ink sm:text-2xl">
                      {detail.value}
                    </dd>
                    <dt className="mt-1 text-[11px] uppercase tracking-[0.2em] text-ink-soft/70">
                      {detail.label}
                    </dt>
                  </div>
                </ScrollReveal>
              ))}
            </dl>

            <ScrollReveal delay={0.4}>
              <Button
                asChild
                className="mt-10 h-auto w-fit bg-ink px-5 py-3 text-paper hover:bg-ink/80"
              >
                <Link href="/blueprints">View the Blueprints</Link>
              </Button>
            </ScrollReveal>
          </div>

          <ScrollReveal
            className="flex justify-center lg:col-span-8 lg:justify-end"
            delay={0.15}
            y={40}
          >
            <Image
              src="/images/cool-rendering-2.png"
              alt="Architectural rendering of a Cortina residence with floor plan and elevation studies"
              width={1024}
              height={1536}
              className="h-auto w-full max-w-2xl"
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
