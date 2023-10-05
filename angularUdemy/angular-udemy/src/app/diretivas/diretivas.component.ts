import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.scss']
})
export class DiretivasComponent {
  showName = true;
  name = "Yuri Nunes"

  newName: string = ""
  newAge: number = 0

  avgAgeTotal: number = 0
  avgAge: number = 0
  @Output() avgAgeEm = new EventEmitter()

  list: Array<{name: string, age: number}> = [
    {name: "Miguel", age: 20},
    {name: "Larissa", age: 21},
    {name: "Kevin",age: 19},
    {name: "Jessica", age: 26}]

  showButton(){
    if(this.showName)
      this.showName = false
    else this.showName = true
  }

  ngOnInit(){
    this.avgAge = this.calcAvg(this.list.length)
  }

  onClickAddNew(){
    this.list.push({name: this.newName, age: this.newAge})
    this.avgAge = this.calcAvg(this.list.length)
  }

  calcAvg(length: number): number{
    let avgAge, avgAgeTotal = 0

    for(let i = 0; i < length; i++){
      avgAgeTotal = avgAgeTotal + this.list[i].age
    }
    avgAge = avgAgeTotal / length

    this.avgAgeEm.emit(avgAge)
    return avgAge
  }

  onCLickList(index: number){
    this.list.splice(index, 1)
    this.avgAge = this.calcAvg(this.list.length)
  }



}
