import Image from 'next/image';
import { SearchInput } from '@/components/shared/search-input';

export default function Home() {
  return (
    <main>
      <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100 py-8">
        <div className="container mx-auto px-2 sm:px-4">
          {/* Logo */}
          <div className="text-center">
            <div className="mb-8">
              <Image 
                src="/logo.svg" 
                alt="Logo" 
                className="mx-auto w-48"
                width={192}
                height={192}
              />
            </div>

            {/* Título */}
            <h1 className="text-4xl font-bold text-gray-800 mb-12">
              Pokémon TCG Pocket Database
            </h1>
          </div>

          {/* Barra de busca */}
          <div className="max-w-2xl mx-auto mb-8">
            <SearchInput initialSearch={''} />
          </div>

          {/* Botões */}
          <div className="flex justify-center gap-4 mb-12">
            <button className="px-6 py-2 bg-white text-gray-800 rounded-md hover:bg-purple-50 border border-gray-200">
              Todos os conjuntos
            </button>
            <button className="px-6 py-2 bg-white text-gray-800 rounded-md hover:bg-purple-50 border border-gray-200">
              Pesquisa avançada
            </button>
            <button className="px-6 py-2 bg-white text-gray-800 rounded-md hover:bg-purple-50 border border-gray-200">
              Montar decks
            </button>
          </div>

          {/* Top Cards */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Top Cards</h2>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-2 px-4">
              {[1, 2, 3].map((index) => (
                <div 
                  key={index} 
                  className="w-[200px] h-[280px] bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-200"
                >
                  <Image
                    src={`/images/card-${index}.webp`}
                    alt={`Pokémon Card ${index}`}
                    className="w-full h-full object-cover"
                    width={200}
                    height={280}
                  />
                </div>
              ))}
            </div>
          </div>

          
        </div>
      </div>
    </main>
  );
}