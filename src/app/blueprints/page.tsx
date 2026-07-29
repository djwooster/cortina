import type { Metadata } from "next";
import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ScrollReveal } from "@/components/scroll-reveal";

export const metadata: Metadata = {
  title: "Cortina — Blueprints",
  description:
    "Floor plans, elevations, and early renderings for the Cortina residence prototype.",
};

const SHEET_WIDTH = 2400;
const SHEET_HEIGHT = 1600;

interface Sheet {
  eyebrow: string;
  title: string;
  copy: string;
  src: string;
  alt: string;
}

const SHEETS: Sheet[] = [
  {
    eyebrow: "Floor Plans",
    title: "The Main Level",
    copy: "Foyer, kitchen, and great room flow together beneath the vaulted roofline, with a two-car garage and a main-level bedroom suite.",
    src: "/images/blueprints/main-floor-plan.png",
    alt: "Main floor plan of the Cortina residence prototype",
  },
  {
    eyebrow: "Floor Plans",
    title: "The Lower Level",
    copy: "Two additional bedrooms, a full bath, and generous storage sit below, framed by crawl space beyond.",
    src: "/images/blueprints/basement-floor-plan.png",
    alt: "Basement floor plan of the Cortina residence prototype",
  },
  {
    eyebrow: "Roof Plan",
    title: "The Roofline",
    copy: "Cascading gables and standing-seam panels trace the home's Scandinavian-inspired silhouette.",
    src: "/images/blueprints/roof-plan.png",
    alt: "Roof plan of the Cortina residence prototype",
  },
  {
    eyebrow: "Elevations",
    title: "Elevation One",
    copy: "Black board-and-batten siding and a full-height glass wall open to a wraparound deck.",
    src: "/images/blueprints/elevation-front.png",
    alt: "Exterior elevation of the Cortina residence prototype",
  },
  {
    eyebrow: "Elevations",
    title: "Elevation Two",
    copy: "Vertical siding steps down the sloped grade to a walk-out lower level.",
    src: "/images/blueprints/elevation-side-a.png",
    alt: "Exterior elevation of the Cortina residence prototype",
  },
  {
    eyebrow: "Elevations",
    title: "Elevation Three",
    copy: "Twin gables frame the entry, garage, and covered porch.",
    src: "/images/blueprints/elevation-rear.png",
    alt: "Exterior elevation of the Cortina residence prototype",
  },
  {
    eyebrow: "Elevations",
    title: "Elevation Four",
    copy: "A quieter face — chimney flanked by deep-set windows and vertical siding.",
    src: "/images/blueprints/elevation-side-b.png",
    alt: "Exterior elevation of the Cortina residence prototype",
  },
  {
    eyebrow: "Renderings",
    title: "Exterior Renderings",
    copy: "Early visualizations of the black-clad, cedar-accented exterior among the pines.",
    src: "/images/blueprints/renderings-exterior.jpg",
    alt: "Exterior renderings of the Cortina residence prototype",
  },
  {
    eyebrow: "Renderings",
    title: "Interior Renderings",
    copy: "Warm wood ceilings, an open kitchen, and a double-height great room anchor the interior.",
    src: "/images/blueprints/renderings-interior.jpg",
    alt: "Interior renderings of the Cortina residence prototype",
  },
];

export default function BlueprintsPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col bg-paper pt-24 sm:pt-28">
        <div className="mx-auto max-w-3xl px-6 pb-16 pt-8 text-center sm:px-10 sm:pb-24 sm:pt-12">
          <span className="text-[11px] uppercase tracking-[0.35em] text-brass">
            Architectural Plans
          </span>
          <h1 className="mt-5 font-display text-5xl leading-[1.1] tracking-tight text-ink sm:text-6xl">
            The Blueprints
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base text-ink-soft sm:text-lg">
            Floor plans, elevations, and early renderings for the Cortina
            residence prototype.
          </p>
        </div>

        {SHEETS.map((sheet) => (
          <section key={sheet.title} className="border-t border-brass/20 py-16 sm:py-20">
            <div className="mx-auto max-w-5xl px-6 sm:px-10 lg:px-16">
              <ScrollReveal>
                <span className="text-[11px] uppercase tracking-[0.35em] text-brass">
                  {sheet.eyebrow}
                </span>
                <h3 className="mt-4 font-display text-3xl leading-[1.1] tracking-tight text-ink sm:text-4xl">
                  {sheet.title}
                </h3>
                <p className="mt-4 max-w-xl text-base text-ink-soft sm:text-lg">
                  {sheet.copy}
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.1} className="mt-10" y={30}>
                <Image
                  src={sheet.src}
                  alt={sheet.alt}
                  width={SHEET_WIDTH}
                  height={SHEET_HEIGHT}
                  sizes="(min-width: 1024px) 960px, 100vw"
                  className="h-auto w-full border border-brass/20"
                />
              </ScrollReveal>
            </div>
          </section>
        ))}
      </main>
      <SiteFooter />
    </>
  );
}
