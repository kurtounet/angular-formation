import { Injectable } from '@angular/core';

import { mockPokemons } from '../mocks/mockPokemons';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  constructor() { }
  fetchAllPokemons(){    
    return mockPokemons;
  }
}
