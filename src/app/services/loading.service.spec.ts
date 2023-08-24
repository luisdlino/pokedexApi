import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from 'src/app/services/http-service.service';
import { LoadingService } from 'src/app/services/loading.service';
import { PokemonService } from 'src/app/services/pokemon.service';

describe('LoadingService', () => {

  let service: LoadingService;

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
    service = TestBed.inject(LoadingService)
  });

  it('should create the LoadingService', () => {
    expect(service).toBeTruthy();
  });

});
