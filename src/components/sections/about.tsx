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
        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <ScrollReveal delay={0.1}>
            <h2 className="font-display text-4xl leading-[1.1] tracking-tight text-ink sm:text-5xl">
              A village drawn from the Dolomites, set in the Blue Ridge.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="max-w-md text-base text-ink-soft sm:text-lg">
              Cortina reinterprets the architecture of Cortina d&rsquo;Ampezzo
              across thirty-six acres of North Carolina mountainside —
              twenty-two homes, one point of view.
            </p>
          </ScrollReveal>
        </div>
      </div>

      <ScrollReveal
        className="mt-14 grid grid-cols-1 gap-2 sm:mt-20 sm:grid-cols-3 sm:gap-3"
        delay={0.15}
        y={40}
      >
        <PhotoFrame
          src="/images/about-main.jpeg"
          alt="A Cortina residence at dusk, black-clad and set among autumn hardwoods"
          className="aspect-[3/4] w-full"
          sizes="(min-width: 640px) 34vw, 100vw"
        />
        <PhotoFrame
          src="/images/about-inset-sign.jpeg"
          alt="The Cortina entrance sign at dusk"
          className="aspect-[3/4] w-full"
          sizes="(min-width: 640px) 34vw, 100vw"
        />
        <PhotoFrame
          src="/images/about-secondary.jpeg"
          alt="A Cortina residence exterior at twilight"
          className="aspect-[3/4] w-full"
          sizes="(min-width: 640px) 34vw, 100vw"
        />
      </ScrollReveal>
    </section>
  );
}
