import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
  constructor(private http: HttpClient) { }

  public getPokemon(id: number) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  }

  public getSpecie(pokemonName: string) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemonName}`)
  }

  public getChain(pokemonId: string) {
    return this.http.get(pokemonId)
  }
}
