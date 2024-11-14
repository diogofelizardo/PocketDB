"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { SearchInput } from "./search-input";
import { Logo } from "@/components/shared/logo";

export function Header() {
  const searchParams = useSearchParams();
  const initialSearch = searchParams.get('q') || '';

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="w-full px-4 flex justify-center">
        <div className="max-w-7xl w-full h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Logo />
          </div>
          
          {/* Barra de busca */}
          <div className="flex-1 max-w-xl px-4">
            <SearchInput initialSearch={initialSearch} />
          </div>

          {/* Menu para Desktop */}
          <nav className="hidden md:flex gap-6">
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Home</a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Conjuntos</a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Decks</a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Sobre</a>
          </nav>

          {/* Menu para Mobile */}
          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <a href="#">Home</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="#">Conjuntos</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="#">Decks</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="#">Sobre</a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button>Login</Button>
          </div>
        </div>
      </div>
    </header>
  )
} 