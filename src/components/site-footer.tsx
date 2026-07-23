import { LogoMark } from "@/components/logo-mark";

export function SiteFooter() {
  return (
    <footer className="border-t border-brass/20 bg-ink px-6 py-8 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <span className="flex items-center gap-2.5 font-display text-sm tracking-[0.2em] text-paper/60">
          <LogoMark className="h-4 w-auto" />
          CORTINA
        </span>
        <p className="text-xs text-paper/40">
          © {new Date().getFullYear()} Cortina. North Carolina mountains.
        </p>
      </div>
    </footer>
  );
}
