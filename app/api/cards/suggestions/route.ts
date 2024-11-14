import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const search = searchParams.get("search") || "";
  const limit = Number(searchParams.get("limit")) || 5;

  try {
    const cards = await prisma.card.findMany({
      where: {
        name: {
          contains: search,
          mode: 'insensitive',
        },
      },
      take: limit,
      select: {
        id: true,
        name: true,
        image: true,
        rarity: true,
        set: {
          select: {
            name: true
          }
        }
      },
    });

    return NextResponse.json({ cards });
  } catch (error) {
    console.error('Erro ao buscar sugestões:', error);
    return NextResponse.json({ error: 'Erro interno do servidor' }, { status: 500 });
  }
} 