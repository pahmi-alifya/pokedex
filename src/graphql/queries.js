import { gql } from "@apollo/client";

export const GET_POKEMONS = gql`
  query (
    $offset: Int
    $take: Int
    $reverse: Boolean
    $offsetFlavorTexts: Int
    $takeFlavorTexts: Int
    $reverseFlavorTexts: Boolean
  ) {
    getAllPokemon(
      offset: $offset
      take: $take
      reverse: $reverse
      offsetFlavorTexts: $offsetFlavorTexts
      takeFlavorTexts: $takeFlavorTexts
      reverseFlavorTexts: $reverseFlavorTexts
    ) {
      key
      sprite
      baseStats {
        attack
        defense
        hp
        specialattack
        specialdefense
        speed
      }
      species
      types {
        name
      }
    }
  }
`;

export const GET_POKEMON = gql`
  query (
    $offsetFlavorTexts: Int
    $takeFlavorTexts: Int
    $reverseFlavorTexts: Boolean
    $pokemon: PokemonEnum!
  ) {
    getPokemon(
      offsetFlavorTexts: $offsetFlavorTexts
      takeFlavorTexts: $takeFlavorTexts
      reverseFlavorTexts: $reverseFlavorTexts
      pokemon: $pokemon
    ) {
      key
      backSprite
      baseForme
      baseSpecies
      baseStats {
        attack
        defense
        hp
        specialattack
        specialdefense
        speed
      }
      baseStatsTotal
      bulbapediaPage
      catchRate {
        base
        percentageWithOrdinaryPokeballAtFullHealth
      }
      color
      cosmeticFormes
      eggGroups
      evolutionLevel
      evolutions {
        key
        backSprite
        baseForme
        baseSpecies
        baseStatsTotal
        bulbapediaPage
        color
        cosmeticFormes
        eggGroups
        evolutionLevel
        forme
        formeLetter
        height
        isEggObtainable
        levellingRate
        maximumHatchTime
        minimumHatchTime
        num
        otherFormes
        serebiiPage
        shinyBackSprite
        shinySprite
        smogonPage
        smogonTier
        species
        sprite
        weight
      }
      evYields {
        attack
        defense
        hp
        specialattack
        specialdefense
        speed
      }
      flavorTexts {
        flavor
        game
      }
      forme
      formeLetter
      gender {
        female
        male
      }
      height
      isEggObtainable
      levellingRate
      maximumHatchTime
      minimumHatchTime
      num
      otherFormes
      preevolutions {
        key
        backSprite
        baseForme
        baseSpecies
        baseStatsTotal
        bulbapediaPage
        color
        cosmeticFormes
        eggGroups
        evolutionLevel
        forme
        formeLetter
        height
        isEggObtainable
        levellingRate
        maximumHatchTime
        minimumHatchTime
        num
        otherFormes
        serebiiPage
        shinyBackSprite
        shinySprite
        smogonPage
        smogonTier
        species
        sprite
        weight
      }
      serebiiPage
      shinyBackSprite
      shinySprite
      smogonPage
      smogonTier
      species
      sprite
      types {
        name
      }
      weight
    }
  }
`;
