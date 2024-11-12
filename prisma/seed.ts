import { PrismaClient } from '@prisma/client'
import { pokemonData } from './data/pokemon-data'

const prisma = new PrismaClient()

async function cleanDatabase() {
  // Limpa o banco antes de fazer o seed
  await prisma.card.deleteMany()
  await prisma.pack.deleteMany()
  await prisma.set.deleteMany()
}

async function main() {
  console.log('Iniciando seed...')

  await cleanDatabase()

  console.log('Criando set base...')
  const baseSet = await prisma.set.create({
    data: {
      name: 'Base Set',
      codeName: 'BS',
      releaseDate: new Date('1999-01-09'),
      packs: {
        create: {
          name: 'Base Set Booster Pack',
        }
      }
    }
  })

  console.log('Criando cards...')
  for (const pokemon of pokemonData) {
    await prisma.card.create({
      data: {
        ...pokemon,
        setId: baseSet.id
      }
    })
  }

  console.log('Seed concluído com sucesso!')
}

main()
  .catch((e) => {
    console.error('Erro durante o seed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 