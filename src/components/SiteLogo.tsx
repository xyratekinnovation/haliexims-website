import logo from "@/assets/hali-exims-logo.png";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

type SiteLogoProps = {
  className?: string;
  /** Image height classes — keep width auto for aspect ratio */
  imgClassName?: string;
};

export function SiteLogo({ className, imgClassName }: SiteLogoProps) {
  return (
    <span className={cn("inline-flex items-center", className)}>
      <img
        src={logo}
        alt={site.name}
        className={cn("h-12 w-auto object-contain md:h-14", imgClassName)}
        width={160}
        height={100}
        decoding="async"
      />
    </span>
  );
}
