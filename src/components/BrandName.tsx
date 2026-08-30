import { cn } from "@/lib/utils";

/**
 * Nome da marca escrito conforme o manual: fonte script + coração no lugar
 * do pingo da letra "i".
 */
export function BrandName({ className }: { className?: string }) {
  return (
    <span className={cn("font-script whitespace-nowrap", className)}>
      <span aria-hidden="true">
        Xuxuz
        <span className="relative inline-block">
          ı
          <span
            className="pointer-events-none absolute left-1/2 top-[-0.02em] -translate-x-1/2 text-plum"
            style={{ fontFamily: "var(--font-sans)", fontSize: "0.4em", lineHeight: 1 }}
          >
            ♥
          </span>
        </span>
        nho
      </span>
      <span className="sr-only">Xuxuzinho</span>
    </span>
  );
}
