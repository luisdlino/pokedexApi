import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LoadingComponent } from './loading.component';

describe('LoadingComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        LoadingComponent
      ],
    }).compileComponents();
  });

  it('should create the loading component', () => {
    const fixture = TestBed.createComponent(LoadingComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

});
