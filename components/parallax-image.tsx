"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface ParallaxImageProps {
  src: string
  alt: string
  scrollPosition: number
  parallaxFactor?: number
  caption?: string
  size: "small" | "medium" | "large"
  orientation: "portrait" | "landscape" | "square"
  zIndex: number
}

export default function ParallaxImage({
  src,
  alt,
  scrollPosition,
  parallaxFactor = 0.05,
  caption,
  size,
  orientation,
  zIndex,
}: ParallaxImageProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  const sizeClasses = {
    small: "w-[80vw] sm:w-[60vw] md:w-[40vw] lg:w-[30vw]",
    medium: "w-[90vw] sm:w-[70vw] md:w-[50vw] lg:w-[40vw]",
    large: "w-[100vw] sm:w-[80vw] md:w-[60vw] lg:w-[50vw]",
  }

  const orientationClasses = {
    portrait: "aspect-[3/4]",
    landscape: "aspect-[4/3]",
    square: "aspect-square",
  }

  return (
    <div
      className={`flex-shrink-0 overflow-hidden ${sizeClasses[size]} ${orientationClasses[orientation]}`}
      style={{
        transform: `translateX(${scrollPosition * parallaxFactor}px)`,
        transition: "transform 0.1s ease-out",
        zIndex: zIndex,
        marginLeft: "-5vw", // Reduced overlap for better visibility on small screens
      }}
    >
      <div className="relative h-full w-full">
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 80vw, (max-width: 768px) 70vw, (max-width: 1024px) 60vw, 50vw"
        />
        {caption && (
          <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/50 to-transparent text-white">
            <p className="text-sm font-light">{caption}</p>
          </div>
        )}
      </div>
    </div>
  )
}

