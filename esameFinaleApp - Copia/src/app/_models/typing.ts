export type PokemonList = {
    count: number;
    next: string;
    previous: string | null;
    results: { name: string, url: string }[];
}

export type Pokemon = {
  abilities: [
    {
      ability: {
        name: string;
        url: string;
      };
      is_hidden: boolean;
      slot: number;
    }
  ];
  base_experience: number;
  cries: {
    latest: string;
    legacy: string;
  };
  forms: [
    {
      name: string;
      url: string;
    }
  ];
  game_indices: [
    {
      game_index: number;
      version: {
        name: string;
        url: string;
      };
    }
  ];
  height: number;
  held_items: [
    {
      item: {
        name: string;
        url: string;
      };
      version_details: [
        {
          rarity: number;
          version: {
            name: string;
            url: string;
          };
        }
      ];
    }
  ];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: [
    {
      move: {
        name: string;
        url: string;
      };
      version_group_details: [
        {
          level_learned_at: number;
          move_learn_method: {
            name: string;
            url: string;
          };
          version_group: {
            name: string;
            url: string;
          };
        }
      ];
    }
  ];
  name: string;
  order: number;
  past_abilities: [];
  past_types: [];
  species: {
    name: string;
    url: string;
  };
  sprites: any;
  stats: any[];
  types: any[];
  weight: number;
};
