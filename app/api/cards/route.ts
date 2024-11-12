import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get('page') || '1');
  const limit = parseInt(searchParams.get('limit') || '12');
  const search = searchParams.get('search') || '';

  try {
    const cards = await prisma.card.findMany({
      where: {
        name: {
          contains: search,
          mode: 'insensitive',
        },
      },
      include: {
        set: true,
      },
      take: limit,
      skip: (page - 1) * limit,
    });

    const total = await prisma.card.count({
      where: {
        name: {
          contains: search,
          mode: 'insensitive',
        },
      },
    });

    return NextResponse.json({
      cards,
      total,
      pages: Math.ceil(total / limit),
    });
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao buscar cards' }, { status: 500 });
  }
}