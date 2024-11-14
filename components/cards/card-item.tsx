import { Card } from "@prisma/client";
import Image from "next/image";
import { useRouter } from 'next/navigation';

export default function CardItem({ card }: { card: Card }) {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/cards/${card.id}`);
  };
  
  return (
    <div
      key={card.id}
      onClick={handleCardClick}
      className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-200 cursor-pointer"
    >
      <div className="relative pt-[139%]">
        <Image
          src={card.image}
          alt={card.name}
          className="absolute top-0 left-0 w-full h-full object-cover"
          width={200}
          height={280}
        />
      </div>
    </div>
  )
}