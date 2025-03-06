"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navigation from "@/components/navigation";
import ParallaxImage from "@/components/parallax-image";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  // Images for the horizontal gallery
  const portfolioImages = [
    {
      src: "/IMG_7459.jpg",
      alt: "Editorial hairstyling work",
      size: "small" as const,
      orientation: "portrait" as const,
    },
    {
      src: "/IMG_7460.jpg",
      alt: "Commercial hairstyling project",
      size: "large" as const,
      orientation: "portrait" as const,
    },
    {
      src: "/IMG_7461.jpg",
      alt: "Fashion week hairstyle",
      size: "small" as const,
      orientation: "square" as const,
    },
    {
      src: "/IMG_7455.jpg",
      alt: "Celebrity styling work",
      size: "medium" as const,
      orientation: "portrait" as const,
    },
    {
      src: "/IMG_7454.PNG",
      alt: "Avant-garde hairstyle",
      size: "small" as const,
      orientation: "square" as const,
    },

    {
      src: "/IMG_7458.jpg",
      alt: "Magazine cover hairstyle",
      size: "medium" as const,
      orientation: "portrait" as const,
    },
    {
      src: "/IMG_7457.jpg",
      alt: "Magazine cover hairstyle",
      size: "small" as const,
      orientation: "portrait" as const,
    },
  ];

  // Handle horizontal scrolling
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      container.scrollLeft += e.deltaY;
      setScrollPosition(container.scrollLeft);
    };

    container.addEventListener("wheel", handleWheel, { passive: false });

    const handleScroll = () => {
      if (container) {
        setScrollPosition(container.scrollLeft);
      }
    };

    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("wheel", handleWheel);
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="h-screen w-screen overflow-hidden bg-white text-gray-900">
      <Navigation />

      {/* Intro section with parallax effect */}
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none z-50">
        <div
          className="text-center transition-transform duration-1000 ease-out px-4"
          style={{
            transform: `translateX(${-scrollPosition * 0.1}px)`,
            opacity: Math.max(0, 1 - scrollPosition * 0.001),
          }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-gray-800 tracking-wide mb-2">
            Celine Ignacio
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-500 font-light tracking-wider">
            Hairstylist
          </p>
          <p className="text-sm text-gray-400 mt-2">Los Angeles · California</p>
        </div>
      </div>

      {/* Horizontal scrolling gallery */}
      <div
        ref={containerRef}
        className="fixed top-0 left-0 w-full h-full overflow-x-scroll flex items-center scrollbar-hide"
        style={{ paddingLeft: "80vw" }} // Adjusted for better visibility on small screens
      >
        <div className="flex items-center h-full">
          {portfolioImages.map((image, index) => (
            <ParallaxImage
              key={index}
              src={image.src}
              alt={image.alt}
              scrollPosition={scrollPosition}
              parallaxFactor={0.05 + index * 0.01} // Varying parallax effect
              size={image.size}
              orientation={image.orientation}
              zIndex={portfolioImages.length - index}
            />
          ))}

          {/* Final section with call to action */}
          <div
            className="h-[70vh] flex-shrink-0 flex flex-col justify-center px-8 sm:px-12 md:px-16 min-w-[80vw] sm:min-w-[60vw] md:min-w-[50vw]"
            style={{
              transform: `translateX(${scrollPosition * 0.12}px)`,
              transition: "transform 0.1s ease-out",
            }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-800 tracking-wide mb-6">
              View Portfolio
            </h2>
            <div className="flex flex-col gap-4">
              <Link
                href="/contact"
                className="flex items-center gap-2 text-base sm:text-lg text-gray-700 hover:text-gray-900 transition-colors"
              >
                Contact <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
