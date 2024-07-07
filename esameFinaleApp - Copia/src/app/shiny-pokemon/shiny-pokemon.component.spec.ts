import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShinyPokemonComponent } from './shiny-pokemon.component';

describe('ShinyPokemonComponent', () => {
  let component: ShinyPokemonComponent;
  let fixture: ComponentFixture<ShinyPokemonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShinyPokemonComponent]
    });
    fixture = TestBed.createComponent(ShinyPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
