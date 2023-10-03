import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl:'./filters.component.html',
})
export class FiltersComponent {
  @Output() showCategory = new EventEmitter<string>()
  categories = ['Hardware', 'Perifericos']

  onShowCategory(category: string): void {
    this.showCategory.emit(category)
  }
}
