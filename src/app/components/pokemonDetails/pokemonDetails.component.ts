import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.interface';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-details-pokedex',
  templateUrl: './pokemonDetails.component.html',
  styleUrls: ['./pokemonDetails.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PokemonDetailsComponent implements OnInit{

  pokemon!: Pokemon;
  evolutions: Pokemon[] = [];
  desc = ''

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.pokemon = this.pokemonService.getSelectedPokemon();
    this.evolutions = this.pokemonService.getEvolutions();
    this.desc = this.pokemonService.getSelectedPokemonDesc().replace('\f','\n');
  }
}
