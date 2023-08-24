import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockPokemon } from 'src/app/mocks/pokemon-mock';
import { MockSpecie } from 'src/app/mocks/specie-mock';
import { HttpService } from 'src/app/services/http-service.service';
import { LoadingService } from 'src/app/services/loading.service';
import { PokemonService } from 'src/app/services/pokemon.service';
import { PokeCardComponent } from './pokeCard.component';
import { of } from 'rxjs';
import { MockChain } from 'src/app/mocks/chain-mock';
import { Router } from '@angular/router';

describe('PokeCardComponent', () => {

  let fixture: ComponentFixture<PokeCardComponent>;
  let component: PokeCardComponent;
  let httpService: HttpService
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
      declarations: [
        PokeCardComponent
      ],
      providers: [
        HttpService,
        PokemonService,
        LoadingService
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(PokeCardComponent);
    component = fixture.componentInstance;
    httpService = TestBed.get(HttpService);
    router = TestBed.get(Router);
  });

  it('should create the PokeCard component', () => {
    expect(component).toBeTruthy();
  });

  it('should call checkType without selected type', () => {
    component.checkType(MockPokemon);
  });

  it('should call checkType with type grass', () => {
    component.selectedTypes.push('grass');
    component.checkType(MockPokemon);
  });

  it('should call checkType with type fire', () => {
    component.selectedTypes.push('fire');
    component.checkType(MockPokemon);
  });

  it('should call checkPokemonDetails', () => {
    spyOn(httpService, 'getSpecie').withArgs('bulbasaur').and.returnValue(of(MockSpecie));
    spyOn(httpService, 'getChain').and.returnValue(of(MockChain));
    spyOn(router, 'navigate');
    component.checkPokemonDetails(MockPokemon);
  });



});
