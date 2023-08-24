import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from 'src/app/services/http-service.service';
import { LoadingService } from 'src/app/services/loading.service';
import { PokemonService } from 'src/app/services/pokemon.service';

describe('HttpService', () => {

  let service: HttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
      providers: [
        HttpService,
        PokemonService,
        LoadingService
      ]
    }).compileComponents();
    service = TestBed.inject(HttpService)
  });

  it('should create the HttpService', () => {
    expect(service).toBeTruthy();
  });


  it('should call getPokemon in service', () => {
    spyOn(service, 'getPokemon').and.callThrough();
    service.getPokemon(1);
  });

  it('should call getChain in service', () => {
    spyOn(service, 'getChain').and.callThrough();
    service.getChain('1');
  });

  it('should call getSpecie in service', () => {
    spyOn(service, 'getSpecie').and.callThrough();
    service.getSpecie('bulbasaur');
  });

});
