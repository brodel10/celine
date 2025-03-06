"use client"

import type React from "react"
import { createContext, useState, useContext, useEffect } from "react"

type LoaderContextType = {
  loading: boolean
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

const LoaderContext = createContext<LoaderContextType | undefined>(undefined)

export const LoaderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000) // Adjust time as needed
    return () => clearTimeout(timer)
  }, [])

  return <LoaderContext.Provider value={{ loading, setLoading }}>{children}</LoaderContext.Provider>
}

export const useLoader = () => {
  const context = useContext(LoaderContext)
  if (context === undefined) {
    throw new Error("useLoader must be used within a LoaderProvider")
  }
  return context
}

