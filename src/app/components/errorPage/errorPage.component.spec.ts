import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from 'src/app/services/http-service.service';
import { LoadingService } from 'src/app/services/loading.service';
import { PokemonService } from 'src/app/services/pokemon.service';
import { ErrorPageComponent } from './errorPage.component';

describe('ErrorPageComponent', () => {

  let fixture: ComponentFixture<ErrorPageComponent>;
  let component: ErrorPageComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
      declarations: [
        ErrorPageComponent
      ],
      providers: [
        HttpService,
        PokemonService,
        LoadingService
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(ErrorPageComponent);
    component = fixture.componentInstance;
  });

  it('should create the ErrorPageComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should call ngOnInit', () => {
    component.ngOnInit();
  });

});
