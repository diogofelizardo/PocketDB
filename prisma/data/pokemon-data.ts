import { ElementType, CardType, Rarity, Stage } from '@prisma/client'
import { PokemonSeedData } from '../types/seed-types'

export const pokemonData: PokemonSeedData[] = [
  {
    name: 'Charizard',
    pokedexNumber: 6,
    image: 'https://example.com/charizard.jpg',
    text: 'Flame Pokémon',
    hp: 120,
    elementType: ElementType.FIRE,
    cardType: CardType.POKEMON,
    rarity: Rarity.DIAMOND_3,
    stage: Stage.STAGE_2,
    artistName: 'Mitsuhiro Arita'
  },
  {
    name: 'Blastoise',
    pokedexNumber: 9,
    image: 'https://example.com/blastoise.jpg',
    text: 'Shellfish Pokémon',
    hp: 100,
    elementType: ElementType.WATER,
    cardType: CardType.POKEMON,
    rarity: Rarity.DIAMOND_3,
    stage: Stage.STAGE_2,
    artistName: 'Ken Sugimori'
  },
  {
    name: 'Venusaur',
    pokedexNumber: 3,
    image: 'https://example.com/venusaur.jpg',
    text: 'Seed Pokémon',
    hp: 100,
    elementType: ElementType.GRASS,
    cardType: CardType.POKEMON,
    rarity: Rarity.DIAMOND_3,
    stage: Stage.STAGE_2,
    artistName: 'Mitsuhiro Arita'
  },
  {
    name: 'Pikachu',
    pokedexNumber: 25,
    image: 'https://example.com/pikachu.jpg',
    text: 'Mouse Pokémon',
    hp: 60,
    elementType: ElementType.LIGHTNING,
    cardType: CardType.POKEMON,
    rarity: Rarity.DIAMOND_1,
    stage: Stage.BASIC,
    artistName: 'Ken Sugimori'
  },
  {
    name: 'Mewtwo',
    pokedexNumber: 150,
    image: 'https://example.com/mewtwo.jpg',
    text: 'Genetic Pokémon',
    hp: 110,
    elementType: ElementType.PSYCHIC,
    cardType: CardType.POKEMON,
    rarity: Rarity.DIAMOND_3,
    stage: Stage.BASIC,
    artistName: 'Ken Sugimori'
  }
] 