"use client";

import React, { useState, useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { Prisma } from "@prisma/client";
import { getBaseUrl } from "@/lib/utils";
import Image from "next/image";

type CardWithSet = Prisma.CardGetPayload<{
  select: {
    id: true;
    name: true;
    image: true;
    rarity: true;
    set: {
      select: {
        name: true;
      };
    };
  };
}>;

interface SearchInputProps {
  initialSearch?: string;
  className?: string;
}

export function SearchInput({ initialSearch = '', className = '' }: SearchInputProps) {
  const router = useRouter();
  const [search, setSearch] = useState(initialSearch);
  const [suggestions, setSuggestions] = useState<CardWithSet[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
    
    if (value.length > 1) {
      fetchSuggestions(value);
    } else {
      setSuggestions([]);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setShowSuggestions(false);
      router.push(`/search?q=${search}`);
    }
  };

  const fetchSuggestions = async (query: string) => {
    try {
      const res = await fetch(
        new URL(`/api/cards/suggestions?search=${query}&limit=5`, getBaseUrl())
      );
      const data = await res.json();
      setSuggestions(data.cards);
      setShowSuggestions(true);
    } catch (error) {
      console.error('Erro ao buscar sugestões:', error);
    }
  };

  return (
    <div className={`relative ${className}`} ref={searchRef}>
      <Input
        type="text"
        value={search}
        onChange={handleSearch}
        onKeyPress={handleKeyPress}
        placeholder="Pesquisar cartas..."
        className="w-full"
      />
      
      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg border border-gray-200 shadow-xl max-h-[400px] overflow-y-auto z-50">
          <div className="p-2 border-b border-gray-100 text-sm text-muted-foreground">
            {suggestions.length} resultados encontrados
          </div>
          
          <div className="py-1">
            {suggestions.map((card) => (
              <div
                key={card.id}
                className="px-3 py-2 hover:bg-gray-100 cursor-pointer transition-colors"
                onClick={() => {
                  setSearch(card.name);
                  setShowSuggestions(false);
                  router.push(`/cards/${card.id}`);
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-md overflow-hidden border border-gray-200">
                    <Image 
                      src={card.image} 
                      alt={card.name} 
                      className="object-cover w-full h-full hover:scale-110 transition-transform duration-200" 
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-medium text-sm">{card.name}</span>
                    <span className="text-xs text-muted-foreground">
                      {card.set.name || ''} • {card.rarity}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="p-2 border-t border-gray-100 bg-gray-50">
            <div className="text-xs text-center text-muted-foreground">
              Pressione Enter para ver todos os resultados
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 