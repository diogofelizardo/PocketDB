"use client";
import { Suspense } from 'react';
import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Card } from '@prisma/client';
import CardItem from '@/components/cards/card-item';
import { getBaseUrl } from '@/lib/utils';

function SearchContent() {
  const searchParams = useSearchParams();
  const initialSearch = searchParams.get('q') || '';
  
  const [cards, setCards] = useState<Card[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCards = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          new URL(`/api/cards?page=${page}&search=${initialSearch}&limit=12`, getBaseUrl())
        );
        const data = await res.json();
        setCards(data.cards);
        setTotalPages(data.pages);
      } catch (error) {
        console.error('Erro ao buscar cards:', error);
      }
      setLoading(false);
    };

    fetchCards();
  }, [page, initialSearch]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100 py-8">
      <div className="container mx-auto px-2 sm:px-4 w-full lg:w-[60%]">
        {/* Grid de Cards */}
        {loading ? (
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500"></div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {cards.map((card) => (
                <CardItem key={card.id} card={card} />
              ))}
            </div>

            {/* Paginação */}
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
                <button
                  key={num}
                  onClick={() => setPage(num)}
                  className={`px-4 py-2 rounded-md ${
                    page === num
                      ? 'bg-purple-500 text-white'
                      : 'bg-white text-gray-800 hover:bg-purple-50'
                  }`}
                >
                  {num}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500"></div>
      </div>
    }>
      <SearchContent />
    </Suspense>
  );
} 