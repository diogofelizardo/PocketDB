import { ElementType, CardType, Rarity, Stage } from '@prisma/client'

export type PokemonSeedData = {
  name: string
  pokedexNumber: number
  image: string
  text: string
  hp: number
  elementType: ElementType
  cardType: CardType
  rarity: Rarity
  stage: Stage
  artistName: string
} 