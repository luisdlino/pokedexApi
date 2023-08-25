import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon.interface';

@Injectable()
export class PokemonService {
  pokemons: Array<Pokemon> = [];
  selectedPokemon!: Pokemon;
  evolutions: Array<Pokemon> = [];
  selectedPokemonDesc = '';

  public setAllPokemons(pokes: Array<Pokemon>) {
    this.pokemons = pokes;
  }

  public getAllPokemons() {
    return this.pokemons;
  }

  public getSpecificPokemon(name: string) {
    return this.pokemons.find((poke: Pokemon) => poke.name === name)
  }

  public setSelectedPokemon(poke: Pokemon) {
    this.selectedPokemon = poke;
  }

  public getSelectedPokemon() {
    return this.selectedPokemon;
  }

  public setSelectedPokemonDesc(desc: string) {
    this.selectedPokemonDesc = desc;
  }

  public getSelectedPokemonDesc() {
    return this.selectedPokemonDesc;
  }

  public setEvolutions(evo: any) {
    this.evolutions = evo;
  }

  public getEvolutions() {
    return this.evolutions;
  }

}
