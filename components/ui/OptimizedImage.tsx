import Image, { ImageProps } from "next/image";
import { shimmerDataUrl } from "@/lib/shimmer";

interface OptimizedImageProps extends ImageProps {
  shimmerWidth?: number;
  shimmerHeight?: number;
}

const OptimizedImage = ({
  shimmerWidth,
  shimmerHeight,
  src,
  width,
  height,
  alt = "",
  ...props
}: OptimizedImageProps) => {
  // Use provided shimmer dims, or fallback to width/height, or default to 400x400
  const w = shimmerWidth || (typeof width === "number" ? width : 400);
  const h = shimmerHeight || (typeof height === "number" ? height : 400);

  return (
    <Image
      src={src}
      width={width}
      height={height}
      placeholder="blur"
      blurDataURL={shimmerDataUrl(w, h)}
      alt={alt}
      {...props}
    />
  );
};

export default OptimizedImage;
