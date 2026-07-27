import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Residences } from "@/components/sections/residences";
import { Interiors } from "@/components/sections/interiors";
import { SitePlan } from "@/components/sections/site-plan";
import { Features } from "@/components/sections/features";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <Hero />
        <About />
        <Features />
        <Residences />
        <Interiors />
        <SitePlan />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
