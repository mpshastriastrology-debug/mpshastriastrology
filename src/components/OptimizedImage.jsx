const OPT_PREFIX = "/images/opt";

export function optimizedSrcSet(src, widths = [400, 800]) {
  if (!src) return undefined;

  const file = src.split("/").pop() || "";
  const base = file.replace(/\.(webp|avif|png|jpe?g)$/i, "");
  const ext = file.toLowerCase().endsWith(".avif") ? "webp" : file.split(".").pop() || "webp";

  return widths
    .map((w) => `${OPT_PREFIX}/${base}-${w}w.${ext === "avif" ? "webp" : ext} ${w}w`)
    .join(", ");
}

export function optimizedSrc(src, width = 800) {
  if (!src) return src;

  const file = src.split("/").pop() || "";
  const base = file.replace(/\.(webp|avif|png|jpe?g)$/i, "");
  const ext = file.toLowerCase().endsWith(".avif") ? "webp" : file.split(".").pop() || "webp";

  return `${OPT_PREFIX}/${base}-${width}w.${ext === "avif" ? "webp" : ext}`;
}

export default function OptimizedImage({
  src,
  alt,
  widths = [400, 800],
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px",
  width,
  height,
  loading = "lazy",
  decoding = "async",
  fetchPriority,
  className,
}) {
  const srcSet = optimizedSrcSet(src, widths);
  const fallback = optimizedSrc(src, widths[widths.length - 1]);
  const imgLoading = fetchPriority === "high" ? "eager" : loading;

  return (
    <img
      src={fallback}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt ?? ""}
      width={width}
      height={height}
      loading={imgLoading}
      decoding={decoding}
      {...(fetchPriority ? { fetchpriority: fetchPriority } : {})}
      className={className}
    />
  );
}
