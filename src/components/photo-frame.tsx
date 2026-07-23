import Image from "next/image";
import { cn } from "@/lib/utils";

interface PhotoFrameProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  scrim?: "bottom" | "none";
  sizes?: string;
}

export function PhotoFrame({
  src,
  alt,
  className,
  priority = false,
  scrim = "none",
  sizes = "100vw",
}: PhotoFrameProps) {
  return (
    <div className={cn("grain-overlay relative isolate overflow-hidden", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover"
      />
      {scrim === "bottom" && (
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/50 via-ink/5 to-transparent" />
      )}
    </div>
  );
}
