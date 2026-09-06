import Image from "next/image";
import type { CSSProperties } from "react";

const maskImage =
  "radial-gradient(70% 52% at 66% 30%, #000 25%, rgba(0,0,0,0) 92%), linear-gradient(to bottom, #000 40%, rgba(0,0,0,0) 82%)";

export function MeshArt({ style }: { style: CSSProperties }) {
  return (
    <Image
      src="/brand/mesh.png"
      alt=""
      aria-hidden="true"
      width={999}
      height={437}
      style={{
        position: "absolute",
        pointerEvents: "none",
        mixBlendMode: "screen",
        maskImage,
        WebkitMaskImage: maskImage,
        maskComposite: "intersect",
        WebkitMaskComposite: "source-in",
        ...style,
      }}
    />
  );
}
