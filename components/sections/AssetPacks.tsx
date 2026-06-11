import Link from "next/link";
import { ArrowUpRight, Tag, ImageOff } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import { assetPacks } from "@/lib/asset-packs";
import type { Dictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";

export function AssetPacks({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const visible = assetPacks;

  return (
    <section id="assets" className="py-20 sm:py-28 scroll-mt-nav border-t border-bg-line">
      <div className="container-page">
        <FadeIn>
          <p className="eyebrow">{dict.assets.eyebrow}</p>
          <h2 className="mt-3 heading-2 text-balance">{dict.assets.title}</h2>
          <p className="mt-4 max-w-2xl text-fg-muted text-balance">
            {dict.assets.subtitle}
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((pack, i) => (
            <FadeIn key={pack.slug} delay={Math.min(i, 6) * 0.04}>
              <Link
                href={pack.url}
                target="_blank"
                rel="noreferrer noopener"
                className="card-hover overflow-hidden flex flex-col group h-full"
              >
                <AssetCover
                  src={pack.cover}
                  alt={pack.title}
                  previewSrc={pack.preview}
                />

                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <span className="chip">
                      <Tag className="h-3 w-3" />
                      {pack.tags[0]}
                    </span>
                    <PriceTag price={pack.price} />
                  </div>

                  <h3 className="mt-3 text-base font-semibold leading-tight group-hover:text-accent-glow transition-colors">
                    {pack.title}
                  </h3>

                  <p className="mt-2 text-sm text-fg-muted line-clamp-3 flex-1">
                    {pack.description[locale]}
                  </p>

                  <div className="mt-4 flex items-center justify-between pt-4 border-t border-bg-line/60">
                    <span className="inline-flex flex-wrap gap-1.5 text-xs text-fg-dim">
                      {pack.tags.slice(1, 3).map((t) => (
                        <span key={t}>· {t}</span>
                      ))}
                    </span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-fg-dim transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function PriceTag({ price }: { price: string }) {
  const isFree = price.toLowerCase() === "free";
  return (
    <span
      className={
        isFree
          ? "chip border-success/30 bg-success/10 text-success"
          : "font-mono text-sm font-semibold text-fg"
      }
    >
      {price}
    </span>
  );
}

function AssetCover({
  src,
  alt,
  previewSrc,
}: {
  src: string;
  alt: string;
  previewSrc?: string;
}) {
  return (
    <div className="relative aspect-[16/10] overflow-hidden bg-bg-soft">
      {/*
        We render the preview as the base image (better composition for
        16:10 cards) and swap to the cover on hover, when available.
        Falls back to cover if no preview is set. Both use a native
        <img> tag to avoid next/image domain whitelisting complexity
        and to keep the component static / zero-runtime.
      */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-all duration-500 group-hover:scale-[1.04] group-hover:opacity-0"
      />
      {previewSrc && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={previewSrc}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-0 transition-all duration-500 group-hover:scale-[1.04] group-hover:opacity-100"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-bg-card/30 via-transparent to-transparent pointer-events-none" />
      {/* Soft fallback marker for the rare case an image fails to load */}
      <div className="absolute inset-0 grid place-items-center text-fg-dim opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        <ImageOff className="h-5 w-5" />
      </div>
    </div>
  );
}
