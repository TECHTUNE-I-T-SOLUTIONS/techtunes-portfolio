"use client"

import type React from "react"
import { useEffect, useState, createContext, useContext } from "react"

type ThemeContextType = {
  theme: "light" | "dark"
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
// ThemeProvider removed