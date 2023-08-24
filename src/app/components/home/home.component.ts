import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from 'src/app/models/pokemon.interface';
import { LoadingService } from 'src/app/services/loading.service';
import { PokemonService } from 'src/app/services/pokemon.service';
import { HttpService } from '../../services/http-service.service';

@Component({
  selector: 'app-home-pokedex',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  constructor(private httpService: HttpService, private pokemonService: PokemonService,
    private loadingService: LoadingService, private router: Router) {}

  pokemons: Array<Pokemon> = [];
  filteredPokemons: Array<Pokemon> = [];
  types: any[] = [];
  filteredTypes: string[] = [];
  loading = true;
  selectedTypes: string[] = [];
  searchText = '';

  ngOnInit() {
    this.loadingService.setLoad(true);
    for(let i = 1; i <= 150; i++) {
      this.httpService.getPokemon(i).subscribe((res: any) => {
        this.pokemons.push(res);
        this.types.push(res.types);
        if(this.pokemons.length == 150) {
          this.pokemonService.setAllPokemons(this.pokemons);
          this.types.map((typePokemon: any, index: number) => {
            typePokemon.map((innerType: any) => {
              this.filteredTypes.push(innerType.type.name);
            })
            if (index == this.types.length -1) {
              this.filteredTypes = [...new Set(this.filteredTypes)];
            }
          })
          this.pokemons.sort((a,b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0))
          this.loading = false;
          this.loadingService.setLoad(false);
        }
      },
      () => {
        this.router.navigate(['error']);
      })
    }
  }

  setType(event: Event, type: string) {
    if ((<HTMLInputElement>event?.target).checked) {
      this.selectedTypes.push(type);
    } else {
      const index = this.selectedTypes.indexOf(type);
      if (index !== -1) {
        this.selectedTypes.splice(index, 1);
      }
    }
  }
}
