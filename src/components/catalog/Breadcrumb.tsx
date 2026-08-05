export type Crumb = { label: string; href?: string };

export function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        return (
          <span key={`${item.label}-${i}`} className="inline-flex items-center gap-1.5">
            {i > 0 && (
              <span className="text-muted-foreground/60" aria-hidden="true">
                /
              </span>
            )}
            {item.href && !isLast ? (
              <a href={item.href} className="hover:text-navy transition font-medium">
                {item.label}
              </a>
            ) : (
              <span className={isLast ? "text-navy font-semibold" : undefined}>{item.label}</span>
            )}
          </span>
        );
      })}
    </nav>
  );
}
