"use client"

import type React from "react"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"

interface CarouselImage {
  src: string
  alt: string
}

interface AbstractCarouselProps {
  images: CarouselImage[]
}

const AbstractCarousel: React.FC<AbstractCarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [layout, setLayout] = useState<{ x: number; y: number; width: number; height: number }[]>([])

  const generateLayout = useCallback(() => {
    const newLayout = images.map(() => ({
      x: Math.random() * 80, // percentage
      y: Math.random() * 80, // percentage
      width: Math.random() * 30 + 20, // percentage (20-50%)
      height: Math.random() * 30 + 20, // percentage (20-50%)
    }))
    setLayout(newLayout)
  }, [images])

  useEffect(() => {
    generateLayout()
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [images, generateLayout])

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  return (
    <div className="relative w-full h-full overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{
            left: `${layout[index]?.x}%`,
            top: `${layout[index]?.y}%`,
            width: `${layout[index]?.width}%`,
            height: `${layout[index]?.height}%`,
          }}
        >
          <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill style={{ objectFit: "cover" }} />
        </div>
      ))}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
      >
        &#8592;
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
      >
        &#8594;
      </button>
    </div>
  )
}

export default AbstractCarousel

