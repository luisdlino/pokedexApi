import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockPokemon } from 'src/app/mocks/pokemon-mock';
import { HttpService } from 'src/app/services/http-service.service';
import { LoadingService } from 'src/app/services/loading.service';
import { PokemonService } from 'src/app/services/pokemon.service';
import { HomeComponent } from './home.component';
import { of } from 'rxjs';

describe('HomeComponent', () => {

  let fixture: ComponentFixture<HomeComponent>;
  let component: HomeComponent;
  let httpService: HttpService

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
      declarations: [
        HomeComponent
      ],
      providers: [
        HttpService,
        PokemonService,
        LoadingService
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    httpService = TestBed.get(HttpService);
  });

  it('should create the Home component', () => {
    expect(component).toBeTruthy();
  });


  it('should call ngOnInit', () => {
    spyOn(httpService, 'getPokemon').and.returnValue(of(MockPokemon));
    component.ngOnInit();
  });

});
