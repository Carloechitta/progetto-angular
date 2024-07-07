import { Component } from '@angular/core';
import { PokemonList } from 'src/app/_models/typing';
import { PokemonService } from 'src/app/_service/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  pokemonList: PokemonList = {
    count: 0,
    next: '',
    previous: '',
    results: [{ name: '', url: '' }]
  };

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.getPokemons().subscribe(res => {
      this.pokemonList = res;
    });
  }
}