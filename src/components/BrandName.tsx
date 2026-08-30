import { cn } from "@/lib/utils";

/**
 * Nome da marca escrito conforme o manual: fonte script + coração no lugar
 * do pingo da letra "i".
 */
export function BrandName({ className }: { className?: string }) {
  return (
    <span className={cn("font-script whitespace-nowrap", className)}>
      Xuxuz
      <span className="relative inline-block">
        <span aria-hidden="true">ı</span>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-[-0.06em] -translate-x-1/2 text-plum"
          style={{ fontFamily: "var(--font-sans)", fontSize: "0.42em", lineHeight: 1 }}
        >
          ♥
        </span>
      </span>
      nho
      <span className="sr-only">Xuxuzinho</span>
    </span>
  );
}
