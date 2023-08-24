import { TestBed } from "@angular/core/testing";
import { MockPokemon } from "src/app/mocks/pokemon-mock";
import { FilterPipe } from "./filterPipe";

describe('FilterPipe', () => {
  let formatedValue: FilterPipe;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FilterPipe]
    });
    formatedValue = TestBed.inject(FilterPipe);
  });

  it('FilterPipe instance', () => {
    expect(formatedValue).toBeTruthy();
  })

  it('transform', () => {
    const items = [];
    items.push(MockPokemon);
    expect(formatedValue.transform(items, 'bulbasaur')).toEqual(items)
  });

  it('transform empty items', () => {
    expect(formatedValue.transform([], 'bulbasaur')).toEqual([])
  });

  it('transform empty search text', () => {
    const items = [];
    items.push(MockPokemon);
    expect(formatedValue.transform(items, '')).toEqual(items)
  });

});
