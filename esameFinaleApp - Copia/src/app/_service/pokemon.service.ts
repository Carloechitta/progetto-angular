import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon, PokemonList } from '../_models/typing';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  baseUrl = 'https://pokeapi.co/api/v2/';

  constructor(private http: HttpClient) { }

  getPokemons() {
    return this.http.get<PokemonList>(this.baseUrl + 'pokemon');
  }

  getPokemonDetail(name: string) {
    return this.http.get<Pokemon>(this.baseUrl + 'pokemon/' + name);
  }
}