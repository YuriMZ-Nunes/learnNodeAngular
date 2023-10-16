import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {


  private urlPokemon: string = 'https://pokeapi.co/api/v2/pokemon'
  private urlPokemonName: string = 'https://pokeapi.co/api/v2/pokemon-species'

  public resPokemon: any
  public isLoading: boolean = false

  constructor(
    private activatedRouter: ActivatedRoute,
    private pokeApiService: PokeApiService
  ){}

  ngOnInit(){
    this.pokemon()
  }
  public pokemon(){

    const id = this.activatedRouter.snapshot.params['id']
    const pokemon = this.pokeApiService.apiGetPokemon(`${this.urlPokemon}/${id}`)
    const name = this.pokeApiService.apiGetPokemon(`${this.urlPokemonName}/${id}`)

    forkJoin([pokemon, name]).subscribe(
      res =>{
        this.resPokemon = res
        this.isLoading = true
      }
    )

    return
  }
}
