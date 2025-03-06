"use client"

import { useRef, useEffect, useState, type ReactNode } from "react"

interface HorizontalScrollProps {
  children: ReactNode
  startPadding?: string
}

export default function HorizontalScroll({ children, startPadding = "100vw" }: HorizontalScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollPosition, setScrollPosition] = useState(0)

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
    <div
      ref={containerRef}
      className="fixed top-0 left-0 w-full h-full overflow-x-scroll flex items-center scrollbar-hide"
      style={{ paddingLeft: startPadding }}
    >
      <div className="flex gap-8 px-16 items-center h-full">{children}</div>
    </div>
  )
}

