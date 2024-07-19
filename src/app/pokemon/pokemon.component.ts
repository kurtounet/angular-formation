import { Component, OnInit } from '@angular/core'; 
import { Ipokemon } from '../../shared/interfaces/pokemon';
import { PokemonService } from '../../shared/services/pokemon.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent  implements OnInit{
  arrayPokemons:Ipokemon[] = [];
  constructor(private pokemonService:PokemonService) { }
  
  ngOnInit():void{
    this.arrayPokemons = this.pokemonService.fetchAllPokemons();
    console.log(this.arrayPokemons);
  }
  onDetailPokemon(){
    console.log('detail pokemon');
  }

}
