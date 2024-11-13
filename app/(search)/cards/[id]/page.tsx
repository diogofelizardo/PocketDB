"use client";
import { use, useEffect, useState } from 'react';
import { Card } from '@prisma/client';
import { getBaseUrl } from '@/lib/utils';
import Image from 'next/image';

export default function CardDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const [card, setCard] = useState<Card | null>(null);
  const [loading, setLoading] = useState(true);
  const { id } = use(params);

  useEffect(() => {
    const fetchCard = async () => {
      try {
        const res = await fetch(
          new URL(`/api/cards/${id}`, getBaseUrl())
        );
        const data = await res.json();
        setCard(data);
      } catch (error) {
        console.error('Erro ao buscar detalhes do card:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCard();
  }, [params]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  if (!card) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-xl">Card não encontrado</p>
      </div>
    );
  }

  const elementColors = {
    GRASS: { bg: 'bg-green-100', text: 'text-green-800', border: 'border-green-300' },
    FIRE: { bg: 'bg-red-100', text: 'text-red-800', border: 'border-red-300' },
    WATER: { bg: 'bg-blue-100', text: 'text-blue-800', border: 'border-blue-300' },
    LIGHTNING: { bg: 'bg-yellow-100', text: 'text-yellow-800', border: 'border-yellow-300' },
    PSYCHIC: { bg: 'bg-purple-100', text: 'text-purple-800', border: 'border-purple-300' },
    FIGHTING: { bg: 'bg-orange-100', text: 'text-orange-800', border: 'border-orange-300' },
    DARKNESS: { bg: 'bg-gray-100', text: 'text-gray-800', border: 'border-gray-300' },
    METAL: { bg: 'bg-slate-100', text: 'text-slate-800', border: 'border-slate-300' },
    DRAGON: { bg: 'bg-amber-100', text: 'text-amber-800', border: 'border-amber-300' },
    COLORLESS: { bg: 'bg-zinc-100', text: 'text-zinc-800', border: 'border-zinc-300' }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100 py-8 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="w-full">
            <div className="relative aspect-[2.5/3.5] w-full max-w-[400px] mx-auto 
                          hover:transform hover:scale-105 transition-transform duration-300">
              <Image
                src={card.image}
                alt={card.name}
                fill
                className="rounded-2xl shadow-2xl"
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>

          <div className="w-full">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl 
                           border border-white/20 hover:shadow-2xl transition-shadow duration-300">
              {/* Cabeçalho do Card */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 
                             bg-clip-text text-transparent">{card.name}</h1>
                <div className="flex gap-2">
                  {card.elementType && (
                    <span className={`px-3 py-1 rounded-full text-xs ${
                      elementColors[card.elementType as keyof typeof elementColors].bg} 
                      ${elementColors[card.elementType as keyof typeof elementColors].text}`}>
                      {card.elementType}
                    </span>
                  )}
                  {card.hp && (
                    <span className="text-sm px-3 py-1 bg-red-100 text-red-800 rounded-full">
                      HP {card.hp}
                    </span>
                  )}
                </div>
              </div>

              {/* Informações do Card */}
              <div className="space-y-3 text-sm">
                {card.pokedexNumber && (
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium">Pokédex:</span>
                    <span className="text-gray-600">#{card.pokedexNumber}</span>
                  </div>
                )}

                {card.stage && (
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium">Estágio:</span>
                    <span className="text-gray-600">{card.stage}</span>
                  </div>
                )}

                {card.weakness && (
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium">Fraqueza:</span>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      elementColors[card.weakness as keyof typeof elementColors].bg} 
                      ${elementColors[card.weakness as keyof typeof elementColors].text}`}>
                      {card.weakness}
                    </span>
                  </div>
                )}

                {card.text && (
                  <div className="border-t pt-2 mt-2">
                    <p className="text-gray-600 italic">{card.text}</p>
                  </div>
                )}

                {card.hasSkill && card.skillDescription && (
                  <div className="border-t pt-2 mt-2">
                    <span className="text-gray-700 font-medium block mb-1">Habilidade:</span>
                    <p className="text-gray-600">{card.skillDescription}</p>
                  </div>
                )}

                <div className="flex flex-wrap gap-4 border-t pt-2 mt-2">
                  {card.artistName && (
                    <div className="flex gap-2">
                      <span className="text-gray-700 font-medium">Artista:</span>
                      <span className="text-gray-600">{card.artistName}</span>
                    </div>
                  )}
                  {card.rarity && (
                    <div className="flex gap-2">
                      <span className="text-gray-700 font-medium">Raridade:</span>
                      <span className="text-gray-600">{card.rarity}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 