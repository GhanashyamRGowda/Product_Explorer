import { useState } from "react";

interface ProductImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
}

/**
 * Shows the product photo (.jpg). If the photo file is missing,
 * it falls back to the matching illustration (.svg) in the same folder.
 */
export function ProductImage({ src, alt, className, loading }: ProductImageProps) {
  const [currentSrc, setCurrentSrc] = useState(src);

  const handleError = () => {
    const fallback = src.replace(/\.(jpg|jpeg|png|webp)$/i, ".svg");
    if (currentSrc !== fallback) setCurrentSrc(fallback);
  };

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      loading={loading}
      onError={handleError}
    />
  );
}
