import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http'
import { NewComponentComponent } from './new-component/new-component.component';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodAddComponent } from './food-add/food-add.component';



@NgModule({
  declarations: [
    NewComponentComponent,
    FoodListComponent,
    FoodAddComponent
  ],
  exports: [NewComponentComponent, FoodListComponent, FoodAddComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class SharedModule { }
