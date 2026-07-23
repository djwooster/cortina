import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Residences } from "@/components/sections/residences";
import { SitePlan } from "@/components/sections/site-plan";
import { Setting } from "@/components/sections/setting";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <Hero />
        <About />
        <Residences />
        <SitePlan />
        <Setting />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
