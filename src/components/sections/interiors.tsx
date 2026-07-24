import Image from "next/image";
import { ScrollReveal } from "@/components/scroll-reveal";

export function Interiors() {
  return (
    <section id="interiors" className="border-t border-brass/20 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <ScrollReveal>
              <span className="text-[11px] uppercase tracking-[0.35em] text-brass">
                The Interiors
              </span>
              <div className="mt-5 h-px w-10 bg-brass/50" />
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="mt-8 font-display text-4xl leading-[1.1] tracking-tight text-ink">
                Warm wood. Quiet craft.
                <br />
                Built to gather in.
              </h2>
            </ScrollReveal>
          </div>

          <ScrollReveal
            className="flex justify-center lg:col-span-7 lg:justify-end"
            delay={0.15}
            y={40}
          >
            <Image
              src="/images/cabin-interior-upscaled.webp"
              alt="A double-height Cortina great room in black-painted timber and warm wood, looking out to the forest"
              width={1117}
              height={1409}
              className="h-auto w-full max-w-xl"
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
