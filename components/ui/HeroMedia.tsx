"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type HeroMediaProps = {
  poster: string;
  videoSrc?: string;
  alt: string;
};

type NetworkInformation = {
  effectiveType?: string;
  saveData?: boolean;
};

export default function HeroMedia({ poster, videoSrc, alt }: HeroMediaProps) {
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const [isVideoReady, setIsVideoReady] = useState(false);

  useEffect(() => {
    const connection = (navigator as Navigator & { connection?: NetworkInformation }).connection;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const limitedNetwork = connection?.saveData || connection?.effectiveType === "slow-2g" || connection?.effectiveType === "2g";

    if (!reducedMotion && !limitedNetwork && videoSrc) {
      const frame = window.requestAnimationFrame(() => setShouldLoadVideo(true));
      return () => window.cancelAnimationFrame(frame);
    }
  }, [videoSrc]);

  return (
    <>
      <Image
        src={poster}
        alt={alt}
        fill
        preload
        quality={100}
        sizes="100vw"
        className="absolute inset-0 size-full object-cover object-[58%_center]"
      />
      {shouldLoadVideo ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          onCanPlay={() => setIsVideoReady(true)}
          className={`absolute inset-0 size-full object-cover object-[58%_center] transition-opacity duration-700 ${isVideoReady ? "opacity-100" : "opacity-0"}`}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      ) : null}
    </>
  );
}
