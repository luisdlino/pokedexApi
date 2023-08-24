import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Evolution } from 'src/app/models/evolution.interface';
import { Pokemon } from 'src/app/models/pokemon.interface';
import { HttpService } from 'src/app/services/http-service.service';
import { LoadingService } from 'src/app/services/loading.service';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-poke-card',
  templateUrl: './pokeCard.component.html',
  styleUrls: ['./pokeCard.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PokeCardComponent {

  @Input() pokemon!: Pokemon;
  @Input() selectedTypes: Array<any> = [];
  @Input() selected = false;

  constructor(private httpService: HttpService,
    private pokemonService: PokemonService,
    private loadingService: LoadingService,
    private router: Router) {}

  checkType(pokemon: Pokemon) {
    if (pokemon.types.some((r: any) => this.selectedTypes.includes(r.type.name))) {
      return true;
    }
    if (this.selectedTypes.length == 0) {
      return true;
    }
    return false;
  }

  checkPokemonDetails(poke: Pokemon) {
    this.loadingService.setLoad(true);
    this.pokemonService.setSelectedPokemon(poke)
    this.httpService.getSpecie(poke.name)
      .pipe(
        switchMap((specie: any) => {
          return this.httpService.getChain(specie.evolution_chain.url);
        })
    ).subscribe((chain: any) => {
      this.pokemonService.setEvolutions(this.getChain(chain));
      this.loadingService.setLoad(false);
      this.router.navigate(['pokemon-details']);
    }, () => {
      this.router.navigate(['error']);
    });
  }

  getChain(chain: Evolution) {
    const evoChain = [];
    let evoData = chain.chain;

    do {
      const numberOfEvolutions = evoData.evolves_to.length;
      evoChain.push(this.pokemonService.getSpecificPokemon(evoData.species.name));

      if(numberOfEvolutions > 1) {
        for (let i = 1; i < numberOfEvolutions; i++) {
          if(this.pokemonService.getSpecificPokemon(evoData.evolves_to[i].species.name)) {
            evoChain.push(this.pokemonService.getSpecificPokemon(evoData.evolves_to[i].species.name));
          }
        }
      }

      evoData = evoData.evolves_to[0];

    } while (evoData != undefined);

    return evoChain;
  }
}
