"use client";

import Image from "next/image";
import { useEffect } from "react";

type ImageLightboxProps = {
  src: string;
  alt: string;
  isOpen: boolean;
  onClose: () => void;
};

const ImageLightbox = ({ src, alt, isOpen, onClose }: ImageLightboxProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 rounded-full bg-white/10 p-2 text-white transition-all hover:bg-white/20"
        aria-label="Fermer"
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <div className="relative max-h-[90vh] max-w-[90vw] animate-scale-in" onClick={(e) => e.stopPropagation()}>
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={800}
          className="max-h-[90vh] max-w-[90vw] rounded-lg object-contain"
          unoptimized
        />
      </div>
    </div>
  );
};

export default ImageLightbox;

