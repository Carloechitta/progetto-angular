import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from 'src/app/_models/typing';
import { PokemonService } from 'src/app/_service/pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent {
  pokemonName: string | null = '';
  pokemonDetail: Pokemon = {
    abilities: [
      {
        ability: {
          name: '',
          url: '',
        },
        is_hidden: false,
        slot: 0,
      }
    ],
    base_experience: 0,
    cries: {
      latest: '',
      legacy: '',
    },
    forms: [
      {
        name: '',
        url: '',
      }
    ],
    game_indices: [
      {
        game_index: 0,
        version: {
          name: '',
          url: '',
        },
      }
    ],
    height: 0,
    held_items: [
      {
        item: {
          name: '',
          url: '',
        },
        version_details: [
          {
            rarity: 0,
            version: {
              name: '',
              url: '',
            },
          }
        ],
      }
    ],
    id: 0,
    is_default: false,
    location_area_encounters: '',
    moves: [
      {
        move: {
          name: '',
          url: '',
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: '',
              url: '',
            },
            version_group: {
              name: '',
              url: '',
            },
          }
        ],
      }
    ],
    name: '',
    order: 0,
    past_abilities: [],
    past_types: [],
    species: {
      name: '',
      url: '',
    },
    sprites: 0,
    stats: [0],
    types: [0],
    weight: 0
  }

  constructor(private route: ActivatedRoute, private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonName = this.route.snapshot.paramMap.get('name');
    if (this.pokemonName) {
      this.pokemonService.getPokemonDetail(this.pokemonName).subscribe(res => {
        console.log(res);
        this.pokemonDetail = res; 
      });
    }
  }
}
