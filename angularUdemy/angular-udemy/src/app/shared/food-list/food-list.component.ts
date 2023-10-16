import { Component } from '@angular/core';

import { FoodListService } from 'src/app/services/food-list.service';
import { FoodList } from '../modules/food-list';


@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent {

  public foodList: FoodList | any
  constructor(private foodListService: FoodListService) {}




  ngOnInit(){
    this.foodListService.foodList().subscribe({
      next: res => this.foodList = res,
      error: err => console.log(err)
    }
    )

    this.foodListService.emitEvent.subscribe(
      res => alert(`Item ${res} adcionado`)
    )

  }

}
