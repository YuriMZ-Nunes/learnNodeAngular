import { Component } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent {
  title:string = "Bem Vindo!"

  nome = "Yuri Nunes"

  checkedDisable = true

  ngOnInit(){
    this.title =  "Bem vindo!!"
  }

  consoleFunctionButton(){
    console.log("botao apertado")
    this.nome = "MUDEI FODASE"
  }

}
