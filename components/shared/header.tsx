import { Logo } from "./logo";
import React from "react";
export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="w-full px-4 flex justify-center">
        <div className="max-w-7xl w-full h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Logo />
          </div>
          
          <nav className="hidden md:flex gap-6">
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Home</a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Conjuntos</a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Decks</a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Sobre</a>
          </nav>

          <div className="flex items-center gap-4">
            <button className="px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90">
              Login
            </button>
          </div>
        </div>
      </div>
    </header>
  )
} 