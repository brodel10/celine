"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import Navigation from "@/components/navigation"

export default function Commercial() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollPosition, setScrollPosition] = useState(0)

  // Commercial images
  const commercialImages = [
    {
      src: "/placeholder.svg?height=800&width=600",
      alt: "Commercial hairstyling for luxury brand",
      width: 600,
      height: 800,
      caption: "Luxury Brand Campaign, 2023",
    },
    {
      src: "/placeholder.svg?height=800&width=600",
      alt: "Commercial hairstyling for fashion brand",
      width: 600,
      height: 800,
      caption: "Fashion Brand Lookbook, 2022",
    },
    {
      src: "/placeholder.svg?height=800&width=600",
      alt: "Commercial hairstyling for beauty brand",
      width: 600,
      height: 800,
      caption: "Beauty Brand Campaign, 2023",
    },
    {
      src: "/placeholder.svg?height=800&width=600",
      alt: "Commercial hairstyling for runway show",
      width: 600,
      height: 800,
      caption: "Fashion Week Runway, 2022",
    },
    {
      src: "/placeholder.svg?height=800&width=600",
      alt: "Commercial hairstyling for celebrity",
      width: 600,
      height: 800,
      caption: "Celebrity Styling, 2023",
    },
  ]

  // Handle horizontal scrolling
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()
      container.scrollLeft += e.deltaY
      setScrollPosition(container.scrollLeft)
    }

    container.addEventListener("wheel", handleWheel, { passive: false })

    const handleScroll = () => {
      if (container) {
        setScrollPosition(container.scrollLeft)
      }
    }

    container.addEventListener("scroll", handleScroll)

    return () => {
      container.removeEventListener("wheel", handleWheel)
      container.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <main className="h-screen w-screen overflow-hidden bg-white text-gray-900">
      <Navigation />

      {/* Section title with parallax effect */}
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none z-0">
        <div
          className="text-center transition-transform duration-1000 ease-out"
          style={{
            transform: `translateX(${-scrollPosition * 0.1}px)`,
            opacity: Math.max(0, 1 - scrollPosition * 0.001),
          }}
        >
          <h1 className="text-5xl md:text-7xl font-light text-gray-800 tracking-wide mb-2">Commercial</h1>
          <p className="text-lg md:text-xl text-gray-500 font-light tracking-wider">Brand Collaborations</p>
        </div>
      </div>

      {/* Back button */}
      <div className="fixed top-6 left-6 z-40 mix-blend-difference">
        <Link href="/" className="text-white flex items-center gap-2 hover:opacity-80 transition-opacity">
          <ArrowLeft size={16} />
          <span className="text-sm tracking-wider">BACK</span>
        </Link>
      </div>

      {/* Horizontal scrolling gallery */}
      <div
        ref={containerRef}
        className="fixed top-0 left-0 w-full h-full overflow-x-scroll flex items-center scrollbar-hide"
        style={{ paddingLeft: "100vw" }} // Start after the intro section
      >
        <div className="flex gap-8 px-16 items-center h-full">
          {commercialImages.map((image, index) => (
            <div
              key={index}
              className="h-[70vh] flex-shrink-0 overflow-hidden"
              style={{
                transform: `translateX(${scrollPosition * 0.05}px)`,
                transition: "transform 0.1s ease-out",
              }}
            >
              <div className="relative h-full">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  className="h-full w-auto object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/50 to-transparent text-white">
                  <p className="text-sm font-light">{image.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

