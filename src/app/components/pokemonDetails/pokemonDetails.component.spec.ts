import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockPokemon } from 'src/app/mocks/pokemon-mock';
import { PokemonService } from 'src/app/services/pokemon.service';
import { PokemonDetailsComponent } from './pokemonDetails.component';

describe('PokemonDetailsComponent', () => {

  let fixture: ComponentFixture<PokemonDetailsComponent>;
  let component: PokemonDetailsComponent;
  let pokeService: PokemonService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        PokemonDetailsComponent
      ],
      providers: [
        PokemonService
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(PokemonDetailsComponent);
    component = fixture.componentInstance;
    pokeService = TestBed.get(PokemonService)
  }));

  it('should create the PokemonDetails component', () => {
    expect(component).toBeTruthy();
  });

  it('should call ngOnInit', () => {
    spyOn(pokeService,'getSelectedPokemon').and.returnValue(MockPokemon);
    component.ngOnInit();
    expect(component.pokemon).toBe(MockPokemon);
  });

});
