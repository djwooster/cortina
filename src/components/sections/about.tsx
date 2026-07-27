import { PhotoFrame } from "@/components/photo-frame";
import { ScrollReveal } from "@/components/scroll-reveal";

export function About() {
  return (
    <section className="py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16">
        <ScrollReveal>
          <span className="text-[11px] uppercase tracking-[0.35em] text-brass">
            The Vision
          </span>
          <div className="mt-5 h-px w-10 bg-brass/50" />
        </ScrollReveal>
        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          <ScrollReveal delay={0.1} className="lg:col-span-7">
            <h2 className="font-display text-4xl leading-[1.1] tracking-tight text-ink sm:text-5xl">
              Drawn from the Dolomites,
              <br />
              set in Weaverville.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2} className="lg:col-span-5">
            <p className="max-w-md font-display text-xl italic leading-snug text-ink-soft sm:text-2xl">
              Cortina reinterprets the architecture of Cortina d&rsquo;Ampezzo
              across thirty-seven acres of North Carolina mountainside —
              one point of view.
            </p>
          </ScrollReveal>
        </div>
      </div>

      <ScrollReveal
        className="mt-14 grid grid-cols-1 gap-2 sm:mt-20 sm:grid-cols-2 sm:gap-3"
        delay={0.15}
        y={40}
      >
        <PhotoFrame
          src="/images/residence-07-1600.webp"
          alt="A Cortina residence with a stone chimney, set against dense forest"
          className="aspect-[3/4] w-full"
          sizes="(min-width: 640px) 50vw, 100vw"
        />
        <PhotoFrame
          src="/images/residence-08-1600.webp"
          alt="A Cortina residence entrance at dusk, wood and white facade"
          className="aspect-[3/4] w-full"
          sizes="(min-width: 640px) 50vw, 100vw"
        />
      </ScrollReveal>
    </section>
  );
}
