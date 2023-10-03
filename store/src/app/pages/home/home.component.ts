import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})

export class HomeComponent{

  category: string | undefined

  cols = 3;

  ngOnInit(): void{

  }

  onColumnsCountChange(colsNumber: number): void{
    this.cols = colsNumber;
  }

  onShowCategory(newCategory: string): void{
    this.category = newCategory
  }
}
